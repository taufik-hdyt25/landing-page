import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { commentBy, content, attendance } = await req.json();

  const data = await prisma.comment.create({
    data: {
      commentBy,
      content,
      attendance,
    },
  });

  return Response.json(data);
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page") || 1);
    const limit = Number(searchParams.get("limit") || 10);

    const skip = (page - 1) * limit;

    // ambil data
    const [data, total] = await Promise.all([
      prisma.comment.findMany({
        skip,
        take: limit,
        include: {
          replies: true,
        },
        orderBy: { createdAt: "desc" },
      }),
      prisma.comment.count(),
    ]);

    const totalPages = Math.ceil(total / limit);

    return Response.json(
      {
        data,
        pagination: {
          page,
          limit,
          total,
          totalPages,
        },
        code: 200,
        status: "success",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        data: null,
        code: 500,
        status: "error",
      },
      { status: 500 }
    );
  }
}

import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const commentId = Number(searchParams.get("commentId"));

    if (!commentId) {
      return Response.json(
        {
          data: null,
          code: 400,
          status: "error",
          message: "commentId is required",
        },
        { status: 400 }
      );
    }

    const data = await prisma.reply.findMany({
      where: { commentId },
      orderBy: { createdAt: "desc" },
    });

    return Response.json(
      {
        data,
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
export async function POST(req: Request) {
  const { replyBy, content, commentId } = await req.json();

  const data = await prisma.reply.create({
    data: {
      replyBy,
      content,
      commentId,
    },
  });

  return Response.json(data);
}

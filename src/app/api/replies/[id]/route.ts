import { prisma } from "@/lib/prisma";

export async function PUT(req: Request, { params }: any) {
  const { id } = params;
  const { replyBy, content } = await req.json();

  const data = await prisma.reply.update({
    where: { id: Number(id) },
    data: {
      replyBy,
      content,
    },
  });

  return Response.json(data);
}

export async function DELETE(req: Request, { params }: any) {
  const { id } = params;

  const data = await prisma.reply.delete({
    where: { id: Number(id) },
  });

  return Response.json(data);
}

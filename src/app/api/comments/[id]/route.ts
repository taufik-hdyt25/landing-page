import { prisma } from "@/lib/prisma";

export async function PUT(req: Request, { params }: any) {
  const { id } = params;
  const { commentBy, content, attendance } = await req.json();

  const data = await prisma.comment.update({
    where: { id: Number(id) },
    data: {
      commentBy,
      content,
      attendance,
    },
  });

  return Response.json(data);
}

export async function DELETE(req: Request, { params }: any) {
  const { id } = params;

  await prisma.reply.deleteMany({ where: { commentId: Number(id) } });

  const data = await prisma.comment.delete({
    where: { id: Number(id) },
  });

  return Response.json(data);
}

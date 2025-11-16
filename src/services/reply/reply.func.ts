import { useMutation, useQuery } from "@tanstack/react-query";
import { getListReplies, postReplyFromAPI } from "./reply.api";
import { ICreateReply } from "./reply.types";

export const actionGetListReplies = (id: number, enabled?: boolean) =>
  useQuery({
    queryKey: ["actionGetListReplies", id],
    queryFn: () => getListReplies(id),
    enabled: enabled,
  });

export const actionPostReply = () =>
  useMutation({
    mutationFn: (body: ICreateReply) => postReplyFromAPI(body),
  });

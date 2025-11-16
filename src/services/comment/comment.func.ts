import { useMutation, useQuery } from "@tanstack/react-query";
import { getListComments, postCommentFromAPI } from "./comment.api";
import { ICreateComment } from "./comment.types";

export const actionGetListComment = () =>
  useQuery({
    queryKey: ["actionGetListComment"],
    queryFn: () => getListComments(),
  });
export const actionPostComment = () =>
  useMutation({
    mutationFn: (body: ICreateComment) => postCommentFromAPI(body),
  });

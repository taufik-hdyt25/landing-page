import { useQuery } from "@tanstack/react-query";
import { getListComments } from "./comment.api";

export const actionGetListComment = () =>
  useQuery({
    queryKey: ["actionGetListComment"],
    queryFn: () => getListComments(),
  });

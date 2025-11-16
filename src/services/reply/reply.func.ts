import { useQuery } from "@tanstack/react-query";
import { getListReplies } from "./reply.api";

export const actionGetListReplies = (id: number, enabled?: boolean) =>
  useQuery({
    queryKey: ["actionGetListReplies"],
    queryFn: () => getListReplies(id),
    enabled: enabled,
  });

import callAPI from "@/utils/fetcher/fetcher";
import { ICreateReply } from "./reply.types";

export const getListReplies = (id: number) =>
  callAPI({
    method: "GET",
    servicesPath: `replies?commentId=${id}`,
  });

export const postReplyFromAPI = (params: ICreateReply) =>
  callAPI({
    method: "POST",
    servicesPath: "replies",
    params,
  });

export const putProductFromAPI = (id: number, params: { name: string }) =>
  callAPI({
    method: "GET",
    servicesPath: `product/${id}`,
    params,
  });

export const deleteProductFromAPI = (id: number) =>
  callAPI({
    method: "GET",
    servicesPath: `product/${id}`,
  });

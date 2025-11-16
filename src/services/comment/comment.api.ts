import callAPI from "@/utils/fetcher/fetcher";
import { ICreateComment } from "./comment.types";

export const getListComments = () =>
  callAPI({
    method: "GET",
    servicesPath: "comments",
  });

export const postCommentFromAPI = (params: ICreateComment) =>
  callAPI({
    method: "POST",
    servicesPath: "comments",
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

import callAPI from "@/utils/fetcher/fetcher";

export const getListComments = () =>
  callAPI({
    method: "GET",
    servicesPath: "comments",
  });

export const postProductFromAPI = (params: { name: string }) =>
  callAPI({
    method: "GET",
    servicesPath: "product",
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

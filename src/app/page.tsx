import WeddingInvitation from "@/containers/WeddingInvitation";
import { generateParams } from "@/helpers/generateParams";
import { IParams } from "@/interfaces/IBaseParams";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding - Taufik & Hidayat",
};
const HomePage = async ({ searchParams, params }: IParams) => {
  const { query } = await generateParams({ searchParams, params });

  const sendParams: any = {
    to: query?.to ? String(query.to) : "",
    page: query.page ? String(query.page) : 1,
  };

  return <WeddingInvitation params={sendParams} />;
};

export default HomePage;

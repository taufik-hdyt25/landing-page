import WeddingInvitation from "@/containers/WeddingInvitation";
import { generateParams } from "@/helpers/generateParams";
import { IParams } from "@/interfaces/IBaseParams";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beranda - Aplikasi Saya",
};
const HomePage = async ({ searchParams, params }: IParams) => {
  const { query } = await generateParams({ searchParams, params });

  const sendParams = {
    to: query?.to ? String(query.to) : "",
  };

  return <WeddingInvitation params={sendParams} />;
};

export default HomePage;

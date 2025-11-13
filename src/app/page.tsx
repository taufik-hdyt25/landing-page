import WeddingInvitation from "@/containers/WeddingInvitation";
import { IParams } from "@/interfaces/IBaseParams";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beranda - Aplikasi Saya",
};
const HomePage = async ({ searchParams, params }: IParams) => {
  // const { query } = await generateParams({ searchParams, params });

  return <WeddingInvitation />;
};

export default HomePage;

import HomeOpen from "@/containers/HomeOpen";
import { generateParams } from "@/helpers/generateParams";
import { IParams } from "@/interfaces/IBaseParams";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Invitation",
};
const HomeOpenPage = async ({ searchParams, params }: IParams) => {
  const { query } = await generateParams({ searchParams, params });

  return <HomeOpen params={query} />;
};

export default HomeOpenPage;

import Home from "@/containers/Home";
import { IParams } from "@/interfaces/IBaseParams";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My App",
};
const HomePage = async ({ searchParams, params }: IParams) => {
  // const { query } = await generateParams({ searchParams, params });

  return <Home />;
};

export default HomePage;

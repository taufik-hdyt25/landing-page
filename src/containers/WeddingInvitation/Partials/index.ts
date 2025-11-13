"use client";
import dynamic from "next/dynamic";

const OpenFirst = dynamic(() => import("./OpenFirst"), { ssr: false });
const MainPage = dynamic(() => import("./Main"), { ssr: false });

export { OpenFirst, MainPage };

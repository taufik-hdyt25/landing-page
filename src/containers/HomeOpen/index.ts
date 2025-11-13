"use client";

import dynamic from "next/dynamic";

const HomeOpen = dynamic(() => import("./HomeOpen"), { ssr: false });

export default HomeOpen;

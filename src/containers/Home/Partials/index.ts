"use client";

import dynamic from "next/dynamic";

const CardProject = dynamic(() => import("./CardProject"), { ssr: false });

export { CardProject };

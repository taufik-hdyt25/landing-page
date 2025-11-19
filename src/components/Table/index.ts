"use client";

import dynamic from "next/dynamic";
const Table = dynamic(() => import("./Table"), { ssr: false });
export default Table;

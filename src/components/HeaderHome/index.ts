"use client";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("./HeaderHome"), { ssr: false });
export default Header;

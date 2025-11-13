"use client";

import dynamic from "next/dynamic";

const WeddingInvitation = dynamic(() => import("./WeddingInvitation"), {
  ssr: false,
});

export default WeddingInvitation;

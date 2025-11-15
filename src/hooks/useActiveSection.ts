"use client";

import { useEffect, useState } from "react";

export const useActiveSection = (ids: string[], containerId: string) => {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const handleScroll = () => {
      const scrollPos = container.scrollTop;

      // Cari section yang paling dekat ke scrollTop
      let closestId = ids[0];
      let closestDistance = Infinity;

      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const distance = Math.abs(el.offsetTop - scrollPos);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = id;
        }
      });

      if (closestId !== active) {
        setActive(closestId);
      }
    };

    // trigger sekali di awal
    handleScroll();

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [ids, containerId, active]);

  return active;
};

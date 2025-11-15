"use client";

import { useRef } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

const ManualConfettiButton = (props: ButtonProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const fireConfetti = () => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d")!;
    const rect = containerRef.current.getBoundingClientRect();

    // Canvas dibuat lebih BESAR supaya confetti terlihat
    canvas.width = rect.width * 3;
    canvas.height = rect.height * 3;

    // Posisi center relative terhadap canvas baru
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const particles = Array.from({ length: 40 }).map(() => ({
      x: centerX,
      y: centerY,
      angle: Math.random() * Math.PI * 2,
      speed: 4 + Math.random() * 5,
      gravity: 0.12,
      opacity: 1,
      size: 5 + Math.random() * 6,
      color: `hsl(${Math.random() * 360}, 90%, 60%)`,
    }));

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed + p.gravity;
        p.gravity += 0.04;
        p.opacity -= 0.01; // lebih lambat supaya terlihat

        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      });

      ctx.globalAlpha = 1;

      if (particles.some((p) => p.opacity > 0)) {
        requestAnimationFrame(draw);
      }
    }

    draw();
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      {/* Canvas dibesarkan dan ditarik keluar area button */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: "-100%",
          left: "-100%",
          width: "300%",
          height: "300%",
          pointerEvents: "none",
        }}
      />

      <Button colorScheme="red" onClick={fireConfetti} {...props}>
        {props.children}
      </Button>
    </div>
  );
};

export default ManualConfettiButton;

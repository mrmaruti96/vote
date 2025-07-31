import { useEffect, useRef } from 'react';

interface Cloud {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export default function FoggyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cloudsRef = useRef<Cloud[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createClouds = () => {
      cloudsRef.current = [];
      const cloudCount = Math.min(15, Math.floor((canvas.width * canvas.height) / 30000));
      
      for (let i = 0; i < cloudCount; i++) {
        cloudsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.15,
          size: Math.random() * 200 + 100,
          opacity: Math.random() * 0.3 + 0.1
        });
      }
    };

    const animate = () => {
      // Create cozy gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#2d1b0e');
      gradient.addColorStop(0.3, '#3e2723');
      gradient.addColorStop(0.7, '#1a0e0a');
      gradient.addColorStop(1, '#0d0603');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      cloudsRef.current.forEach((cloud) => {
        // Update position
        cloud.x += cloud.vx;
        cloud.y += cloud.vy;

        // Wrap around edges
        if (cloud.x > canvas.width + cloud.size) cloud.x = -cloud.size;
        if (cloud.x < -cloud.size) cloud.x = canvas.width + cloud.size;
        if (cloud.y > canvas.height + cloud.size) cloud.y = -cloud.size;
        if (cloud.y < -cloud.size) cloud.y = canvas.height + cloud.size;

        // Create warm, cozy cloud gradient
        const cloudGradient = ctx.createRadialGradient(
          cloud.x, cloud.y, 0,
          cloud.x, cloud.y, cloud.size
        );
        cloudGradient.addColorStop(0, `rgba(255, 235, 205, ${cloud.opacity * 0.6})`);
        cloudGradient.addColorStop(0.4, `rgba(222, 184, 135, ${cloud.opacity * 0.4})`);
        cloudGradient.addColorStop(0.7, `rgba(160, 120, 90, ${cloud.opacity * 0.2})`);
        cloudGradient.addColorStop(1, 'rgba(101, 67, 33, 0)');

        // Draw cloud with blur effect
        ctx.save();
        ctx.globalAlpha = cloud.opacity;
        ctx.filter = 'blur(20px)';
        ctx.fillStyle = cloudGradient;
        ctx.beginPath();
        ctx.arc(cloud.x, cloud.y, cloud.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Add subtle floating particles
        for (let i = 0; i < 3; i++) {
          const particleX = cloud.x + (Math.random() - 0.5) * cloud.size * 0.8;
          const particleY = cloud.y + (Math.random() - 0.5) * cloud.size * 0.8;
          
          ctx.save();
          ctx.globalAlpha = cloud.opacity * 0.6;
          ctx.filter = 'blur(8px)';
          ctx.fillStyle = `rgba(255, 220, 177, ${cloud.opacity * 0.4})`;
          ctx.beginPath();
          ctx.arc(particleX, particleY, Math.random() * 3 + 1, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createClouds();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createClouds();
    });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}

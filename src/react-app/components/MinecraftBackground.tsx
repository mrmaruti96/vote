import { useEffect, useState } from 'react';

export default function MinecraftBackground() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = 'https://mocha-cdn.com/0198550c-82ad-7029-8adf-4ae0fc42af75/minecraft-bg.jpg';
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      {/* Minecraft Background Image with Gaussian Blur */}
      <div 
        className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: 'url(https://mocha-cdn.com/0198550c-82ad-7029-8adf-4ae0fc42af75/minecraft-bg.jpg)',
          filter: 'blur(8px) brightness(0.6)',
          transform: 'scale(1.1)', // Prevent blur edge artifacts
        }}
      />
      
      {/* Blue Gradient Overlay */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.4) 0%, rgba(59, 130, 246, 0.3) 25%, rgba(37, 99, 235, 0.35) 50%, rgba(29, 78, 216, 0.4) 75%, rgba(30, 58, 138, 0.5) 100%)'
        }}
      />
      
      

      {/* Subtle animated particles for depth - Reduced count */}
      <div className="absolute inset-0 w-full h-full">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 4}s`
            }}
          >
            <div 
              className="w-1 h-1 bg-blue-300/25 rounded-full"
            />
          </div>
        ))}
      </div>

      {/* Fallback gradient if image doesn't load */}
      {!imageLoaded && (
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 25%, #2563eb 50%, #1d4ed8 75%, #1e3a8a 100%)'
          }}
        />
      )}

      <style>{`
        @keyframes float-particle {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
            opacity: 0.3;
          }
          33% { 
            transform: translateY(-20px) translateX(10px); 
            opacity: 0.6;
          }
          66% { 
            transform: translateY(-10px) translateX(-10px); 
            opacity: 0.4;
          }
        }
        
        .animate-float-particle {
          animation: float-particle linear infinite;
        }
      `}</style>
    </div>
  );
}

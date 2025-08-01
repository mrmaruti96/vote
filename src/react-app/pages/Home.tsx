import { ExternalLink, Award, Coins, Star } from 'lucide-react';
import { useEffect } from 'react';
import MinecraftBackground from '@/react-app/components/MinecraftBackground';

export default function Home() {
  useEffect(() => {
    // Load NCL Neovibes and complementary fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    // Load NCL Neovibes font
    const nclLink = document.createElement('link');
    nclLink.href = 'https://fonts.cdnfonts.com/css/ncl-neovibes';
    nclLink.rel = 'stylesheet';
    document.head.appendChild(nclLink);
  }, []);

  const voteButtons = [
    {
      name: 'MinecraftServers.org',
      url: 'https://minecraftservers.org',
      icon: Star,
      iconColor: 'text-yellow-300',
      color: 'from-blue-600/20 via-blue-400/10 to-cyan-500/20',
      shadow: 'shadow-blue-400/10'
    },
    {
      name: 'TopG.org',
      url: 'https://topg.org',
      icon: Award,
      iconColor: 'text-green-400',
      color: 'from-blue-600/20 via-indigo-400/15 to-blue-500/20',
      shadow: 'shadow-blue-400/15'
    },
    {
      name: 'Minecraft-mp.com',
      url: 'https://minecraft-mp.com',
      icon: Coins,
      iconColor: 'text-orange-400',
      color: 'from-blue-600/25 via-cyan-400/20 to-blue-500/25',
      shadow: 'shadow-blue-400/20'
    }
  ];

  const handleVoteClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Minecraft Background */}
      <MinecraftBackground />

      

      <div className="relative z-10">
        {/* Header Section */}
        <header className="text-center py-8 md:py-12 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Logo */}
            <div className="mb-6 md:mb-8">
              <img 
                src="https://mocha-cdn.com/0198550c-82ad-7029-8adf-4ae0fc42af75/Untitled-1.png" 
                alt="BUILDTOPIA SMP Logo" 
                className="mx-auto max-w-xs sm:max-w-sm md:max-w-md w-full h-auto drop-shadow-2xl animate-logo-float"
              />
            </div>
            
            {/* Welcome Message with glass effect */}
            <div className="glass-panel glass-panel-hover p-6 sm:p-8 md:p-10">
              <h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 text-white leading-tight tracking-tight" 
                style={{ 
                  fontFamily: '"NCL Neovibes", "Orbitron", sans-serif',
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(147, 197, 253, 0.4)',
                  fontWeight: '900',
                  letterSpacing: '0.02em'
                }}
              >
                Welcome to BUILDTOPIA SMP
              </h1>
              <p 
                className="text-base sm:text-lg md:text-xl text-cyan-200/80 font-normal tracking-wide"
                style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
              >
                The Ultimate Minecraft Survival Experience
              </p>
            </div>
          </div>
        </header>

        {/* Vote Section */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 md:pb-16">
          <div className="glass-panel-large glass-panel-hover p-6 sm:p-8 md:p-12">
            {/* Vote Message */}
            <div className="text-center mb-8 md:mb-12">
              <h2 
                className="text-xl sm:text-2xl md:text-3xl font-black mb-6 md:mb-8 text-white tracking-tight" 
                style={{ 
                  fontFamily: '"NCL Neovibes", "Orbitron", sans-serif',
                  textShadow: '0 0 15px rgba(255, 255, 255, 0.7), 0 0 30px rgba(59, 130, 246, 0.5), 0 0 45px rgba(147, 197, 253, 0.3)',
                  fontWeight: '900',
                  letterSpacing: '0.02em'
                }}
              >
                Vote Now & Earn Rewards!
              </h2>
              <div className="glass-info-panel glass-panel-hover p-6 sm:p-8">
                <p 
                  className="text-sm sm:text-base md:text-lg text-blue-100/90 leading-relaxed"
                  style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                >
                  Vote daily to support Buildtopia SMP and earn in-game rewards like{' '}
                  <span className="font-bold text-yellow-300">coins</span>,{' '}
                  <span className="font-bold text-green-300">keys</span>, or{' '}
                  <span className="font-bold text-cyan-300">XP</span>!
                  <br className="hidden sm:block" />
                  <span className="block sm:inline mt-2 sm:mt-0 text-blue-200/80">The more you vote, the more you get!</span>
                </p>
              </div>
            </div>

            {/* Vote Buttons */}
            <div className="grid gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
              {voteButtons.map((button, index) => {
                const IconComponent = button.icon;
                return (
                  <button
                    key={index}
                    onClick={() => handleVoteClick(button.url)}
                    className="group glass-button glass-panel-hover"
                  >
                    <div className="flex items-center justify-between p-6 sm:p-8">
                      <div className="flex items-center space-x-4 sm:space-x-6 flex-1 min-w-0">
                        <div className="glass-icon-container p-3 sm:p-4 flex-shrink-0">
                          <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 ${button.iconColor} drop-shadow-lg`} />
                        </div>
                        <div className="text-left min-w-0 flex-1">
                          <h3 
                            className="text-base sm:text-lg md:text-xl font-black text-blue-100 truncate tracking-tight"
                            style={{ 
                              fontFamily: '"NCL Neovibes", "Orbitron", sans-serif',
                              fontWeight: '900',
                              letterSpacing: '0.01em'
                            }}
                          >
                            {button.name}
                          </h3>
                          <p 
                            className="text-blue-200/70 text-xs sm:text-sm"
                            style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                          >
                            Click to vote and earn rewards
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 text-white/60 flex-shrink-0">
                        <span 
                          className="hidden lg:inline text-sm font-black tracking-tight"
                          style={{ 
                            fontFamily: '"NCL Neovibes", "Orbitron", sans-serif',
                            fontWeight: '900',
                            letterSpacing: '0.01em'
                          }}
                        >
                          Vote Now
                        </span>
                        <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                    </div>
                    
                    
                  </button>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="mt-10 sm:mt-12 md:mt-16 text-center">
              <div className="inline-flex items-center space-x-3 glass-mini-panel glass-panel-hover px-6 sm:px-8 py-3 sm:py-4">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 drop-shadow-lg" />
                <span 
                  className="text-blue-100 text-sm sm:text-base font-black tracking-tight"
                  style={{ 
                    fontFamily: '"NCL Neovibes", "Orbitron", sans-serif',
                    fontWeight: '900',
                    letterSpacing: '0.01em'
                  }}
                >
                  Thank you for supporting BUILDTOPIA SMP!
                </span>
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 drop-shadow-lg" />
              </div>
            </div>

            {/* Homepage Reference */}
            <div className="mt-8 sm:mt-10 text-center">
              <div className="glass-info-panel glass-panel-hover p-4 sm:p-6 max-w-2xl mx-auto">
                <p 
                  className="text-blue-200/90 text-sm sm:text-base mb-4 leading-relaxed"
                  style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                >
                  For detailed information about{' '}
                  <span className="font-bold text-yellow-300">crates</span>,{' '}
                  <span className="font-bold text-green-300">keys</span>, and{' '}
                  <span className="font-bold text-cyan-300">ranks</span>{' '}
                  visit our homepage:
                </p>
                <a 
                  href="https://buildtopiasmp.fun" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 glass-button-small glass-panel-hover px-6 py-3 group"
                >
                  <span 
                    className="text-blue-100 font-black tracking-tight"
                    style={{ 
                      fontFamily: '"NCL Neovibes", "Orbitron", sans-serif', 
                      fontSize: '0.9rem',
                      fontWeight: '900',
                      letterSpacing: '0.01em'
                    }}
                  >
                    buildtopiasmp.fun
                  </span>
                  <ExternalLink className="w-4 h-4 text-blue-300" />
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center py-6 md:py-8 px-4 sm:px-6">
          <div className="glass-mini-panel glass-panel-hover p-4 sm:p-5 max-w-2xl mx-auto">
            <p 
              className="text-blue-200/70 text-xs sm:text-sm font-normal tracking-wide"
              style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
            >
              © 2024 BUILDTOPIA SMP. All rights reserved.
            </p>
          </div>
        </footer>
      </div>

      {/* Custom CSS for glassmorphism and animations */}
      <style>{`
        /* Logo Animation */
        @keyframes logo-float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
          }
          25% { 
            transform: translateY(-8px) rotate(1deg);
          }
          50% { 
            transform: translateY(-12px) rotate(0deg);
          }
          75% { 
            transform: translateY(-8px) rotate(-1deg);
          }
        }
        
        .animate-logo-float {
          animation: logo-float 6s ease-in-out infinite;
        }
        
        /* Panel Floating Animation */
        @keyframes panel-float {
          0%, 100% { 
            transform: translateY(0px);
          }
          50% { 
            transform: translateY(-8px);
          }
        }
        
        /* Light Blue Flow Animation */
        @keyframes blue-flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        /* Glass Panel Hover Effects */
        .glass-panel-hover {
          position: relative;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }
        
        .glass-panel-hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, 
            rgba(59, 130, 246, 0.1), 
            rgba(147, 197, 253, 0.15), 
            rgba(96, 165, 250, 0.1), 
            rgba(59, 130, 246, 0.08)
          );
          background-size: 300% 300%;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          border-radius: inherit;
        }
        
        .glass-panel-hover:hover::before {
          animation: blue-flow 3s ease-in-out infinite;
          opacity: 1;
        }
        
        .glass-panel-hover:hover {
          animation: panel-float 2s ease-in-out infinite;
          box-shadow: 0 12px 40px rgba(59, 130, 246, 0.4);
        }
        
        /* Enhanced glass button hover effects */
        .glass-button.glass-panel-hover:hover {
          animation: panel-float 2s ease-in-out infinite;
          background: rgba(37, 99, 235, 0.18);
          border-color: rgba(147, 197, 253, 0.35);
          box-shadow: 0 12px 40px rgba(59, 130, 246, 0.35);
        }
        
        .glass-button-small.glass-panel-hover:hover {
          animation: panel-float 2s ease-in-out infinite;
          background: rgba(37, 99, 235, 0.22);
          border-color: rgba(147, 197, 253, 0.4);
          box-shadow: 0 12px 32px rgba(59, 130, 246, 0.45);
        }
        .glass-panel {
          background: rgba(30, 64, 175, 0.15);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 20px;
          box-shadow: 0 4px 16px rgba(37, 99, 235, 0.3);
        }
        
        .glass-panel-large {
          background: rgba(37, 99, 235, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(147, 197, 253, 0.15);
          border-radius: 24px;
          box-shadow: 0 8px 20px rgba(29, 78, 216, 0.4);
        }
        
        .glass-info-panel {
          background: rgba(59, 130, 246, 0.08);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border: 1px solid rgba(147, 197, 253, 0.15);
          border-radius: 16px;
          box-shadow: 0 2px 8px rgba(30, 64, 175, 0.2);
        }
        
        .glass-button {
          background: rgba(37, 99, 235, 0.08);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(30, 64, 175, 0.4);
          position: relative;
          overflow: hidden;
        }
        
        .glass-button:hover {
          background: rgba(37, 99, 235, 0.15);
          border-color: rgba(147, 197, 253, 0.3);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.25);
        }
        
        .glass-icon-container {
          background: rgba(30, 64, 175, 0.2);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border-radius: 12px;
          border: 1px solid rgba(59, 130, 246, 0.25);
        }
        
        .glass-mini-panel {
          background: rgba(37, 99, 235, 0.1);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(59, 130, 246, 0.15);
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(30, 64, 175, 0.3);
        }
        
        .glass-button-small {
          background: rgba(37, 99, 235, 0.12);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(59, 130, 246, 0.25);
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(30, 64, 175, 0.3);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .glass-button-small:hover {
          background: rgba(37, 99, 235, 0.18);
          border-color: rgba(147, 197, 253, 0.35);
          box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4);
        }
        
        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .glass-panel, .glass-panel-large {
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
          }
        }
      `}</style>
    </div>
  );
}

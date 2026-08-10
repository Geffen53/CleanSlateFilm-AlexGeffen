import * as React from 'react';

const DustStorm: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-20 dark:opacity-40 mix-blend-screen dark:mix-blend-soft-light">
      <div className="dust-layer-1 absolute inset-0 bg-[url('/dust-texture-1.svg')] bg-repeat animate-dust-1"></div>
      <div className="dust-layer-2 absolute inset-0 bg-[url('/dust-texture-2.svg')] bg-repeat animate-dust-2"></div>
      <div className="dust-layer-3 absolute inset-0 bg-gradient-to-r from-transparent via-[#d2b48c]/20 to-transparent animate-pulse"></div>
      <style jsx>{`
        .dust-layer-1 {
          background-size: 800px;
          animation: dust-move 60s linear infinite;
        }
        .dust-layer-2 {
           background-size: 600px;
           animation: dust-move-rev 45s linear infinite;
           opacity: 0.6;
        }
        @keyframes dust-move {
          0% { background-position: 0 0; }
          100% { background-position: 1000px 500px; }
        }
        @keyframes dust-move-rev {
          0% { background-position: 0 0; }
          100% { background-position: -1000px 200px; }
        }
      `}</style>
    </div>
  );
};

export default DustStorm;

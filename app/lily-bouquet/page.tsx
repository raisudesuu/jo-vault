'use client';

import React, { useState } from 'react';

export default function LilyBouquetPage() {
  const [petals, setPetals] = useState<Array<{ id: number; left: number; delay: number; duration: number; size: number }>>([]);
  const [showRing, setShowRing] = useState(false);

  // Trigger floating petals when clicking background
  const handleBgClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.interactive-clickable')) return;

    const newPetals = Array.from({ length: 7 }).map((_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 90 + 5,
      delay: Math.random() * 0.3,
      duration: 3 + Math.random() * 2.5,
      size: 14 + Math.random() * 10,
    }));
    setPetals((prev) => [...prev.slice(-18), ...newPetals]);
  };

  return (
    <main
      onClick={handleBgClick}
      style={{
        position: 'relative',
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 1.5rem',
        overflowX: 'hidden',
        fontFamily: 'Georgia, serif',
        color: '#4a2e35',
        backgroundColor: '#faf2f4',
        userSelect: 'none',
      }}
    >
      <style>{`
        @keyframes softGradient {
          0%, 100% {
            background: radial-gradient(circle at 50% 30%, #fff0f3 0%, #f7d6e0 50%, #e2b4bd 100%);
          }
          50% {
            background: radial-gradient(circle at 50% 70%, #fff5f7 0%, #fae1e7 50%, #e8becc 100%);
          }
        }

        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }

        @keyframes sparklePulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.3); }
        }

        @keyframes fallPetal {
          0% {
            transform: translateY(-20px) rotate(0deg) translateX(0px);
            opacity: 0.9;
          }
          50% {
            transform: translateY(50vh) rotate(180deg) translateX(25px);
          }
          100% {
            transform: translateY(105vh) rotate(360deg) translateX(-15px);
            opacity: 0;
          }
        }

        @keyframes rubyGlow {
          0%, 100% {
            filter: drop-shadow(0 0 10px rgba(220, 20, 60, 0.8)) drop-shadow(0 0 20px rgba(255, 77, 109, 0.5));
            transform: scale(1);
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(220, 20, 60, 1)) drop-shadow(0 0 35px rgba(255, 105, 180, 0.8));
            transform: scale(1.06);
          }
        }

        @keyframes ringModalPop {
          0% { opacity: 0; transform: scale(0.7) translateY(30px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }

        .bg-soft {
          animation: softGradient 12s ease-in-out infinite;
        }

        .bouquet-container {
          animation: gentleFloat 6s ease-in-out infinite;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .bouquet-container:hover {
          transform: scale(1.03) translateY(-5px);
        }

        .falling-petal {
          position: absolute;
          top: -20px;
          pointer-events: none;
          z-index: 15;
          animation: fallPetal linear forwards;
        }

        .back-nav-btn {
          position: absolute;
          top: 2rem;
          left: 2rem;
          z-index: 30;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(219, 112, 147, 0.4);
          border-radius: 20px;
          padding: 8px 18px;
          color: #8b435c;
          font-family: monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-decoration: none;
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(219, 112, 147, 0.15);
        }

        .back-nav-btn:hover {
          background: rgba(255, 255, 255, 0.95);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(219, 112, 147, 0.3);
        }

        .ruby-gem-anim {
          animation: rubyGlow 3s ease-in-out infinite;
        }

        .ring-modal-card {
          animation: ringModalPop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>

      {/* Background Gradient */}
      <div className="bg-soft" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

      {/* Top Left Navigation */}
      <a href="/yours-raisu" className="back-nav-btn interactive-clickable">
        ← Back to Letter
      </a>

      {/* Floating Petals */}
      {petals.map((p) => (
        <div
          key={p.id}
          className="falling-petal"
          style={{
            left: `${p.left}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            fontSize: `${p.size}px`,
          }}
        >
          🌸
        </div>
      ))}

      {/* Ambient Sparkles */}
      <div style={{ position: 'absolute', top: '12%', left: '15%', fontSize: '22px', animation: 'sparklePulse 3s infinite', pointerEvents: 'none' }}>✨</div>
      <div style={{ position: 'absolute', top: '25%', right: '14%', fontSize: '18px', animation: 'sparklePulse 4s infinite 1s', pointerEvents: 'none' }}>🤍</div>
      <div style={{ position: 'absolute', bottom: '20%', left: '12%', fontSize: '20px', animation: 'sparklePulse 3.5s infinite 0.5s', pointerEvents: 'none' }}>🕊️</div>
      <div style={{ position: 'absolute', bottom: '15%', right: '18%', fontSize: '24px', animation: 'sparklePulse 4.5s infinite 1.5s', pointerEvents: 'none' }}>✨</div>

      {/* Main Content Area */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '750px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.8rem',
          textAlign: 'center',
        }}
      >
        {/* Header Title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#b25371', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            ✦ FOR MY FAVORITE PERSON ✦
          </span>
          <h1 style={{ fontSize: '2.8rem', fontStyle: 'italic', margin: 0, color: '#5c2335', fontWeight: 'normal' }}>
            A Fresh Bouquet for Jo 🌸
          </h1>
          <p style={{ margin: 0, fontSize: '14px', color: '#8c4e62', fontStyle: 'italic' }}>
            (tap the flowers... there might be something hiding inside 🫣)
          </p>
        </div>

        {/* SVG Stargazer Lily Bouquet */}
        <div
          className="bouquet-container interactive-clickable"
          onClick={() => setShowRing(true)}
          title="Click to peek inside!"
          style={{ position: 'relative', width: '330px', height: '390px' }}
        >
          <svg viewBox="0 0 300 380" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 18px 30px rgba(120,40,70,0.22))' }}>
            <defs>
              <linearGradient id="stargazerOuter" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="20%" stopColor="#ffb3c6" />
                <stop offset="65%" stopColor="#d90429" />
                <stop offset="100%" stopColor="#800020" />
              </linearGradient>

              <linearGradient id="stargazerCenter" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="25%" stopColor="#ff85a1" />
                <stop offset="70%" stopColor="#c9184a" />
                <stop offset="100%" stopColor="#590d22" />
              </linearGradient>

              <linearGradient id="stemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6b9080" />
                <stop offset="100%" stopColor="#2c423f" />
              </linearGradient>

              <linearGradient id="wrapperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff0f3" />
                <stop offset="50%" stopColor="#ffccd5" />
                <stop offset="100%" stopColor="#ff4d6d" />
              </linearGradient>
            </defs>

            {/* Stems */}
            <path d="M120 220 Q135 290 145 350" stroke="url(#stemGrad)" strokeWidth="6" fill="none" strokeLinecap="round" />
            <path d="M150 220 Q150 290 150 350" stroke="url(#stemGrad)" strokeWidth="7" fill="none" strokeLinecap="round" />
            <path d="M180 220 Q165 290 155 350" stroke="url(#stemGrad)" strokeWidth="6" fill="none" strokeLinecap="round" />
            <path d="M100 200 Q125 270 140 340" stroke="url(#stemGrad)" strokeWidth="5" fill="none" strokeLinecap="round" />
            <path d="M200 200 Q175 270 160 340" stroke="url(#stemGrad)" strokeWidth="5" fill="none" strokeLinecap="round" />

            {/* Leaves */}
            <path d="M110 210 Q70 190 90 230 Z" fill="#4a7c59" />
            <path d="M190 210 Q230 190 210 230 Z" fill="#4a7c59" />

            {/* Bouquet Wrapping */}
            <path d="M70 180 L150 340 L230 180 Q150 210 70 180 Z" fill="url(#wrapperGrad)" stroke="#ff85a1" strokeWidth="1.5" />
            <path d="M60 170 C90 190, 120 180, 150 195 C180 180, 210 190, 240 170 L210 280 L150 330 L90 280 Z" fill="rgba(255,255,255,0.75)" />

            {/* Ribbon */}
            <g>
              <path d="M130 270 Q150 280 170 270 Q150 290 130 270 Z" fill="#a4133c" />
              <circle cx="150" cy="275" r="7" fill="#590d22" />
              <path d="M147 278 C140 300, 125 320, 120 335" stroke="#800020" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M153 278 C160 300, 175 320, 180 335" stroke="#800020" strokeWidth="4" fill="none" strokeLinecap="round" />
            </g>

            {/* LILY 1: TOP LEFT */}
            <g transform="translate(90, 95)">
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <g key={i} transform={`rotate(${deg})`}>
                  <ellipse cx="0" cy="-26" rx="10" ry="28" fill="url(#stargazerOuter)" stroke="#ffffff" strokeWidth="0.8" />
                  <line x1="0" y1="-5" x2="0" y2="-28" stroke="#ffe6ed" strokeWidth="1" />
                </g>
              ))}
              <circle cx="0" cy="0" r="4" fill="#a4133c" />
              <line x1="0" y1="0" x2="-8" y2="-12" stroke="#590d22" strokeWidth="1.5" />
              <line x1="0" y1="0" x2="8" y2="-12" stroke="#590d22" strokeWidth="1.5" />
              <line x1="0" y1="0" x2="0" y2="-16" stroke="#590d22" strokeWidth="1.5" />
              <circle cx="-8" cy="-12" r="2" fill="#d90429" />
              <circle cx="8" cy="-12" r="2" fill="#d90429" />
              <circle cx="0" cy="-16" r="2" fill="#d90429" />
            </g>

            {/* LILY 2: TOP RIGHT */}
            <g transform="translate(210, 95)">
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <g key={i} transform={`rotate(${deg})`}>
                  <ellipse cx="0" cy="-26" rx="10" ry="28" fill="url(#stargazerOuter)" stroke="#ffffff" strokeWidth="0.8" />
                  <line x1="0" y1="-5" x2="0" y2="-28" stroke="#ffe6ed" strokeWidth="1" />
                </g>
              ))}
              <circle cx="0" cy="0" r="4" fill="#a4133c" />
              <line x1="0" y1="0" x2="-8" y2="-12" stroke="#590d22" strokeWidth="1.5" />
              <line x1="0" y1="0" x2="8" y2="-12" stroke="#590d22" strokeWidth="1.5" />
              <line x1="0" y1="0" x2="0" y2="-16" stroke="#590d22" strokeWidth="1.5" />
              <circle cx="-8" cy="-12" r="2" fill="#d90429" />
              <circle cx="8" cy="-12" r="2" fill="#d90429" />
              <circle cx="0" cy="-16" r="2" fill="#d90429" />
            </g>

            {/* LILY 3: CENTER MAIN STARGAZER */}
            <g transform="translate(150, 132) scale(1.25)">
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <g key={i} transform={`rotate(${deg})`}>
                  <ellipse cx="0" cy="-28" rx="12" ry="32" fill="url(#stargazerCenter)" stroke="#ffffff" strokeWidth="1" />
                  <line x1="0" y1="-5" x2="0" y2="-30" stroke="#fff0f3" strokeWidth="1.2" />
                  <circle cx="-3" cy="-15" r="0.8" fill="#590d22" />
                  <circle cx="3" cy="-18" r="0.8" fill="#590d22" />
                  <circle cx="1" cy="-10" r="0.8" fill="#590d22" />
                </g>
              ))}
              <circle cx="0" cy="0" r="5" fill="#590d22" />
              <line x1="0" y1="0" x2="-10" y2="-15" stroke="#800020" strokeWidth="1.8" />
              <line x1="0" y1="0" x2="10" y2="-15" stroke="#800020" strokeWidth="1.8" />
              <line x1="0" y1="0" x2="0" y2="-20" stroke="#800020" strokeWidth="1.8" />
              <circle cx="-10" cy="-15" r="2.5" fill="#ff4d6d" />
              <circle cx="10" cy="-15" r="2.5" fill="#ff4d6d" />
              <circle cx="0" cy="-20" r="2.5" fill="#ff4d6d" />
            </g>
          </svg>
        </div>

        {/* Sweet Natural Note */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.82)',
            border: '1px solid rgba(232, 165, 184, 0.5)',
            borderRadius: '24px',
            padding: '1.8rem 2.2rem',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 15px 35px rgba(180, 90, 110, 0.12)',
            maxWidth: '560px',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem',
          }}
        >
          <p style={{ fontSize: '15.5px', lineHeight: '1.8', color: '#522935', margin: 0, fontStyle: 'italic' }}>
            "I know I can't physically hand you a bouquet right this second, so I made you these stargazer lilies. You deserve real ones every single day, Jo. Happy Birthday 🤍"
          </p>
        </div>

        {/* Return Button */}
        <a
          href="/yours-raisu"
          className="interactive-clickable"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#8b3d54',
            fontFamily: 'monospace',
            fontSize: '11px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            padding: '12px 24px',
            border: '1px solid rgba(139, 61, 84, 0.3)',
            borderRadius: '16px',
            background: 'rgba(255,255,255,0.75)',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
          }}
        >
          💌 Back to your letter
        </a>
      </div>

      {/* EASTER EGG: RUBY RING MODAL */}
      {showRing && (
        <div
          className="interactive-clickable"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'rgba(25, 5, 12, 0.65)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
          onClick={() => setShowRing(false)}
        >
          <div
            className="ring-modal-card"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'linear-gradient(145deg, #1f0308 0%, #380710 100%)',
              border: '1.5px solid rgba(255, 117, 140, 0.5)',
              borderRadius: '28px',
              padding: '2.5rem 2rem',
              maxWidth: '420px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
              textAlign: 'center',
              boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 40px rgba(220, 20, 60, 0.3)',
              color: '#fce8ec',
            }}
          >
            <span style={{ fontFamily: 'monospace', fontSize: '10px', color: '#ff758c', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
              ✦ YOU FOUND A HIDDEN GIFT ✦
            </span>

            {/* SVG Glowing Ruby Ring */}
            <div className="ruby-gem-anim" style={{ width: '130px', height: '130px', margin: '0.5rem 0' }}>
              <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
                <defs>
                  <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffe259" />
                    <stop offset="50%" stopColor="#ffa751" />
                    <stop offset="100%" stopColor="#ffd700" />
                  </linearGradient>

                  <linearGradient id="rubyCut" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff4d6d" />
                    <stop offset="40%" stopColor="#c9184a" />
                    <stop offset="80%" stopColor="#800020" />
                    <stop offset="100%" stopColor="#4a0010" />
                  </linearGradient>
                </defs>

                {/* Ring Band */}
                <ellipse cx="50" cy="62" rx="30" ry="22" fill="none" stroke="url(#goldRing)" strokeWidth="6.5" />
                <ellipse cx="50" cy="62" rx="30" ry="22" fill="none" stroke="#fff3a8" strokeWidth="1.2" opacity="0.6" />

                {/* Ring Prongs */}
                <path d="M42 38 L45 32 M58 38 L55 32" stroke="url(#goldRing)" strokeWidth="3" strokeLinecap="round" />

                {/* Ruby Gemstone */}
                <polygon points="50,22 62,32 58,44 42,44 38,32" fill="url(#rubyCut)" stroke="#ffb3c6" strokeWidth="0.8" />
                <polygon points="50,22 56,32 50,40 44,32" fill="rgba(255, 255, 255, 0.35)" />
                <polygon points="50,22 62,32 56,32" fill="rgba(255, 200, 220, 0.2)" />
              </svg>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <h2 style={{ margin: 0, fontSize: '1.8rem', fontStyle: 'italic', color: '#ffffff', fontWeight: 'normal' }}>
                A little preview... 💍✨
              </h2>
              <p style={{ margin: 0, fontSize: '14.5px', color: '#f3c6ce', lineHeight: '1.6' }}>
                One day way down the road, I’m gonna put a real ruby ring on your finger for real. Consider this my sweet little promise for the future. I love you so much Jo. ❤️
              </p>
            </div>

            <button
              onClick={() => setShowRing(false)}
              style={{
                background: 'linear-gradient(135deg, #d90429 0%, #800020 100%)',
                border: '1px solid #ff758c',
                color: '#ffffff',
                padding: '10px 24px',
                borderRadius: '16px',
                fontFamily: 'monospace',
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                marginTop: '0.5rem',
                boxShadow: '0 4px 15px rgba(217, 4, 41, 0.4)',
              }}
            >
              Keep Close to Heart 🤍
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
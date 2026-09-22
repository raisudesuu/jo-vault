'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface FloatingBox {
  id: number;
  x: number;
  y: number;
  compliment: string;
  isOpen: boolean;
  animDelay: string;
}

const INITIAL_BOXES: FloatingBox[] = [
  { id: 1, x: 10, y: 22, compliment: "i have the biggest crush on you 😳", isOpen: false, animDelay: '0s' },
  { id: 2, x: 74, y: 16, compliment: "i wish to marry you someday 💍", isOpen: false, animDelay: '1.2s' },
  { id: 3, x: 12, y: 72, compliment: "i think about you constantly 🌙", isOpen: false, animDelay: '0.6s' },
  { id: 4, x: 76, y: 68, compliment: "you're my whole heart forever ✨", isOpen: false, animDelay: '1.8s' },
];

export default function FinalProposalPage() {
  const [curtainsOpen, setCurtainsOpen] = useState(false);
  const [lovePoints, setLovePoints] = useState(0);
  const [unlocked, setUnlocked] = useState(false);
  const [boxes, setBoxes] = useState<FloatingBox[]>(INITIAL_BOXES);

  useEffect(() => {
    const timer = setTimeout(() => setCurtainsOpen(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setLovePoints(val);
    if (val >= 100) {
      setUnlocked(true);
    }
  };

  const getPointsText = () => {
    if (lovePoints === 0) return '0 love points... crank it up! 🤍';
    if (lovePoints < 35) return `${lovePoints * 100} love points... getting warmer ✨`;
    if (lovePoints < 75) return `${lovePoints * 10000} love points... my heart!! 🥹`;
    if (lovePoints < 100) return `99,999,999 love points... IT'S OVERFLOWING!! 🏍️💨`;
    return '⚡ METER BROKE — INFINITE LOVE DETECTED!! ❤️🔥';
  };

  const handleOpenBox = (id: number) => {
    setBoxes((prev) =>
      prev.map((box) => (box.id === id ? { ...box, isOpen: !box.isOpen } : box))
    );
  };

  return (
    <main
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #180509 0%, #3d0d14 30%, #7a1e25 55%, #c84b31 75%, #f48c32 88%, #150204 100%)',
        fontFamily: 'Georgia, serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <style jsx global>{`
        @keyframes floatSlow {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}</style>

      {/* Atmospheric Horizon Glow Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 70%, rgba(255, 180, 80, 0.25) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Top Bar */}
      <div
        style={{
          position: 'absolute',
          top: '2rem',
          left: '2.5rem',
          right: '2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 30,
        }}
      >
        <Link
          href="/midnight-ride"
          style={{
            background: 'rgba(25, 5, 8, 0.75)',
            border: '1px solid rgba(217, 48, 67, 0.6)',
            borderRadius: '20px',
            padding: '8px 16px',
            color: '#f5ebea',
            fontFamily: 'monospace',
            fontSize: '10px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            backdropFilter: 'blur(6px)',
            transition: 'all 0.3s ease',
            display: 'inline-block',
          }}
        >
          ← MIDNIGHT RIDE
        </Link>

        <span
          style={{
            fontSize: '11px',
            fontFamily: 'monospace',
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            color: '#f5ebea',
            opacity: 0.9,
          }}
        >
          FROM ASH TO JO 🤍
        </span>
      </div>

      {/* FLOATING VELVET BOXES WITH TRUE RUBY RINGS */}
      {boxes.map((box) => (
        <div
          key={box.id}
          style={{
            position: 'absolute',
            top: `${box.y}%`,
            left: `${box.x}%`,
            zIndex: 25,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            animation: `floatSlow 4s ease-in-out infinite`,
            animationDelay: box.animDelay,
          }}
        >
          {/* Actual Velvet Ring Box */}
          <div
            onClick={() => handleOpenBox(box.id)}
            style={{
              width: '44px',
              height: '40px',
              background: 'linear-gradient(135deg, #680d19 0%, #290308 100%)',
              border: '1px solid #ff4d61',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(0,0,0,0.8), 0 0 15px rgba(255, 77, 97, 0.5)',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                width: '6px',
                background: '#ff4d61',
                opacity: 0.9,
              }}
            />
            {/* Custom Styled Crimson Ruby Ring Graphic */}
            <div
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                border: '2px solid #ff4d61',
                background: 'radial-gradient(circle, #ff1a35 0%, #680d19 100%)',
                boxShadow: '0 0 8px #ff1a35',
                zIndex: 2,
              }}
            />
          </div>

          {/* Sliding Banner for Yearning Compliment */}
          <div
            style={{
              maxWidth: box.isOpen ? '280px' : '0px',
              opacity: box.isOpen ? 1 : 0,
              overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              background: 'rgba(32, 5, 10, 0.92)',
              border: box.isOpen ? '1px solid rgba(255, 77, 97, 0.8)' : '1px solid transparent',
              borderRadius: '8px',
              padding: box.isOpen ? '8px 14px' : '0px',
              whiteSpace: 'nowrap',
              boxShadow: box.isOpen ? '0 5px 20px rgba(0,0,0,0.8)' : 'none',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span
              style={{
                fontFamily: 'monospace',
                fontSize: '11px',
                color: '#ff8593',
                letterSpacing: '0.1em',
                fontStyle: 'italic',
              }}
            >
              {box.compliment}
            </span>
          </div>
        </div>
      ))}

      {/* CENTRAL LOVE METER CARD */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          backgroundColor: 'rgba(24, 5, 9, 0.88)',
          border: '1px solid rgba(120, 25, 36, 0.8)',
          borderRadius: '24px',
          padding: '2.5rem 2rem',
          maxWidth: '520px',
          width: '90%',
          textAlign: 'center',
          boxShadow: '0 30px 60px rgba(0, 0, 0, 0.95), 0 0 50px rgba(217, 48, 67, 0.3)',
          backdropFilter: 'blur(12px)',
          boxSizing: 'border-box',
        }}
      >
        {/* Central Ruby Ring Icon */}
        <div
          style={{
            width: '48px',
            height: '48px',
            margin: '0 auto 1.2rem auto',
            borderRadius: '50%',
            backgroundColor: 'rgba(139, 30, 46, 0.35)',
            border: '1px solid #ff4d61',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 30px rgba(255, 77, 97, 0.8), inset 0 0 10px rgba(139, 30, 46, 0.8)',
          }}
        >
          <div
            style={{
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              border: '2px solid #ff4d61',
              background: 'radial-gradient(circle, #ff1a35 0%, #5a0c16 100%)',
              boxShadow: '0 0 10px #ff1a35',
            }}
          />
        </div>

        <p
          style={{
            fontSize: '11px',
            fontFamily: 'monospace',
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            color: '#ff6b7a',
            marginBottom: '0.5rem',
          }}
        >
          THE OFFICIAL LOVE METER
        </p>

        <h1
          style={{
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic',
            fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
            color: '#f5ebea',
            margin: '0 0 0.6rem 0',
            fontWeight: 'normal',
            lineHeight: 1.15,
          }}
        >
          Will you stay with me forever?
        </h1>

        <p
          style={{
            color: '#ebd4d2',
            fontSize: '13.5px',
            lineHeight: 1.6,
            margin: '0 0 2rem 0',
            fontWeight: 300,
          }}
        >
          Through every midnight ride, roaring superbike, and sunset we chase - let’s keep going together.
        </p>

        {/* LOVE METER SLIDER CONTROLS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          <input
            type="range"
            min="0"
            max="100"
            value={lovePoints}
            onChange={handleSliderChange}
            style={{
              width: '100%',
              accentColor: '#ff4d61',
              cursor: 'pointer',
              height: '8px',
              borderRadius: '4px',
            }}
          />
          <span
            style={{
              fontFamily: 'monospace',
              fontSize: '11.5px',
              color: unlocked ? '#ff8593' : '#d4b5b3',
              letterSpacing: '0.15em',
            }}
          >
            {getPointsText()}
          </span>
        </div>

        {/* UNLOCKED BUTTON REVEAL -> REDIRECTS TO /yours-raisu */}
        {unlocked && (
          <div style={{ animation: 'fadeIn 1s ease forwards' }}>
            <Link
              href="/yours-raisu"
              style={{
                display: 'block',
                width: '100%',
                padding: '16px',
                borderRadius: '12px',
                backgroundColor: '#d93043',
                border: '1px solid #ff4d61',
                color: '#f5ebea',
                fontFamily: 'monospace',
                fontSize: '12px',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow: '0 10px 25px rgba(217, 48, 67, 0.5)',
                boxSizing: 'border-box',
                transition: 'all 0.3s ease',
              }}
            >
              ALWAYS & FOREVER 🤍
            </Link>
          </div>
        )}
      </div>

      {/* VELVET CURTAINS */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          height: '100%',
          background: 'linear-gradient(90deg, #3a0208 0%, #5a0410 40%, #280105 100%)',
          boxShadow: 'inset -20px 0 50px rgba(0,0,0,0.8), 10px 0 30px rgba(0,0,0,0.9)',
          zIndex: 40,
          transform: curtainsOpen ? 'translateX(-100%)' : 'translateX(0)',
          transition: 'transform 2s cubic-bezier(0.77, 0, 0.175, 1)',
          pointerEvents: curtainsOpen ? 'none' : 'auto',
        }}
      >
        <div style={{ width: '100%', height: '100%', backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(0,0,0,0.3) 60px, transparent 80px)', opacity: 0.6 }} />
      </div>

      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          background: 'linear-gradient(270deg, #3a0208 0%, #5a0410 40%, #280105 100%)',
          boxShadow: 'inset 20px 0 50px rgba(0,0,0,0.8), -10px 0 30px rgba(0,0,0,0.9)',
          zIndex: 40,
          transform: curtainsOpen ? 'translateX(100%)' : 'translateX(0)',
          transition: 'transform 2s cubic-bezier(0.77, 0, 0.175, 1)',
          pointerEvents: curtainsOpen ? 'none' : 'auto',
        }}
      >
        <div style={{ width: '100%', height: '100%', backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(0,0,0,0.3) 60px, transparent 80px)', opacity: 0.6 }} />
      </div>
    </main>
  );
}
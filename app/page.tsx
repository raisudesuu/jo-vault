'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  // Anniversary code: 0709
  const SECRET_CODE = '0709';

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === SECRET_CODE) {
      localStorage.setItem('vault_unlocked', 'true');
      router.push('/random-pieces-of-you');
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const notes = [
    {
      label: 'always',
      text: 'you are my lovely girl ☕',
      top: '14%',
      left: '8%',
      rotate: '-4deg',
      animation: 'floatSlow 7s ease-in-out infinite',
    },
    {
      label: 'note to jo',
      text: 'effortlessly pretty ✨',
      top: '20%',
      right: '9%',
      rotate: '5deg',
      animation: 'floatDelayed 8s ease-in-out 1s infinite',
    },
    {
      label: 'reminder',
      text: 'endlessly sweet & kind 🤍',
      bottom: '22%',
      left: '7%',
      rotate: '3deg',
      animation: 'floatFast 6s ease-in-out 0.5s infinite',
    },
    {
      label: 'just because',
      text: 'my absolute favorite person 🌷',
      bottom: '18%',
      right: '8%',
      rotate: '-3deg',
      animation: 'floatSlow 7.5s ease-in-out 1.5s infinite',
    },
  ];

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#070203',
        color: '#f5ebea',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Georgia, serif',
      }}
    >
      {/* Keyframe Animations */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(-4deg); }
          50% { transform: translateY(-12px) rotate(-2deg); }
        }
        @keyframes floatDelayed {
          0%, 100% { transform: translateY(0px) rotate(5deg); }
          50% { transform: translateY(-14px) rotate(3deg); }
        }
        @keyframes floatFast {
          0%, 100% { transform: translateY(0px) rotate(3deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-8px); }
          40%, 80% { transform: translateX(8px); }
        }
        .shake-box {
          animation: shake 0.5s ease-in-out;
        }
        @media (max-width: 850px) {
          .floating-note { display: none !important; }
        }
      `}</style>

      {/* Deep Blood Crimson & Maroon Ambient Glows */}
      <div
        style={{
          position: 'absolute',
          top: '-120px',
          left: '-120px',
          width: '600px',
          height: '600px',
          backgroundColor: '#52030d',
          opacity: 0.35,
          borderRadius: '50%',
          filter: 'blur(150px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-120px',
          right: '-120px',
          width: '550px',
          height: '550px',
          backgroundColor: '#380208',
          opacity: 0.4,
          borderRadius: '50%',
          filter: 'blur(140px)',
          pointerEvents: 'none',
        }}
      />

      {/* Floating Coffee & Mood Notes */}
      {notes.map((note, index) => (
        <div
          key={index}
          className="floating-note"
          style={{
            position: 'absolute',
            top: note.top,
            left: note.left,
            right: note.right,
            bottom: note.bottom,
            backgroundColor: '#120406',
            border: '1px solid #3d0a12',
            borderRadius: '14px',
            padding: '12px 18px',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.7)',
            textAlign: 'left',
            maxWidth: '210px',
            zIndex: 5,
            animation: note.animation,
            transform: `rotate(${note.rotate})`,
          }}
        >
          <span
            style={{
              fontSize: '9.5px',
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.25em',
              color: '#b84452',
              display: 'block',
              marginBottom: '4px',
            }}
          >
            {note.label}
          </span>
          <p
            style={{
              margin: 0,
              fontSize: '13px',
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              color: '#f5ebea',
            }}
          >
            &ldquo;{note.text}&rdquo;
          </p>
        </div>
      ))}

      {/* Main Content Container */}
      <div
        style={{
          zIndex: 10,
          maxWidth: '580px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Eyebrow Header */}
        <div
          style={{
            fontSize: '11px',
            fontFamily: 'monospace',
            textTransform: 'uppercase',
            letterSpacing: '0.35em',
            color: '#c4606d',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '1.5rem',
          }}
        >
          <span>FROM ASH TO JO</span>
          <span>✈</span>
          <span>17 YEARS OF YOU</span>
        </div>

        {/* Romantic Title */}
        <h1
          style={{
            fontFamily: 'Georgia, Cambria, "Times New Roman", serif',
            fontStyle: 'italic',
            fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
            color: '#f5ebea',
            margin: 0,
            fontWeight: 'normal',
            lineHeight: 1.1,
            letterSpacing: '0.01em',
          }}
        >
          Happy 17th Birthday,
        </h1>

        <h2
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 5vw, 3rem)',
            color: '#d93043',
            margin: '0.4rem 0 1.5rem 0',
            letterSpacing: '-0.02em',
            textShadow: '0 0 25px rgba(217, 48, 67, 0.3)',
          }}
        >
          my lovely Jo
        </h2>

        {/* Dark Maroon Card & Minigame Vault Lock */}
        <div
          className={shake ? 'shake-box' : ''}
          style={{
            backgroundColor: '#120406',
            border: '1px solid #3d0a12',
            borderRadius: '20px',
            padding: '2rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(61, 10, 18, 0.3)',
            marginBottom: '2.25rem',
            backdropFilter: 'blur(8px)',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <p
            style={{
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              fontSize: '1.25rem',
              color: '#f5ebea',
              margin: '0 0 0.8rem 0',
              lineHeight: 1.4,
            }}
          >
            You are my world ✨
          </p>

          <p
            style={{
              color: '#bfa8a7',
              fontSize: '14px',
              lineHeight: 1.75,
              margin: '0 0 1.5rem 0',
              fontWeight: 300,
            }}
          >
            I built this quiet little corner of the internet just for you. To break the seal and unlock your vault, enter our special 4-digit date.
          </p>

          {/* Minigame Passcode Form */}
          <form onSubmit={handleUnlock} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ position: 'relative' }}>
              <input
                type="password"
                maxLength={4}
                placeholder="Enter 4-digit code"
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value);
                  setError(false);
                }}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  backgroundColor: 'rgba(26, 5, 9, 0.9)',
                  border: error ? '1px solid #d93043' : '1px solid rgba(140, 25, 41, 0.4)',
                  borderRadius: '12px',
                  color: '#f5ebea',
                  fontSize: '16px',
                  textAlign: 'center',
                  outline: 'none',
                  boxSizing: 'border-box',
                  fontFamily: 'monospace',
                  letterSpacing: '0.3em',
                }}
              />
            </div>

            {/* Subtle Hint */}
            <span
              style={{
                fontSize: '11px',
                fontFamily: 'monospace',
                color: '#8c5960',
                fontStyle: 'italic',
              }}
            >
              Hint: The month and day we became official (DDMM) 🤍
            </span>

            {error && (
              <span style={{ fontSize: '12px', color: '#d93043', fontFamily: 'monospace' }}>
                Incorrect code, my love. Think back to our special day! ✨
              </span>
            )}

            <button
              type="submit"
              style={{
                display: 'inline-block',
                width: '100%',
                padding: '16px 36px',
                borderRadius: '12px',
                backgroundColor: '#28050b',
                border: '1px solid #520814',
                color: '#f5ebea',
                fontFamily: 'monospace',
                fontSize: '11.5px',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.7), 0 0 15px rgba(82, 8, 20, 0.4)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
            >
              STEP INSIDE, JO &rarr;
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
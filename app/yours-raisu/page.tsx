'use client';

import React from 'react';

export default function YoursRaisuPage() {
  return (
    <main
      style={{
        position: 'relative',
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5rem 2rem',
        overflowX: 'hidden',
        fontFamily: 'Georgia, serif',
        color: '#f5ebea',
        backgroundColor: '#0c0102',
      }}
    >
      <style>{`
        @keyframes soothingBg {
          0%, 100% {
            background: radial-gradient(circle at center, #290408 0%, #140203 70%, #080101 100%);
          }
          50% {
            background: radial-gradient(circle at center, #42080f 0%, #1c0305 70%, #0d0102 100%);
          }
        }

        @keyframes soothingCardPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 25px 60px rgba(0,0,0,0.9), 0 0 20px rgba(217, 48, 67, 0.15);
          }
          50% {
            transform: scale(1.005);
            box-shadow: 0 30px 70px rgba(0,0,0,0.95), 0 0 30px rgba(217, 48, 67, 0.25);
          }
        }

        @keyframes floatAndSpin {
          0% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          50% {
            transform: translateY(-10px) rotate(180deg) scale(1.05);
          }
          100% {
            transform: translateY(0px) rotate(360deg) scale(1);
          }
        }

        @keyframes randomTilt {
          0%, 100% { transform: rotate(-6deg) translateY(0); }
          50% { transform: rotate(8deg) translateY(-6px); }
        }

        .soothing-main-bg {
          animation: soothingBg 10s ease-in-out infinite;
        }

        .soothing-heart-card {
          animation: soothingCardPulse 6s ease-in-out infinite;
        }

        .floating-element-1 {
          animation: floatAndSpin 9s linear infinite;
        }

        .floating-element-2 {
          animation: randomTilt 6s ease-in-out infinite;
        }

        .return-btn-solid {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #d93043;
          border: 1px solid #ff4d61;
          color: #f5ebea;
          padding: 14px 36px;
          border-radius: 18px;
          font-family: monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          box-shadow: 0 5px 25px rgba(217, 48, 67, 0.5);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .return-btn-solid:hover {
          background: #ff3b50;
          box-shadow: 0 8px 30px rgba(255, 59, 80, 0.7);
          transform: translateY(-2px);
        }
      `}</style>

      {/* Background Animation Container */}
      <div className="soothing-main-bg" style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }} />

      {/* Top Navigation / Breadcrumb */}
      <div style={{ position: 'absolute', top: '2rem', left: '2rem', zIndex: 30 }}>
        <a
          href="/us-0709"
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
            backdropFilter: 'blur(10px)',
          }}
        >
          ← BACK TO US-0709
        </a>
      </div>

      {/* Outer Wrapper with Extra Horizontal Room for Floating Elements */}
      <div style={{ position: 'relative', maxWidth: '890px', width: '100%', margin: '3rem 2rem', zIndex: 10 }}>
        
        {/* Random Floating Sparkles, Emojis & Spinning Texts Safely Positioned Outside */}
        <div className="floating-element-1" style={{ position: 'absolute', top: '-45px', left: '10%', fontSize: '20px', zIndex: 10, pointerEvents: 'none' }}>✨</div>
        <div className="floating-element-2" style={{ position: 'absolute', top: '-35px', left: '45%', fontSize: '18px', zIndex: 10, pointerEvents: 'none' }}>🤍</div>
        <div className="floating-element-1" style={{ position: 'absolute', top: '-50px', right: '18%', fontSize: '22px', zIndex: 10, pointerEvents: 'none' }}>🌹</div>
        
        <div className="floating-element-2" style={{ position: 'absolute', top: '15%', left: '-60px', fontSize: '18px', zIndex: 10, pointerEvents: 'none' }}>🌸</div>
        <div className="floating-element-1" style={{ position: 'absolute', top: '38%', left: '-95px', fontFamily: 'monospace', fontSize: '11px', color: '#ff8593', background: 'rgba(41, 4, 8, 0.9)', padding: '8px 14px', borderRadius: '12px', border: '1px solid rgba(217, 48, 67, 0.4)', zIndex: 10, pointerEvents: 'none', whiteSpace: 'nowrap', boxShadow: '0 4px 15px rgba(0,0,0,0.5)' }}>
          ✨ I'm yours...
        </div>

        <div className="floating-element-1" style={{ position: 'absolute', top: '20%', right: '-65px', fontSize: '20px', zIndex: 10, pointerEvents: 'none' }}>💖</div>
        <div className="floating-element-2" style={{ position: 'absolute', top: '55%', right: '-110px', fontFamily: 'monospace', fontSize: '11px', color: '#ff6b7a', background: 'rgba(41, 4, 8, 0.9)', padding: '8px 14px', borderRadius: '12px', border: '1px solid rgba(217, 48, 67, 0.4)', zIndex: 10, pointerEvents: 'none', whiteSpace: 'nowrap', boxShadow: '0 4px 15px rgba(0,0,0,0.5)' }}>
          🕊️ Forever yours
        </div>

        <div className="floating-element-2" style={{ position: 'absolute', bottom: '-45px', left: '22%', fontSize: '20px', zIndex: '10', pointerEvents: 'none' }}>💫</div>
        <div className="floating-element-1" style={{ position: 'absolute', bottom: '-50px', right: '28%', fontSize: '18px', zIndex: 10, pointerEvents: 'none' }}>✦</div>

        {/* Main Container Card */}
        <div
          className="soothing-heart-card"
          style={{
            width: '100%',
            background: 'rgba(21, 3, 6, 0.92)',
            border: '1px solid rgba(217, 48, 67, 0.4)',
            borderRadius: '28px',
            padding: '3rem 2.5rem',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          {/* Header Metadata */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(217, 48, 67, 0.2)', paddingBottom: '1rem' }}>
            <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#ff6b7a', letterSpacing: '0.2em' }}>
              ✦ FOREVER & ALWAYS : YOURS, RAISU ✦
            </span>
            <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#b89b99', letterSpacing: '0.15em' }}>
              ITALY 2027? 🇮🇹
            </span>
          </div>

          {/* Title Section */}
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#ff8593', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              FOR THE ABSOLUTE LOVE OF MY LIFE ✨
            </p>
            <h1 style={{ fontSize: '2.6rem', fontStyle: 'italic', margin: 0, fontWeight: 'normal', color: '#f5ebea' }}>
              Happy Birthday, Joanne Mary Shobin 🤍
            </h1>
          </div>

          {/* Body Content - Spiced up with real human chaos & hamster energy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: '#ebd4d3', fontSize: '16px', lineHeight: '1.85', textAlign: 'left' }}>
            <p style={{ margin: 0 }}>
              Jo... honestly? I've rewritten this like a million times in my head and I still don't even know where to start or how to type fast enough to match how crazy my brain gets whenever I think about you. Every time I try to put into words what you actually mean to me, language just feels like... ugh, way too small and clunky. EEEEEEEEEEEEEEEEEEEEEEE! 😭 Like seriously, I am completely, hopelessly, irreversibly yours. You aren't just some person in my life—you literally <em>are</em> the light that makes everything else make sense. I know I go quiet sometimes and suck at being talkative, and I'm super sorry for that, but please never forget that even when I'm sitting there saying nothing, my mind is literally 100% just full of you. Always.
            </p>
            <p style={{ margin: 0 }}>
              Look, I know I'm a mess sometimes and I stumble through things and overthink everything, but I promise you with every single breath in my body that I'm gonna try my absolute hardest for you. For us. For every single dumb, beautiful dream we talk about. I choose you today, I'd choose you tomorrow, and honestly? I'd track you down and pick you in a hundred different lifetimes and a hundred weird parallel worlds too. No hesitation.
            </p>
            <p style={{ margin: 0 }}>
              We always talk about Italy 2027?, about finally getting our bachelors together, kicking back in some loud historic old cafe, and working our absolute asses off to build the life we stay up way too late talking about. I know we've both been kinda lazy lately, rotting away and barely doing anything, just sliding by day by day... but I swear on everything we can actually lock in and crush it this time. It’s gonna take so much stupid hard work, endless late-night caffeine pushes, a ton of stress, and pushing way past our limits—but holding your hand right through the middle of all of it? That's literally the ultimate prize. That's everything to me.
            </p>
            <p style={{ margin: 0 }}>
              So let me say it like a million more times because once is never even close to enough: I love you. I love you when you're laughing your head off, I love you when you're being all quiet, I love you when you're randomly mad at me, and I love you when you're half-asleep and barely making sense. You're my home, my safe space, my peace, my absolute favorite person in the entire universe, and my whole damn world. I'm yours, Jo. Completely, messily, utterly, forever yours. 🤍✨
            </p>
            
            {/* Spiced-up closing note */}
            <p style={{ margin: '1.2rem 0 0 0', fontStyle: 'italic', color: '#ffb3bc', textAlign: 'center', lineHeight: '1.6' }}>
              Seriously though... happy birthday again, my love. I hope your day is absolute perfection, and I am literally counting down every second until our date today. Let's go make some memories! ✨🥂💖
            </p>
          </div>

          {/* Solid Button Footer */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(217, 48, 67, 0.3)', alignItems: 'center' }}>
            <a href="/" className="return-btn-solid">
              Wanna go back?
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}
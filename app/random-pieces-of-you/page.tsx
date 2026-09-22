'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

interface Balloon {
  id: number;
  color: string;
  secret: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  animation: string;
}

export default function RandomPiecesOfYou() {
  const [poppedIds, setPoppedIds] = useState<number[]>([]);
  const [activeSecret, setActiveSecret] = useState<string | null>(null);

  // Auto-cycling & manual click quotes state (fully humanized & natural)
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const cyclingQuotes = [
    "“seeing your texts literally brightens up my day ngl”",
    "“you actually make boring days bearable lol”",
    "“17 years of you being around and the world's def better for it”",
    "“everything is just way more fun when you're around”",
    "“i could listen to you ramble about the most random stuff for hours”",
    "“you have this weird chill vibe that fixes my mood instantly”",
    "“your laugh is literally my favorite sound ever”",
    "“you bring out the best version of me without even trying”",
    "“so glad we ended up in the same timeline fr”",
    "“you're the best plot twist that ever happened to me”",
    "“even on my worst days, thinking of you just makes me smile”",
    "“you look so pretty without even trying, it's lowkey annoying”",
    "“talking to you is always the best part of my day”",
    "“you are permanently stuck in my head, jo”",
    "“hope you know how much you actually mean to me”",
    "“you make liking you way too easy”",
    "“thanks for just being you—sweet, chaotic, and amazing”",
    "“here's to 17, and all the dumb memories we're gonna make”"
  ];

  const balloons: Balloon[] = [
    {
      id: 1,
      color: '#d48344',
      secret: '✨ you look lowkey adorable when you smile and don’t even realize it.',
      top: '16%',
      left: '6%',
      animation: 'floatSlow 7s ease-in-out infinite',
    },
    {
      id: 2,
      color: '#c26b38',
      secret: '☕ i literally re-read our chats when i miss you or when i’m bored.',
      top: '24%',
      right: '7%',
      animation: 'floatDelayed 8s ease-in-out 1s infinite',
    },
    {
      id: 3,
      color: '#a6552b',
      secret: '🤍 time passes way too fast whenever we’re hanging out.',
      bottom: '26%',
      left: '5%',
      animation: 'floatFast 6.5s ease-in-out 0.5s infinite',
    },
    {
      id: 4,
      color: '#b87d4a',
      secret: '🌷 you make my heaviest days feel so much lighter.',
      bottom: '22%',
      right: '6%',
      animation: 'floatSlow 7.5s ease-in-out 1.2s infinite',
    },
  ];

  const allPopped = poppedIds.length === balloons.length;

  const triggerNextQuote = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % cyclingQuotes.length);
      setFade(true);
    }, 250);
  }, [cyclingQuotes.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      triggerNextQuote();
    }, 4200);

    return () => clearInterval(timer);
  }, [quoteIndex, triggerNextQuote]);

  const handlePop = (balloon: Balloon) => {
    if (!poppedIds.includes(balloon.id)) {
      setPoppedIds((prev) => [...prev, balloon.id]);
      setActiveSecret(balloon.secret);
    }
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        // Rich midnight espresso & warm amber twilight background (Zero magenta!)
        backgroundColor: '#0c0a09',
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(87, 51, 31, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(61, 46, 31, 0.35) 0%, transparent 50%),
          linear-gradient(135deg, #0f0d0c 0%, #070605 100%)
        `,
        color: '#f5f0ec',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Georgia, serif',
      }}
    >
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(-3deg); }
          50% { transform: translateY(-14px) rotate(2deg); }
        }
        @keyframes floatDelayed {
          0%, 100% { transform: translateY(0px) rotate(4deg); }
          50% { transform: translateY(-16px) rotate(-2deg); }
        }
        @keyframes floatFast {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-10px) rotate(4deg); }
        }
        @keyframes popAnimation {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.8; }
          100% { transform: scale(0); opacity: 0; }
        }
        @keyframes gentleBannerFloat {
          0%, 100% { transform: translateY(0px) rotate(-0.5deg); }
          50% { transform: translateY(-6px) rotate(0.5deg); }
        }
        @media (max-width: 900px) {
          .floating-balloon { display: none !important; }
        }
      `}</style>

      {/* Atmospheric Warm Amber Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '-150px',
          left: '-150px',
          width: '650px',
          height: '650px',
          backgroundColor: '#9e5a32',
          opacity: 0.2,
          borderRadius: '50%',
          filter: 'blur(170px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-150px',
          right: '-150px',
          width: '600px',
          height: '600px',
          backgroundColor: '#734629',
          opacity: 0.25,
          borderRadius: '50%',
          filter: 'blur(160px)',
          pointerEvents: 'none',
        }}
      />

      {/* Top Header */}
      <div
        style={{
          position: 'absolute',
          top: '2rem',
          left: '2rem',
          right: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '11px',
          fontFamily: 'monospace',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          zIndex: 20,
        }}
      >
        <Link
          href="/"
          style={{
            color: '#d69e70',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}
        >
          &larr; MAIN PORTAL
        </Link>
        <span style={{ color: '#9e7d63' }}>
          PIECES OF YOU ({poppedIds.length}/{balloons.length} POPPED)
        </span>
      </div>

      {/* Balloons */}
      {balloons.map((balloon) => {
        const isPopped = poppedIds.includes(balloon.id);
        return (
          <div
            key={balloon.id}
            className="floating-balloon"
            onClick={() => handlePop(balloon)}
            style={{
              position: 'absolute',
              top: balloon.top,
              left: balloon.left,
              right: balloon.right,
              bottom: balloon.bottom,
              cursor: isPopped ? 'default' : 'pointer',
              zIndex: 15,
              animation: isPopped ? 'popAnimation 0.4s forwards' : balloon.animation,
              pointerEvents: isPopped ? 'none' : 'auto',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.6))',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '58px',
                  backgroundColor: balloon.color,
                  borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%',
                  position: 'relative',
                  border: '1px solid rgba(255,255,255,0.25)',
                  boxShadow: `inset -6px -6px 14px rgba(0,0,0,0.4), 0 0 20px ${balloon.color}88`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '8px',
                    left: '10px',
                    width: '10px',
                    height: '14px',
                    backgroundColor: 'rgba(255, 255, 255, 0.45)',
                    borderRadius: '50%',
                    transform: 'rotate(-30deg)',
                  }}
                />
                <span style={{ fontSize: '10px', fontFamily: 'monospace', color: '#fff', fontWeight: 'bold', opacity: 0.9 }}>
                  POP
                </span>
              </div>
              <div
                style={{
                  width: '0',
                  height: '0',
                  borderLeft: '4px solid transparent',
                  borderRight: '4px solid transparent',
                  borderBottom: `6px solid ${balloon.color}`,
                }}
              />
              <div
                style={{
                  width: '1px',
                  height: '35px',
                  backgroundColor: '#876547',
                  opacity: 0.7,
                }}
              />
            </div>
          </div>
        );
      })}

      {/* Main Container */}
      <div
        style={{
          zIndex: 10,
          maxWidth: '620px',
          margin: '0 auto',
          textAlign: 'left',
          width: '100%',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1
            style={{
              fontFamily: 'Georgia, Cambria, "Times New Roman", serif',
              fontStyle: 'italic',
              fontSize: 'clamp(2.4rem, 5.5vw, 3.8rem)',
              color: '#fff8f2',
              margin: '0 0 0.5rem 0',
              fontWeight: 'normal',
              textShadow: '0 4px 20px rgba(212, 131, 68, 0.25)',
            }}
          >
            random thoughts about you ✨
          </h1>
          <p
            style={{
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              color: '#cca893',
              fontSize: '14px',
              margin: 0,
            }}
          >
            pop all the floating balloons around the screen to unlock the next chapter.
          </p>
        </div>

        {/* Revealed Balloon Note Banner */}
        {activeSecret && (
          <div
            style={{
              backgroundColor: '#1c1511',
              border: '1px solid #75482e',
              borderRadius: '16px',
              padding: '1.25rem 1.5rem',
              marginBottom: '2.5rem',
              boxShadow: '0 0 30px rgba(184, 125, 74, 0.2)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              animation: 'gentleBannerFloat 5s ease-in-out infinite',
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: '14px',
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic',
                color: '#fffae6',
                lineHeight: 1.5,
              }}
            >
              {activeSecret}
            </p>
            <button
              onClick={() => setActiveSecret(null)}
              style={{
                background: 'none',
                border: 'none',
                color: '#d69e70',
                cursor: 'pointer',
                fontSize: '16px',
                paddingLeft: '1rem',
              }}
            >
              ✕
            </button>
          </div>
        )}

        {/* Story Section 1 */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 'bold',
              fontSize: '1.75rem',
              color: '#e69a5c',
              margin: '0 0 0.8rem 0',
              textShadow: '0 0 25px rgba(230, 154, 92, 0.3)',
            }}
          >
            The whole blushing thing
          </h2>
          <p
            style={{
              color: '#e0c8b6',
              fontSize: '15px',
              lineHeight: 1.8,
              margin: 0,
              fontWeight: 300,
            }}
          >
            Idk if you even notice, but you have this annoying superpower where literally anything you say makes me blush. You just drop some random text and suddenly I'm trying to hide my screen like an idiot. It's so unfair... but pls don't stop lmao.
          </p>
        </div>

        {/* Story Section 2 */}
        <div style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 'bold',
              fontSize: '1.75rem',
              color: '#e69a5c',
              margin: '0 0 0.8rem 0',
              textShadow: '0 0 25px rgba(230, 154, 92, 0.3)',
            }}
          >
            Our 3 AM brain rot
          </h2>
          <p
            style={{
              color: '#e0c8b6',
              fontSize: '15px',
              lineHeight: 1.8,
              margin: 0,
              fontWeight: 300,
            }}
          >
            One minute we're talking about the absolute dumbest nonsense possible, and the next it's 3 AM and we're actually deep-diving into random life stuff. We're a total mess together, but honestly there's nobody else I'd rather stay up talking to.
          </p>
        </div>

        {/* Auto-Cycling Compliment Card */}
        <div
          onClick={triggerNextQuote}
          style={{
            backgroundColor: '#17110e',
            border: '1px solid #543825',
            borderRadius: '18px',
            padding: '2.2rem 2rem',
            textAlign: 'center',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(115, 70, 41, 0.25)',
            marginBottom: '3.5rem',
            minHeight: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            userSelect: 'none',
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          <p
            style={{
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              fontSize: '1.25rem',
              color: '#fff8f2',
              margin: 0,
              opacity: fade ? 1 : 0,
              transform: fade ? 'translateY(0px)' : 'translateY(6px)',
              transition: 'opacity 0.25s ease, transform 0.25s ease',
            }}
          >
            {cyclingQuotes[quoteIndex]}
          </p>
        </div>

        {/* Gated Next Chapter Button */}
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          {allPopped ? (
            <Link
              href="/valerie-vault"
              style={{
                display: 'inline-block',
                padding: '16px 36px',
                borderRadius: '12px',
                backgroundColor: '#382215',
                border: '1px solid #915a33',
                color: '#fff8f2',
                fontFamily: 'monospace',
                fontSize: '11.5px',
                letterSpacing: '0.28em',
                textDecoration: 'none',
                textTransform: 'uppercase',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.7), 0 0 25px rgba(145, 90, 51, 0.4)',
                transition: 'all 0.3s ease',
              }}
            >
              NEXT CHAPTER &rarr;
            </Link>
          ) : (
            <div
              style={{
                display: 'inline-block',
                padding: '16px 36px',
                borderRadius: '12px',
                backgroundColor: '#140f0c',
                border: '1px solid #422b1c',
                color: '#9c7b65',
                fontFamily: 'monospace',
                fontSize: '11.5px',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                cursor: 'not-allowed',
              }}
            >
              POP ALL BALLOONS TO UNLOCK ({poppedIds.length}/{balloons.length})
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
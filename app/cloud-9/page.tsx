'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface WishCardItem {
  id: number;
  src: string;
  caption: string;
  author: string;
}

export default function CloudNinePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'up' | 'down'>('down');
  const [isAnimating, setIsAnimating] = useState(false);
  const [hearted, setHearted] = useState<{ [key: number]: boolean }>({});
  
  // Mini-game & Unlock states for "Midnight Ride"
  const [showMiniGame, setShowMiniGame] = useState(false);
  const [miniGameStep, setMiniGameStep] = useState(0);
  const [miniGameError, setMiniGameError] = useState<string | null>(null);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const router = useRouter();

  const textScrollRef = useRef<HTMLDivElement>(null);

  const cards: WishCardItem[] = [
    {
      id: 1,
      src: '/images/cloud9/1.jpg',
      caption: 'Happy Birthday Jo\n\nI hope you have a great year and all your dreams, both ambitious and romantic, come true. Wishing you the best 17th bday ever. And i hope yk that I will always be looking over both of you, thank you for always bringing a smile on his face and i hope you have one too for the rest of the year\n\nOnce again happy birthdayyy.',
      author: '~arush khas',
    },
    {
      id: 2,
      src: '/images/cloud9/2.jpg',
      caption: "HAPPY BIRTHDAY VASELINEEE!!\n\nI honestly dk much about you since the only time we've properly talked is while playing boblox with everyone. You're truly a great person to be around with and you're always cheerful. Hope you have the greatest day ever and cheers for more to comeee 🎉🥳🎉",
      author: '-Shrekkk',
    },
    {
      id: 3,
      src: '/images/cloud9/3.jpg',
      caption: "HAPPY BIRTHDAY C5H10O2!! 🥳🎉\n(Valeric Acid, incase you forgot 🥴)\n\nBEEN LIKE 4 MONTHS SINCE I'VE KNOWN YOU, BUT IT FEELS LIKE IT'S BEEN WAYYYYY LONGER 😭. FROM ALL THE STUPID CONVERSATIONS AND CHAOS TO PROPER CONVERSATIONS ABOUT EVERYTHING GOING ON, YOU'VE BECOME SOMEONE I REALLY VALUE HAVING AROUND. I'M REALLY GLAD WE'VE MADE SO MANY MEMORIES IN SUCH A SHORT TIME 🫶.\n\nHOPE YOU HAVE AN AMAZING BIRTHDAY AND THAT THIS YEAR BRINGS YOU A LOT OF GOOD THINGS! AND TRY NOT TO BULLY ME 😭🙏",
      author: '-Ethanee',
    },
    {
      id: 4,
      src: '/images/cloud9/4.jpg',
      caption: "happyyy birthday valerieee! i just wanted to say i hope you have an amazing day and genuinely have the best year ahead. i'm really glad we got to become friends, especially through all the random roblox sessions, listening to music together, and all the stupid little moments we've had 😭. honestly, those are some of the memories i really enjoy.\n\nand of course, jai joanne, jai kisan\n\nbut yeah, happy birthday again valerie. i hope you get everything you're wishing for, stay happy, and have an amazing day.",
      author: '-abrar',
    },
    {
      id: 5,
      src: '/images/cloud9/5.jpg',
      caption: 'Happy Birthday Joanne! 🎉🥳\n\nWishing you a super fun day ahead and a great year to come. Enjoy your special day!',
      author: '-Sara(a stranger)',
    },
    {
      id: 6,
      src: '/images/cloud9/6.jpg',
      caption: "HAPPY BIRTHDAY JOANNE!! 🏍️🇮🇹\n\nMay this year bless you with absolute horsepower and total fluency in espresso-fueled Italian hand gestures. Time to trade the ordinary for roaring engines and chic café culture &mdash; have the wildest 17th birthday ever!",
      author: '-maharshmallow/cheetos',
    },
    {
      id: 7,
      src: '/images/cloud9/7.jpg',
      caption: 'Idk who you are Joanne \u2014 just heard it\'s your birthday \u2014 Happy Birthday!\n\nHope you have a wonderful celebration today and enjoy every bit of it.',
      author: '-Raghav(a stranger)',
    },
    {
      id: 8,
      src: '/images/cloud9/8.jpg',
      caption: 'Idk who you are but \u2014 Happy Birthday Joanne! 🎉🥳\n\nWishing you a super fun day ahead and a great year to come. Enjoy your special day!',
      author: '-Farreda(a stranger)',
    },
    {
      id: 9,
      src: '/images/cloud9/9.jpg',
      caption: "HAPPY BIRTHDAY, RAISU'S GF! 🥳😘\n\nI DON'T KNOW YOU, BUT BASED ON THE VIBES HERE, HOPE YOU HAVE THE MOST AMAZING DAY! MAY THIS YEAR BRING YOU ENDLESS HAPPINESS AND BLESSINGS! ✨✨🎂",
      author: '-VARUN (A STRANGER)',
    },
    {
      id: 10,
      src: '/images/cloud9/10.jpg',
      caption: "Happy Birthday grandma!!\n\nWe're all glad to have you in our group now. Ashu's been in such a good mood lately thanks to you. Hope we become good friends as time goes on. Let's also not stop bullying Ashu 🤭\n\nHope you have a great year ahead!",
      author: '-ghuffers',
    },
  ];

  const toggleHeart = (id: number) => {
    setHearted((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleMidnightRideClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isUnlocked) {
      router.push('/midnight-ride');
    } else {
      setShowMiniGame(true);
      setMiniGameStep(0);
      setMiniGameError(null);
    }
  };

  const handleMiniGameTap = () => {
    setMiniGameError(null);
    const fails = Math.random() < 0.35;

    if (fails) {
      setMiniGameError('⚠️ Bulb sputtered! Film thermal overload. Progress jammed & reset.');
      setMiniGameStep(0);
      return;
    }

    const next = miniGameStep + 1;
    if (next >= 4) {
      setIsUnlocked(true);
      setShowMiniGame(false);
      setTimeout(() => {
        router.push('/midnight-ride');
      }, 500);
    } else {
      setMiniGameStep(next);
    }
  };

  const handleCardWheel = (e: React.WheelEvent) => {
    e.preventDefault(); // Stop global page jumping

    const el = textScrollRef.current;
    if (el) {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const hasVerticalScroll = scrollHeight > clientHeight;

      if (hasVerticalScroll) {
        const isAtTop = scrollTop === 0;
        const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 2;

        // If scrolling down and not yet at bottom, scroll the inner text box manually
        if (e.deltaY > 0 && !isAtBottom) {
          el.scrollTop += e.deltaY;
          return;
        }
        // If scrolling up and not yet at top, scroll the inner text box manually
        if (e.deltaY < 0 && !isAtTop) {
          el.scrollTop += e.deltaY;
          return;
        }
      }
    }

    // When text is at the boundary (or if there's no scroll needed), switch cards
    if (isAnimating) return;

    if (e.deltaY > 15) {
      if (currentIndex < cards.length - 1) {
        setIsAnimating(true);
        setSlideDirection('down');
        setCurrentIndex((prev) => prev + 1);
        setTimeout(() => setIsAnimating(false), 300);
      }
    } else if (e.deltaY < -15) {
      if (currentIndex > 0) {
        setIsAnimating(true);
        setSlideDirection('up');
        setCurrentIndex((prev) => prev - 1);
        setTimeout(() => setIsAnimating(false), 300);
      }
    }
  };

  const currentCard = cards[currentIndex];

  return (
    <main
      style={{
        height: '100vh',
        backgroundColor: '#2b1a10',
        backgroundImage: `
          radial-gradient(circle at 50% 30%, rgba(60, 38, 24, 0.6) 0%, transparent 70%),
          linear-gradient(135deg, #332014 0%, #1c100a 100%)
        `,
        color: '#f0e6dc',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.5rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
        userSelect: 'none',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Georgia, serif',
      }}
    >
      <style>{`
        @keyframes filmDustMove {
          0% { transform: translate(0, 0); opacity: 0.12; }
          25% { transform: translate(-8px, 12px); opacity: 0.2; }
          50% { transform: translate(12px, -8px); opacity: 0.08; }
          75% { transform: translate(-4px, -12px); opacity: 0.18; }
          100% { transform: translate(0, 0); opacity: 0.12; }
        }
        @keyframes slideInDown {
          0% { transform: translateY(-20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideInUp {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .film-grain-overlay {
          position: fixed;
          inset: 0;
          background-image: radial-gradient(rgba(20, 10, 5, 0.6) 1px, transparent 0);
          background-size: 36px 36px;
          pointer-events: none;
          z-index: 1;
          animation: filmDustMove 14s ease infinite;
        }
        .burnt-paper-card {
          position: relative;
          background-color: #d1b89b;
          background-image: 
            radial-gradient(circle at 50% 50%, rgba(215, 190, 160, 0.95) 0%, rgba(165, 135, 105, 0.98) 100%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.12'/%3E%3C/svg%3E");
          box-shadow: 
            0 25px 60px rgba(0, 0, 0, 0.8),
            inset 0 0 45px rgba(50, 30, 15, 0.3);
          clip-path: polygon(
            1.5% 2.5%, 3.5% 0.8%, 96.5% 1.8%, 98.8% 3.5%, 
            98.5% 15%, 100% 30%, 99.2% 50%, 100% 75%, 98.6% 96.5%, 
            95.5% 98.8%, 4.5% 98.2%, 1.2% 96.5%, 
            2.2% 80%, 0.4% 50%, 1.8% 20%
          );
          animation: ${slideDirection === 'down' ? 'slideInDown 0.3s ease-out' : 'slideInUp 0.3s ease-out'};
        }
      `}</style>

      <div className="film-grain-overlay" />

      {/* Top Header Navigation */}
      <header
        style={{
          width: '100%',
          maxWidth: '1100px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 20,
        }}
      >
        <Link
          href="/valerie-vault"
          style={{
            color: '#d4bfae',
            textDecoration: 'none',
            fontSize: '11px',
            fontFamily: 'monospace',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            transition: 'color 0.2s ease',
          }}
        >
          &larr; valerie&apos;s vault
        </Link>

        <div style={{ textAlign: 'center' }}>
          <h1
            style={{
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
              margin: 0,
              fontWeight: 'normal',
              color: '#fbf5ef',
            }}
          >
            cloud 9 ☁️ ✨
          </h1>
          <span
            style={{
              fontSize: '10px',
              fontFamily: 'monospace',
              letterSpacing: '0.2em',
              color: '#c2ab9b',
              textTransform: 'uppercase',
            }}
          >
            [ 17th birthday archives &mdash; scroll anywhere on card ]
          </span>
        </div>

        <a
          href="/midnight-ride"
          onClick={handleMidnightRideClick}
          style={{
            padding: '8px 16px',
            borderRadius: '10px',
            backgroundColor: isUnlocked ? '#3a2216' : '#1e110a',
            border: '1px solid #704832',
            color: '#f0e6dc',
            textDecoration: 'none',
            fontSize: '11px',
            fontFamily: 'monospace',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.6)',
            cursor: 'pointer',
          }}
        >
          {isUnlocked ? 'midnight ride →' : '🔒 midnight ride →'}
        </a>
      </header>

      {/* Central Film Card Container */}
      <div
        onWheel={handleCardWheel}
        style={{
          width: '100%',
          maxWidth: '500px',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'ns-resize',
        }}
        title="Scroll anywhere on card to read or switch frames"
      >
        {/* Adhesive Tape Top Accent */}
        <div
          style={{
            width: '90px',
            height: '24px',
            backgroundColor: '#e6ccb2',
            opacity: 0.85,
            margin: '0 auto -12px auto',
            transform: 'rotate(-1deg)',
            zIndex: 15,
            boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
          }}
        />

        <div
          key={currentIndex}
          className="burnt-paper-card"
          style={{
            padding: '2rem 1.6rem 1.4rem 1.6rem',
            display: 'flex',
            flexDirection: 'column',
            height: '530px',
            justifyContent: 'space-between',
            width: '100%',
            border: '1px solid #4a2f1d',
          }}
        >
          {/* Film Strip Left & Right Sprocket Holes */}
          <div style={{ position: 'absolute', left: '10px', top: '16px', bottom: '16px', width: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', pointerEvents: 'none', opacity: '0.85' as any, zIndex: 4 }}>
            {Array.from({ length: 13 }).map((_, i) => (
              <div key={i} style={{ width: '10px', height: '16px', backgroundColor: '#140a05', borderRadius: '2px', border: '1px solid #362012' }} />
            ))}
          </div>
          <div style={{ position: 'absolute', right: '10px', top: '16px', bottom: '16px', width: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', pointerEvents: 'none', opacity: '0.85' as any, zIndex: 4 }}>
            {Array.from({ length: 13 }).map((_, i) => (
              <div key={i} style={{ width: '10px', height: '16px', backgroundColor: '#140a05', borderRadius: '2px', border: '1px solid #362012' }} />
            ))}
          </div>

          {/* Card Top Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontFamily: 'monospace',
              fontSize: '10px',
              letterSpacing: '0.2em',
              color: '#3d2516',
              borderBottom: '1px dashed rgba(61, 37, 22, 0.3)',
              paddingBottom: '0.5rem',
              zIndex: 5,
              paddingLeft: '1rem',
              paddingRight: '1rem',
            }}
          >
            <span>WISH ARCHIVE // 17TH</span>
            <span>FRAME {String(currentIndex + 1).padStart(2, '0')}/{String(cards.length).padStart(2, '0')}</span>
          </div>

          {/* Card Main Container with Polaroid/Letter Styling & Larger Readable Font */}
          <div
            style={{
              margin: '0.6rem 1rem',
              height: '345px',
              backgroundColor: '#120804',
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(35, 18, 10, 0.8) 0%, rgba(10, 4, 2, 0.95) 100%)',
              borderRadius: '6px',
              border: '1px solid #4a2f1d',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              padding: '1.3rem',
              textAlign: 'left',
              position: 'relative',
              overflow: 'hidden',
              zIndex: 5,
            }}
          >
            <img
              src={currentCard.src}
              alt={`wish card ${currentCard.id}`}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.8,
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <span
              style={{
                fontFamily: 'monospace',
                fontSize: '10px',
                color: '#d4b595',
                letterSpacing: '0.2em',
                marginBottom: '0.5rem',
                zIndex: 2,
                alignSelf: 'center',
                textTransform: 'uppercase',
              }}
            >
              [ CARD #{String(currentCard.id).padStart(2, '0')} ]
            </span>
            <div
              ref={textScrollRef}
              style={{
                width: '100%',
                maxHeight: '275px',
                overflowY: 'auto',
                zIndex: 2,
                paddingRight: '6px',
                scrollbarWidth: 'thin',
                scrollbarColor: '#704832 #120804',
              }}
            >
              <p
                style={{
                  fontFamily: 'Georgia, serif',
                  fontStyle: 'italic',
                  fontSize: '1.12rem',
                  color: '#f9f1eb',
                  lineHeight: '1.65',
                  margin: 0,
                  whiteSpace: 'pre-line',
                  textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                }}
              >
                {currentCard.caption}
              </p>
            </div>
          </div>

          {/* Card Footer Author & Heart Button */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px dashed rgba(61, 37, 22, 0.3)',
              paddingTop: '0.6rem',
              zIndex: 5,
              paddingLeft: '1rem',
              paddingRight: '1rem',
            }}
          >
            <span
              style={{
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic',
                fontSize: '1.1rem',
                color: '#2b1a10',
                fontWeight: 'bold',
                letterSpacing: '0.05em',
              }}
            >
              {currentCard.author}
            </span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleHeart(currentCard.id);
              }}
              style={{
                background: 'none',
                border: '1px solid rgba(61, 37, 22, 0.35)',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backgroundColor: hearted[currentCard.id] ? '#3d2516' : 'rgba(215, 190, 160, 0.5)',
                transition: 'all 0.2s ease',
              }}
            >
              {hearted[currentCard.id] ? '❤️' : '🤍'}
            </button>
          </div>
        </div>
      </div>

      <div style={{ height: '0.5rem' }} />

      {/* Mini-Game Security Unlock Modal */}
      {showMiniGame && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(20, 10, 5, 0.92)',
            backdropFilter: 'blur(10px)',
            zIndex: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setShowMiniGame(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '380px',
              width: '100%',
              backgroundColor: '#26170e',
              border: '1px solid #704832',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 25px 50px rgba(0,0,0,0.9), 0 0 30px rgba(120,60,30,0.4)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '26px', marginBottom: '0.5rem' }}>🎞️</span>
            <h3
              style={{
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic',
                fontSize: '1.3rem',
                margin: '0 0 0.5rem 0',
                color: '#fdf6ec',
              }}
            >
              projector reel security
            </h3>
            <p
              style={{
                fontSize: '12px',
                color: '#d4bfae',
                fontFamily: 'monospace',
                lineHeight: 1.5,
                marginBottom: '1rem',
              }}
            >
              midnight ride is locked. align the projector lens by tapping the spark 4 times without suffering a bulb burnout!
            </p>

            {miniGameError ? (
              <div
                style={{
                  backgroundColor: 'rgba(120, 30, 20, 0.4)',
                  border: '1px solid #a83232',
                  color: '#ffb3b3',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '11px',
                  fontFamily: 'monospace',
                  marginBottom: '1rem',
                  lineHeight: 1.4,
                }}
              >
                {miniGameError}
              </div>
            ) : (
              <div
                style={{
                  fontFamily: 'monospace',
                  fontSize: '12px',
                  color: '#fdf6ec',
                  letterSpacing: '0.15em',
                  marginBottom: '1rem',
                }}
              >
                alignment progress: {miniGameStep} / 4
              </div>
            )}

            <button
              onClick={handleMiniGameTap}
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                backgroundColor: '#382216',
                border: '2px solid #d4b595',
                fontSize: '26px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px rgba(212,181,149,0.3)',
                transition: 'transform 0.1s ease',
              }}
              onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.92)')}
              onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              ✨
            </button>

            <button
              onClick={() => setShowMiniGame(false)}
              style={{
                marginTop: '1.5rem',
                background: 'none',
                border: 'none',
                color: '#9e8070',
                fontSize: '11px',
                fontFamily: 'monospace',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              abort
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
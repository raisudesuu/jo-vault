'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface PhotoItem {
  id: number;
  src: string;
  caption: string;
}

export default function ValerieVault() {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);
  const [isAutoRotate, setIsAutoRotate] = useState(true);

  // Cloud 9 Mini-Game Unlock States
  const [showUnlockModal, setShowUnlockModal] = useState(false);
  const [unlockProgress, setUnlockProgress] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const router = useRouter();

  const containerRef = useRef<HTMLDivElement>(null);

  // messy, lowercase, hopeless romantic captions
  const photos: PhotoItem[] = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    src: `/images/${i + 1}.jpeg`,
    caption: [
      "look at this literal angel oh my god. you were so tiny and already stealing hearts. the little smile is actually going to make me cry",
      "the pink dress?? the little hands?? you've literally been the absolute cutest person on earth since day one and it's not even fair",
      "i can barely see you but i still know you look gorgeous. hiding behind the phone like always but i still spot that pretty face",
      "is the brightness in the room with us?? 😭 literal shadow demon but somehow still the most beautiful girl i've ever seen",
      "this one does things to me honestly. just the softest little smile in the dark. i'm obsessed with you it's actually crazy",
      "the pout omg. throwing up the peace sign like you aren't completely ruining my life (in the best way possible). so pretty",
      "the glasses!!! you look so incredibly soft here. i just want to squish your cheeks and stare at you for hours",
      "okay the red light is such a vibe. the little kissy face is sending me. how do you just effortlessly look this good lying down?",
      "im actually terrified of you sometimes 💀 what even is this filter oh my god. you're lucky i'm so hopelessly in love with you because this is an actual jumpscare",
      "late night car rides and you just looking effortlessly beautiful in the dark. i could look at those lips forever tbh",
      "the butterfly bracelet!! such a pretty little detail. your aesthetic is just as beautiful as you are, i swear to god",
      "what is this face 😭 you're such a dork i love it so much. even when you're trying to be weird you're still the cutest person ever",
      "the way you're looking up like that!! literally the brightest little star. you have the exact same beautiful eyes even now",
      "the absolute sass on this child 😭 the attitude has literally always been there. clutching that water bottle like it's a weapon",
      "this fit on you though... you look so stunning. just casually taking a mirror pic and making me fall in love all over again",
      "the spiderman phase omg. hiding that pretty face again but it's okay because you're my favorite superhero anyway",
      "trying to be all mysterious and edgy huh? doesn't work on me, i already know how absolutely gorgeous you are under there",
      "the angle, the lighting, the fit... you're literally art. i don't even have words you're just so undeniably beautiful",
      "another shadow realm pic but i don't even care. you just have this magnetic pull and i am hopelessly drawn to you",
      "those eyes... you're looking right into my soul here. the glasses look so incredibly good on you. i'm so lucky man"
    ][i] || `captured memory #${i + 1}`,
  }));

  // Auto-rotation loop
  useEffect(() => {
    if (!isAutoRotate || isDragging || selectedPhoto) return;
    const interval = setInterval(() => {
      setRotation((prev) => prev - 0.25);
    }, 30);
    return () => clearInterval(interval);
  }, [isAutoRotate, isDragging, selectedPhoto]);

  // Dragging interaction handlers
  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setIsAutoRotate(false);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const deltaX = clientX - startX;
    setRotation((prev) => prev + deltaX * 0.25);
    setStartX(clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Heart animation trigger on lightbox click
  const spawnHearts = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newHeart = { id: Date.now(), x, y };
    setHearts((prev) => [...prev, newHeart]);
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1000);
  };

  // Handle Cloud 9 Security Mini-Game Click
  const handleCloud9Click = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isUnlocked) {
      router.push('/cloud-9');
    } else {
      setShowUnlockModal(true);
    }
  };

  const handleUnlockTap = () => {
    const nextProgress = unlockProgress + 1;
    if (nextProgress >= 5) {
      setIsUnlocked(true);
      setUnlockProgress(5);
      setTimeout(() => {
        setShowUnlockModal(false);
        router.push('/cloud-9');
      }, 800);
    } else {
      setUnlockProgress(nextProgress);
    }
  };

  const totalPhotos = photos.length;
  const radius = 480;

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#080808',
        backgroundImage: `
          radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 60%),
          linear-gradient(135deg, #0d0d0d 0%, #040404 100%)
        `,
        color: '#f0f0f0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2.5rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
        userSelect: 'none',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Georgia, serif',
      }}
      onMouseUp={handleMouseUp}
      onTouchEnd={handleMouseUp}
    >
      <style>{`
        @keyframes heartFloat {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-80px) scale(1.4); opacity: 0; }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }
        @keyframes floatOrbit {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(180deg); }
        }
        @keyframes floatOrbitSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-16px) rotate(-180deg) scale(1.1); }
        }
      `}</style>

      {/* Noir Ambient Glow Background */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '850px',
          height: '850px',
          backgroundColor: '#ffffff',
          opacity: 0.04,
          borderRadius: '50%',
          filter: 'blur(160px)',
          pointerEvents: 'none',
          animation: 'pulseGlow 9s ease-in-out infinite',
        }}
      />

      {/* Top Header & Navigation */}
      <header
        style={{
          width: '100%',
          maxWidth: '1100px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          zIndex: 20,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <Link
            href="/random-pieces-of-you"
            style={{
              color: '#aaaaaa',
              textDecoration: 'none',
              fontSize: '11px',
              fontFamily: 'monospace',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              transition: 'color 0.2s ease',
            }}
          >
            &larr; random pieces of you
          </Link>
          <h1
            style={{
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              margin: 0,
              fontWeight: 'normal',
              color: '#ffffff',
              textShadow: '0 4px 25px rgba(255, 255, 255, 0.15)',
            }}
          >
            valerie&apos;s vault ✧
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: '13.5px',
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              color: '#999999',
              maxWidth: '650px',
              lineHeight: 1.5,
            }}
          >
            just me staring at the exact same pictures because it is a literal crime how rarely she sends new ones. she probably hates me, guys. it&apos;s fine. i&apos;m fine. 🥲✨
          </p>
        </div>

        {/* Cloud 9 Connection Link with Mini-Game Trigger */}
        <a
          href="/cloud-9"
          onClick={handleCloud9Click}
          style={{
            padding: '10px 18px',
            borderRadius: '12px',
            backgroundColor: isUnlocked ? '#222222' : '#141414',
            border: '1px solid #444444',
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: '11px',
            fontFamily: 'monospace',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
            whiteSpace: 'nowrap',
            cursor: 'pointer',
          }}
        >
          {isUnlocked ? 'cloud 9 ☁️ (unlocked) →' : '🔒 cloud 9 (locked) →'}
        </a>
      </header>

      {/* Redesigned Noir 3D Spinning Carousel Container with Rich Floating Vibe Elements */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        style={{
          width: '100%',
          height: '520px',
          perspective: '1500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: isDragging ? 'grabbing' : 'grab',
          zIndex: 10,
          margin: '2rem 0',
          position: 'relative',
        }}
      >
        {/* Rich Surrounding Carousel Elements (Floating Hearts, Stars, Vibe Tags) */}
        <div style={{ position: 'absolute', top: '25px', left: '18%', fontSize: '18px', opacity: 0.5, animation: 'floatOrbit 5s ease-in-out infinite', pointerEvents: 'none', zIndex: 12 }}>🤍</div>
        <div style={{ position: 'absolute', top: '15px', right: '22%', fontSize: '20px', opacity: 0.4, animation: 'floatOrbitSlow 7s ease-in-out infinite', pointerEvents: 'none', zIndex: 12 }}>✨</div>
        <div style={{ position: 'absolute', top: '45%', left: '8%', fontSize: '16px', opacity: 0.35, animation: 'floatOrbit 6s ease-in-out infinite reverse', pointerEvents: 'none', zIndex: 12 }}>✦</div>
        <div style={{ position: 'absolute', top: '40%', right: '9%', fontSize: '18px', opacity: 0.45, animation: 'floatOrbitSlow 8s ease-in-out infinite', pointerEvents: 'none', zIndex: 12 }}>❤️</div>
        <div style={{ position: 'absolute', bottom: '30px', left: '24%', fontSize: '15px', opacity: 0.4, animation: 'floatOrbit 6.5s ease-in-out infinite', pointerEvents: 'none', zIndex: 12 }}>✧</div>
        <div style={{ position: 'absolute', bottom: '20px', right: '26%', fontSize: '16px', opacity: 0.5, animation: 'floatOrbitSlow 5.5s ease-in-out infinite', pointerEvents: 'none', zIndex: 12 }}>🤍</div>

        {/* Small floating mood pill badges around the carousel */}
        <div style={{ position: 'absolute', top: '5px', left: '34%', padding: '4px 10px', borderRadius: '20px', backgroundColor: 'rgba(20,20,20,0.8)', border: '1px solid rgba(255,255,255,0.12)', fontSize: '10px', fontFamily: 'monospace', color: '#aaaaaa', letterSpacing: '0.1em', animation: 'floatOrbit 7s ease-in-out infinite', pointerEvents: 'none', zIndex: 12 }}>
          ✦ my favorite person
        </div>
        <div style={{ position: 'absolute', bottom: '5px', right: '35%', padding: '4px 10px', borderRadius: '20px', backgroundColor: 'rgba(20,20,20,0.8)', border: '1px solid rgba(255,255,255,0.12)', fontSize: '10px', fontFamily: 'monospace', color: '#aaaaaa', letterSpacing: '0.1em', animation: 'floatOrbitSlow 8s ease-in-out infinite', pointerEvents: 'none', zIndex: 12 }}>
          ☁️ permanent occupant
        </div>

        {/* Ambient Carousel Orbit Ring Backdrop Design */}
        <div
          style={{
            position: 'absolute',
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
            borderRadius: '50%',
            border: '1px dashed rgba(255, 255, 255, 0.08)',
            pointerEvents: 'none',
            transform: 'rotateX(75deg)',
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: `${radius * 1.5}px`,
            height: `${radius * 1.5}px`,
            borderRadius: '50%',
            border: '1px solid rgba(255, 255, 255, 0.04)',
            pointerEvents: 'none',
            transform: 'rotateX(75deg)',
            zIndex: 1,
          }}
        />

        <div
          style={{
            width: '210px',
            height: '290px',
            position: 'relative',
            transformStyle: 'preserve-3d',
            transform: `rotateY(${rotation}deg)`,
            transition: isDragging ? 'none' : 'transform 0.1s ease-out',
            zIndex: 5,
          }}
        >
          {photos.map((photo, index) => {
            const angle = (360 / totalPhotos) * index;
            return (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                style={{
                  position: 'absolute',
                  width: '210px',
                  height: '290px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.95), 0 0 25px rgba(255, 255, 255, 0.08)',
                  backgroundColor: '#111111',
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  cursor: 'pointer',
                  backfaceVisibility: 'hidden',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                }}
              >
                {/* Elegant White Top Glow Border */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)',
                    zIndex: 2,
                  }}
                />
                <img
                  src={photo.src}
                  alt={`valerie vault ${photo.id}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    pointerEvents: 'none',
                    filter: 'contrast(1.05) brightness(0.95)',
                  }}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.endsWith('.jpeg')) {
                      target.src = target.src.replace('.jpeg', '.jpg');
                    } else if (target.src.endsWith('.jpg')) {
                      target.src = target.src.replace('.jpg', '.png');
                    }
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '12px 14px',
                    background: 'linear-gradient(to top, rgba(8, 8, 8, 0.98) 20%, rgba(8, 8, 8, 0.7) 80%, transparent)',
                    fontSize: '11px',
                    fontFamily: 'monospace',
                    color: '#cccccc',
                    textAlign: 'center',
                    letterSpacing: '0.2em',
                  }}
                >
                  #{String(photo.id).padStart(2, '0')}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Styled Noir Control Buttons */}
      <div
        style={{
          display: 'flex',
          gap: '1.2rem',
          alignItems: 'center',
          zIndex: 20,
        }}
      >
        <button
          onClick={() => setRotation((prev) => prev + 360 / totalPhotos)}
          style={{
            padding: '11px 22px',
            borderRadius: '10px',
            backgroundColor: '#141414',
            border: '1px solid #333333',
            color: '#f0f0f0',
            fontFamily: 'monospace',
            fontSize: '11px',
            letterSpacing: '0.15em',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
            transition: 'all 0.2s ease',
          }}
        >
          &larr; prev
        </button>
        <button
          onClick={() => setIsAutoRotate(!isAutoRotate)}
          style={{
            padding: '11px 22px',
            borderRadius: '10px',
            backgroundColor: isAutoRotate ? '#262626' : '#141414',
            border: '1px solid #555555',
            color: '#ffffff',
            fontFamily: 'monospace',
            fontSize: '11px',
            letterSpacing: '0.15em',
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(255, 255, 255, 0.1)',
            transition: 'all 0.2s ease',
          }}
        >
          {isAutoRotate ? 'pause spin ⏸' : 'auto spin ▶'}
        </button>
        <button
          onClick={() => setRotation((prev) => prev - 360 / totalPhotos)}
          style={{
            padding: '11px 22px',
            borderRadius: '10px',
            backgroundColor: '#141414',
            border: '1px solid #333333',
            color: '#f0f0f0',
            fontFamily: 'monospace',
            fontSize: '11px',
            letterSpacing: '0.15em',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
            transition: 'all 0.2s ease',
          }}
        >
          next &rarr;
        </button>
      </div>

      {/* Cloud 9 Security Unlock Mini-Game Modal */}
      {showUnlockModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(8, 8, 8, 0.92)',
            backdropFilter: 'blur(12px)',
            zIndex: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setShowUnlockModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '380px',
              width: '100%',
              backgroundColor: '#141414',
              border: '1px solid #444444',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '28px', marginBottom: '0.5rem' }}>🔐</span>
            <h3
              style={{
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic',
                fontSize: '1.4rem',
                margin: '0 0 0.5rem 0',
                color: '#ffffff',
              }}
            >
              vault security check
            </h3>
            <p
              style={{
                fontSize: '13px',
                color: '#aaaaaa',
                fontFamily: 'monospace',
                lineHeight: 1.5,
                marginBottom: '1.5rem',
              }}
            >
              cloud 9 is restricted! tap the heart 5 times to bypass security and clear the override.
            </p>

            <div
              style={{
                fontFamily: 'monospace',
                fontSize: '12px',
                color: '#ffffff',
                letterSpacing: '0.15em',
                marginBottom: '1rem',
              }}
            >
              security progress: {unlockProgress} / 5
            </div>

            <button
              onClick={handleUnlockTap}
              style={{
                width: '75px',
                height: '75px',
                borderRadius: '50%',
                backgroundColor: '#222222',
                border: '2px solid #ffffff',
                fontSize: '30px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 25px rgba(255, 255, 255, 0.25)',
                transition: 'transform 0.1s ease',
              }}
              onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.9)')}
              onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              ❤️
            </button>

            {isUnlocked && (
              <p style={{ marginTop: '1rem', color: '#a3e6a5', fontSize: '12px', fontFamily: 'monospace' }}>
                access granted! launching cloud 9... ✨
              </p>
            )}

            <button
              onClick={() => setShowUnlockModal(false)}
              style={{
                marginTop: '1.5rem',
                background: 'none',
                border: 'none',
                color: '#888888',
                fontSize: '11px',
                fontFamily: 'monospace',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              cancel
            </button>
          </div>
        </div>
      )}

      {/* Lightbox Focus View */}
      {selectedPhoto && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(8, 8, 8, 0.92)',
            backdropFilter: 'blur(12px)',
            zIndex: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              spawnHearts(e);
            }}
            style={{
              position: 'relative',
              maxWidth: '420px',
              width: '100%',
              backgroundColor: '#141414',
              border: '1px solid #444444',
              borderRadius: '20px',
              padding: '1.25rem',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(255, 255, 255, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '16px',
                background: 'none',
                border: 'none',
                color: '#cccccc',
                fontSize: '18px',
                cursor: 'pointer',
                zIndex: 10,
              }}
            >
              ✕
            </button>

            {/* Click Hearts */}
            {hearts.map((h) => (
              <span
                key={h.id}
                style={{
                  position: 'absolute',
                  left: h.x,
                  top: h.y,
                  pointerEvents: 'none',
                  fontSize: '20px',
                  animation: 'heartFloat 1s forwards ease-out',
                  zIndex: 20,
                }}
              >
                ❤️
              </span>
            ))}

            <div
              style={{
                width: '100%',
                height: '380px',
                borderRadius: '14px',
                overflow: 'hidden',
                marginBottom: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              <img
                src={selectedPhoto.src}
                alt="selected memory"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.endsWith('.jpeg')) {
                    target.src = target.src.replace('.jpeg', '.jpg');
                  } else if (target.src.endsWith('.jpg')) {
                    target.src = target.src.replace('.jpg', '.png');
                  }
                }}
              />
            </div>

            <div style={{ textAlign: 'center' }}>
              <span
                style={{
                  fontSize: '10px',
                  fontFamily: 'monospace',
                  letterSpacing: '0.2em',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                }}
              >
                [ memory {String(selectedPhoto.id).padStart(2, '0')} / 20 ]
              </span>
              <p
                style={{
                  margin: '0.5rem 0 0 0',
                  fontFamily: 'Georgia, serif',
                  fontStyle: 'italic',
                  fontSize: '15px',
                  color: '#f0f0f0',
                  lineHeight: 1.4,
                }}
              >
                {selectedPhoto.caption}
              </p>
              <span
                style={{
                  display: 'block',
                  marginTop: '0.6rem',
                  fontSize: '11px',
                  color: '#888888',
                  fontStyle: 'italic',
                }}
              >
                (tap image to send a ❤️)
              </span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
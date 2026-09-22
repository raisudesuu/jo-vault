'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
  spotifyTrackId: string;
  vibeColor: string;
}

const PLAYLIST_TRACKS: Track[] = [
  { id: 1, title: 'Lovesong', artist: 'Adele', duration: '5:16', spotifyTrackId: '2PPN1HFpVotjq7oJIqQbnx', vibeColor: 'linear-gradient(180deg, #2b030b 0%, #590d1a 50%, #150204 100%)' },
  { id: 2, title: 'Sacrifice', artist: 'The Weeknd', duration: '3:08', spotifyTrackId: '1nH2PkJL1XoUq8oE6tBZoU', vibeColor: 'linear-gradient(180deg, #05101a 0%, #0d273d 50%, #020508 100%)' },
  { id: 3, title: 'Do I Wanna Know?', artist: 'Arctic Monkeys', duration: '4:32', spotifyTrackId: '5FVd6KXrgO9B3JPmC8OPst', vibeColor: 'linear-gradient(180deg, #120c1f 0%, #291b42 50%, #08040f 100%)' },
  { id: 4, title: 'My Love', artist: 'Justin Timberlake', duration: '4:36', spotifyTrackId: '4NeOWqHmlrGRuBvsLJC9rL', vibeColor: 'linear-gradient(180deg, #1f1405 0%, #47320c 50%, #0a0601 100%)' },
  { id: 5, title: 'House Of Balloons', artist: 'The Weeknd', duration: '6:47', spotifyTrackId: '2r7BPog74oaTG5shNYiUnV', vibeColor: 'linear-gradient(180deg, #1a0f05 0%, #42230d 50%, #080301 100%)' },
  { id: 6, title: 'Loveeeeeee Song', artist: 'Rihanna', duration: '4:16', spotifyTrackId: '5Mk1tgVrSuoWWwPVFNS0jB', vibeColor: 'linear-gradient(180deg, #1a0515 0%, #470c39 50%, #080106 100%)' },
  { id: 7, title: 'Obsessed', artist: 'Mariah Carey', duration: '4:02', spotifyTrackId: '5EGPf0nqO7vEIwsOX6Er98', vibeColor: 'linear-gradient(180deg, #26051c 0%, #54103e 50%, #0f020b 100%)' },
  { id: 8, title: 'hot girl bummer', artist: 'blackbear', duration: '3:08', spotifyTrackId: '6jRq8gaZhMUyy5RclRPcAf', vibeColor: 'linear-gradient(180deg, #200526 0%, #490f57 50%, #0a010c 100%)' },
  { id: 9, title: 'Party Monster', artist: 'The Weeknd', duration: '4:09', spotifyTrackId: '4F7A0DXBrmUAkp32uenhZt', vibeColor: 'linear-gradient(180deg, #0f0526 0%, #290f57 50%, #04010c 100%)' },
  { id: 10, title: 'Love Me Not', artist: 'Ravyn Lenae', duration: '3:33', spotifyTrackId: '1UNEuG9DYOWiikf00ayr52', vibeColor: 'linear-gradient(180deg, #260505 0%, #570f0f 50%, #0c0101 100%)' },
  { id: 11, title: 'Moonlight', artist: 'Kali Uchis', duration: '3:07', spotifyTrackId: '2i2gDpKKWjvnRTOZRhaPh2', vibeColor: 'linear-gradient(180deg, #052618 0%, #0f5739 50%, #010c05 100%)' },
  { id: 12, title: 'Swim', artist: 'Chase Atlantic', duration: '3:48', spotifyTrackId: '3M0lSi5WW79CXQamgSBIjx', vibeColor: 'linear-gradient(180deg, #051d26 0%, #0f4457 50%, #01080c 100%)' },
  { id: 13, title: 'You Get Me So High', artist: 'The Neighbourhood', duration: '2:33', spotifyTrackId: '7zwn1eykZtZ5LODrf7c0tS', vibeColor: 'linear-gradient(180deg, #181818 0%, #383838 50%, #080808 100%)' },
  { id: 14, title: 'Promiscuous', artist: 'Nelly Furtado', duration: '4:02', spotifyTrackId: '2gam98EZKrF9XuOkU13ApN', vibeColor: 'linear-gradient(180deg, #261705 0%, #57360f 50%, #0c0701 100%)' },
  { id: 15, title: 'UNETHICAL', artist: 'Faouzia', duration: '3:39', spotifyTrackId: '6QKpHmO41jkd9pTp0FfmHs', vibeColor: 'linear-gradient(180deg, #26050f 0%, #570f27 50%, #0c0104 100%)' },
  { id: 16, title: 'Take My Breath', artist: 'The Weeknd', duration: '5:39', spotifyTrackId: '2vgUijXOTRMnWXDtvgMp2b', vibeColor: 'linear-gradient(180deg, #051f26 0%, #0f4c57 50%, #01090c 100%)' },
  { id: 17, title: 'Legendary Lovers', artist: 'Katy Perry', duration: '3:44', spotifyTrackId: '5Uc37Y6FijZcM538PqqkWd', vibeColor: 'linear-gradient(180deg, #262205 0%, #574e0f 50%, #0c0b01 100%)' },
  { id: 18, title: 'Oxytocin', artist: 'Billie Eilish', duration: '3:30', spotifyTrackId: '4t2OeILB07eMGTXSUbMPEu', vibeColor: 'linear-gradient(180deg, #0a0a0a 0%, #242424 50%, #020202 100%)' },
  { id: 19, title: 'Reflections', artist: 'The Neighbourhood', duration: '4:04', spotifyTrackId: '2xql0pid3EUwW38AsywxhV', vibeColor: 'linear-gradient(180deg, #051c18 0%, #0f4239 50%, #020a08 100%)' },
  { id: 20, title: 'Training Season', artist: 'Dua Lipa', duration: '3:40', spotifyTrackId: '4jiOgEp2ZPjzoUF5DxaOjG', vibeColor: 'linear-gradient(180deg, #260514 0%, #570f31 50%, #0c0105 100%)' },
  { id: 21, title: 'Ride Or Die, Pt. 2', artist: 'Sevdaliza', duration: '2:38', spotifyTrackId: '5oYVxFt2k4SkVp6wzVsFWN', vibeColor: 'linear-gradient(180deg, #260505 0%, #570f0f 50%, #0c0101 100%)' },
  { id: 22, title: 'Slow Down', artist: 'Chase Atlantic', duration: '3:32', spotifyTrackId: '2VyaGJJI8dOiv36F8vHZIL', vibeColor: 'linear-gradient(180deg, #050b26 0%, #0f1c57 50%, #01030c 100%)' },
  { id: 23, title: 'Amsham', artist: 'Aksomaniac', duration: '4:41', spotifyTrackId: '0Dt5EqEckM8jcfMYEdlx2Z', vibeColor: 'linear-gradient(180deg, #261405 0%, #572e0f 50%, #0c0501 100%)' },
  { id: 24, title: 'Levitating', artist: 'Dua Lipa', duration: '3:23', spotifyTrackId: '39LLxExYz6ewLAcYrzQQyP', vibeColor: 'linear-gradient(180deg, #1b0526 0%, #3f0f57 50%, #07010c 100%)' },
  { id: 25, title: 'Call Out My Name', artist: 'The Weeknd', duration: '3:48', spotifyTrackId: '09mEdoA6zrmBPgTEN5qXmN', vibeColor: 'linear-gradient(180deg, #1c0505 0%, #420d0d 50%, #080202 100%)' },
  { id: 26, title: 'Sunsetz', artist: 'Cigarettes After Sex', duration: '3:34', spotifyTrackId: '0yuAWlxq59xT3agQ965OxE', vibeColor: 'linear-gradient(180deg, #1a0f12 0%, #3d242a 50%, #080405 100%)' },
  { id: 27, title: 'Diet Mountain Dew', artist: 'Lana Del Rey', duration: '3:42', spotifyTrackId: '48SdtsEKujibZPrd6UMfAr', vibeColor: 'linear-gradient(180deg, #261f05 0%, #57460f 50%, #0c0f01 100%)' },
  { id: 28, title: 'Summer Love', artist: 'Justin Timberlake', duration: '4:12', spotifyTrackId: '1MBM7CyZbwJpVbbZJnHHRg', vibeColor: 'linear-gradient(180deg, #261505 0%, #57300f 50%, #0c0501 100%)' },
  { id: 29, title: 'The Machine', artist: 'Reed Wonder', duration: '3:12', spotifyTrackId: '19ItuvrZfTudwC6S5lkDH3', vibeColor: 'linear-gradient(180deg, #052126 0%, #0f4b57 50%, #01090c 100%)' },
  { id: 30, title: 'Sunday Morning', artist: 'Maroon 5', duration: '4:04', spotifyTrackId: '1YI0uK36eupTmw9F8kHysr', vibeColor: 'linear-gradient(180deg, #1c1f05 0%, #42490f 50%, #080a01 100%)' },
  { id: 31, title: 'Friends', artist: 'Chase Atlantic', duration: '3:50', spotifyTrackId: '7uDUb37h7Xdhza1eWMkoJv', vibeColor: 'linear-gradient(180deg, #051c26 0%, #0f3f57 50%, #01080c 100%)' },
  { id: 32, title: 'Leather Weather', artist: 'The Neighbourhood', duration: '2:56', spotifyTrackId: '4a9axdtH9qFx0nMiKjwChd', vibeColor: 'linear-gradient(180deg, #141414 0%, #2e2e2e 50%, #050505 100%)' },
  { id: 33, title: 'bloodline', artist: 'Ariana Grande', duration: '3:36', spotifyTrackId: '2hloaUoRonYssMuqLCBLTX', vibeColor: 'linear-gradient(180deg, #260512 0%, #570f2b 50%, #0c0105 100%)' },
  { id: 34, title: 'iloveitiloveitiloveit', artist: 'Bella Kay', duration: '3:03', spotifyTrackId: '5IMpnpD0tQVcqWlVIgtAtV', vibeColor: 'linear-gradient(180deg, #26051c 0%, #54103e 50%, #0f020b 100%)' },
  { id: 35, title: 'Falling', artist: 'Harry Styles', duration: '4:00', spotifyTrackId: '1ZMiCix7XSAbfAJlEZWMCp', vibeColor: 'linear-gradient(180deg, #051d26 0%, #0f4457 50%, #01080c 100%)' },
  { id: 36, title: 'I Wanna Be Yours', artist: 'Arctic Monkeys', duration: '3:03', spotifyTrackId: '5XeFesFbtLpXzIVDNQP22n', vibeColor: 'linear-gradient(180deg, #120c1f 0%, #291b42 50%, #08040f 100%)' },
  { id: 37, title: 'Mercy', artist: 'Shawn Mendes', duration: '3:28', spotifyTrackId: '0AS63m1wHv9n4VVRizK6Hc', vibeColor: 'linear-gradient(180deg, #260505 0%, #570f0f 50%, #0c0101 100%)' },
];

// Exact updated playlist embed URL
const FULL_PLAYLIST_EMBED = 'https://open.spotify.com/embed/playlist/4kIvPanUj3vMZWvD6Yl3WV?si=IgJMFg_BSyujQYKshnB63A&utm_source=generator&theme=0';

export default function InteractivePlaylistPage() {
  const [currentBg, setCurrentBg] = useState('linear-gradient(180deg, #180509 0%, #3d0d14 30%, #7a1e25 55%, #c84b31 75%, #f48c32 88%, #150204 100%)');
  const [activeTrackId, setActiveTrackId] = useState<number | null>(null);
  const [currentEmbedUrl, setCurrentEmbedUrl] = useState(FULL_PLAYLIST_EMBED);
  const [isFullPlaylist, setIsFullPlaylist] = useState(true);

  // Mini-game states
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [targetPos, setTargetPos] = useState({ top: 50, left: 50 });
  const [gameWon, setGameWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameStarted && !gameWon && !gameOver) {
      if (timeLeft > 0) {
        timer = setTimeout(() => {
          setTimeLeft(prev => prev - 1);
        }, 1000);
      } else {
        setGameOver(true);
      }
    }
    return () => clearTimeout(timer);
  }, [gameStarted, timeLeft, gameWon, gameOver]);

  const handleTrackClick = (track: Track) => {
    setActiveTrackId(track.id);
    setCurrentBg(track.vibeColor);
    setIsFullPlaylist(false);
    setCurrentEmbedUrl(`https://open.spotify.com/embed/track/${track.spotifyTrackId}?utm_source=generator&theme=0`);
  };

  const handleResetToFullPlaylist = () => {
    setIsFullPlaylist(true);
    setActiveTrackId(null);
    setCurrentEmbedUrl(FULL_PLAYLIST_EMBED);
    setCurrentBg('linear-gradient(180deg, #180509 0%, #3d0d14 30%, #7a1e25 55%, #c84b31 75%, #f48c32 88%, #150204 100%)');
  };

  const handleSpawnTarget = () => {
    if (gameOver || gameWon) return;
    const newScore = score + 1;
    setScore(newScore);
    if (newScore >= 10) {
      setGameWon(true);
    } else {
      setTargetPos({
        top: Math.floor(Math.random() * 60) + 20,
        left: Math.floor(Math.random() * 70) + 15,
      });
    }
  };

  const restartGame = () => {
    setGameStarted(false);
    setScore(0);
    setTimeLeft(30);
    setGameWon(false);
    setGameOver(false);
  };

  return (
    <main
      style={{
        position: 'relative',
        width: '100vw',
        minHeight: '100vh',
        overflowX: 'hidden',
        background: currentBg,
        transition: 'background 0.8s ease-in-out',
        fontFamily: 'Georgia, serif',
        color: '#f5ebea',
        paddingBottom: '4rem',
      }}
    >
      {/* Top Bar */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '2rem 3rem',
          zIndex: 30,
          background: 'rgba(20, 4, 7, 0.75)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(217, 48, 67, 0.2)',
        }}
      >
        <Link
          href="/cloud-9"
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
          }}
        >
          ← CLOUD 9
        </Link>
        <span style={{ fontSize: '11px', fontFamily: 'monospace', letterSpacing: '0.3em', color: '#d4b5b3' }}>
          FOR JO 💓✨
        </span>
      </div>

      <div style={{ maxWidth: '900px', margin: '3rem auto', padding: '0 1.5rem' }}>
        
        {/* Header Box & Spotify Player */}
        <div
          style={{
            background: 'rgba(24, 5, 9, 0.85)',
            border: '1px solid rgba(120, 25, 36, 0.8)',
            borderRadius: '20px',
            padding: '2.5rem',
            marginBottom: '2.5rem',
            boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#ff6b7a', letterSpacing: '0.2em' }}>
              A LITTLE COLLECTION OF SONGS
            </span>
            {!isFullPlaylist && (
              <button
                onClick={handleResetToFullPlaylist}
                style={{
                  background: 'rgba(217, 48, 67, 0.2)',
                  border: '1px solid rgba(255, 77, 97, 0.5)',
                  color: '#ff8593',
                  padding: '6px 14px',
                  borderRadius: '10px',
                  fontFamily: 'monospace',
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  transition: 'all 0.2s ease',
                }}
              >
                ← Back to Full Playlist
              </button>
            )}
          </div>

          <h1 style={{ fontSize: '2.8rem', fontStyle: 'italic', margin: 0, fontWeight: 'normal' }}>
            For Jo ✨
          </h1>
          <p style={{ color: '#d4b5b3', fontSize: '14px', maxWidth: '600px', lineHeight: 1.6, margin: 0 }}>
            for the girl who completely owns my heart, my thoughts, and my late-night daydreams. Click any track below to play it right here. 💓✨
          </p>

          {/* Embedded Spotify Audio Player */}
          <div style={{ marginTop: '0.5rem' }}>
            <iframe
              key={currentEmbedUrl}
              style={{ borderRadius: '12px' }}
              src={currentEmbedUrl}
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>

        {/* All 37 Interactive Tracks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {PLAYLIST_TRACKS.map((track) => {
            const isSelected = activeTrackId === track.id;
            return (
              <div
                key={track.id}
                onClick={() => handleTrackClick(track)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px 24px',
                  background: isSelected ? 'rgba(60, 10, 18, 0.9)' : 'rgba(20, 4, 7, 0.6)',
                  border: isSelected ? '1px solid #ff4d61' : '1px solid rgba(120, 25, 36, 0.4)',
                  borderRadius: '14px',
                  cursor: 'pointer',
                  transform: isSelected ? 'scale(1.02) translateX(6px)' : 'scale(1) translateX(0)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: isSelected ? '0 10px 30px rgba(255, 77, 97, 0.3)' : 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '13px', color: '#ff6b7a', opacity: 0.8 }}>
                    {track.id < 10 ? `0${track.id}` : track.id}
                  </span>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 500, color: '#f5ebea' }}>
                      {track.title} {isSelected && <span style={{ fontSize: '11px', color: '#ff8593', marginLeft: '8px' }}>● Playing</span>}
                    </h4>
                    <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#b89b99', fontFamily: 'monospace' }}>
                      {track.artist}
                    </p>
                  </div>
                </div>
                <span style={{ fontFamily: 'monospace', fontSize: '13px', color: '#b89b99' }}>{track.duration}</span>
              </div>
            );
          })}
        </div>

        {/* Mini-Game Section */}
        <div
          style={{
            marginTop: '4rem',
            background: 'rgba(24, 5, 9, 0.9)',
            border: '1px solid rgba(217, 48, 67, 0.5)',
            borderRadius: '24px',
            padding: '2.5rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
          }}
        >
          <h2 style={{ fontStyle: 'italic', fontSize: '1.8rem', margin: '0 0 0.5rem 0' }}>
            Catch the Heartbeat Mini-Game 💓
          </h2>
          <p style={{ color: '#d4b5b3', fontSize: '13.5px', marginBottom: '1.5rem' }}>
            Click 10 pulsing hearts within 30 seconds to unlock the next chapter!
          </p>

          {!gameStarted && !gameWon && !gameOver && (
            <button
              onClick={() => {
                setGameStarted(true);
                setScore(0);
                setTimeLeft(30);
              }}
              style={{
                background: '#d93043',
                border: '1px solid #ff4d61',
                color: '#f5ebea',
                padding: '12px 28px',
                borderRadius: '12px',
                fontFamily: 'monospace',
                fontSize: '12px',
                letterSpacing: '0.2em',
                cursor: 'pointer',
                textTransform: 'uppercase',
                boxShadow: '0 5px 20px rgba(217, 48, 67, 0.5)',
              }}
            >
              START GAME 🚀
            </button>
          )}

          {gameStarted && !gameWon && !gameOver && (
            <div style={{ height: '220px', position: 'relative', border: '1px dashed rgba(255,77,97,0.3)', borderRadius: '12px' }}>
              <div style={{ position: 'absolute', top: '10px', left: '15px', fontFamily: 'monospace', fontSize: '12px', color: '#ff8593' }}>
                SCORE: {score} / 10 | TIME LEFT: {timeLeft}s
              </div>

              <button
                onClick={handleSpawnTarget}
                style={{
                  position: 'absolute',
                  top: `${targetPos.top}%`,
                  left: `${targetPos.left}%`,
                  background: '#ff1a35',
                  border: '2px solid #fff',
                  borderRadius: '50%',
                  width: '45px',
                  height: '45px',
                  cursor: 'pointer',
                  boxShadow: '0 0 15px #ff4d61',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  transition: 'all 0.1s ease',
                }}
              >
                💓
              </button>
            </div>
          )}

          {gameOver && (
            <div style={{ padding: '1.5rem', background: 'rgba(50, 10, 15, 0.7)', borderRadius: '14px', border: '1px solid rgba(255, 77, 97, 0.5)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div>
                <h3 style={{ color: '#ff6b7a', margin: '0 0 0.5rem 0' }}>⏳ Time's Up!</h3>
                <p style={{ fontSize: '13px', margin: 0, color: '#f5ebea' }}>
                  Aww, so close! Take a deep breath and try catching them again. 🤍
                </p>
              </div>
              <button
                onClick={restartGame}
                style={{
                  background: 'transparent',
                  border: '1px solid #ff4d61',
                  color: '#ff8593',
                  padding: '10px 22px',
                  borderRadius: '10px',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                }}
              >
                Try Again ↺
              </button>
            </div>
          )}

          {gameWon && (
            <div style={{ padding: '1.5rem', background: 'rgba(100, 15, 25, 0.6)', borderRadius: '14px', border: '1px solid #ff4d61', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div>
                <h3 style={{ color: '#ff8593', margin: '0 0 0.5rem 0' }}>🎉 YOU WON!</h3>
                <p style={{ fontSize: '13px', margin: 0, color: '#f5ebea' }}>
                  Secret Unlocked: You hold the absolute high score to my heart. I love you, Jo! 🤍
                </p>
              </div>
              <Link
                href="/us-0709"
                style={{
                  background: '#ff4d61',
                  border: '1px solid #fff',
                  color: '#fff',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  boxShadow: '0 5px 20px rgba(255, 77, 97, 0.6)',
                }}
              >
                UNSEAL NEXT CHAPTER 🤍 ➔
              </Link>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}
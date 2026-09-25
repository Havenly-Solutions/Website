'use client';

import { useEffect, useRef } from 'react';
import '@fontsource/archivo/900.css';

// Balanced Timeline Constants (in milliseconds)
const HOLD0_MS = 250;
const FILL_MS = 1800;
const HOLD1_MS = 350;
const SCALE_MS = 450;
const HOLD2_MS = 150;
const FADE_MS = 500;

const TEXT = ['Havenly', 'Solutions'];
const FONT = '"Archivo","Outfit Variable","Outfit","Arial Black","Helvetica Neue",Arial,sans-serif';

// Red signal color for liquid fill (#e5383b -> gray #a6a6a6 on exit scale-up)
const RED_RGB = { r: 229, g: 56, b: 59 };
const GRAY_RGB = { r: 166, g: 166, b: 166 };

function mix(a: number, b: number, q: number): number {
  return Math.round(a + (b - a) * q);
}

export function GlobalLoader() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const K = reduce ? 0.25 : 1;

    const HOLD0 = HOLD0_MS * K;
    const FILL = FILL_MS * K;
    const HOLD1 = HOLD1_MS * K;
    const SCALE = SCALE_MS * K;
    const HOLD2 = HOLD2_MS * K;
    const FADE = FADE_MS * K;

    let raf = 0;
    let t0 = 0;

    let L = {
      vw: 0,
      vh: 0,
      fs: 0,
      cx: 0,
      cy: 0,
      baselines: [0, 0],
      top: 0,
      bot: 0,
      amp: 0,
      lastLineWidth: 0,
      wide: 0,
    };

    // Lock scrolling while loader is active & reset ready state
    document.body.style.overflow = 'hidden';
    document.body.classList.remove('ready');

    function layout() {
      if (!cv || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      cv.width = Math.round(vw * dpr);
      cv.height = Math.round(vh * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ctx.font = '900 100px ' + FONT;
      const measures = TEXT.map((line) => ctx.measureText(line));
      const wide = Math.max(...measures.map((m) => m.width));
      const targetWidth = vw < 700 ? vw * 0.8 : vw * 0.62;
      const fs = Math.min((100 * targetWidth) / wide, vh * 0.34);

      ctx.font = '900 ' + fs + 'px ' + FONT;
      const mText = TEXT.map((line) => ctx.measureText(line));
      const asc = Math.max(...mText.map((m) => m.actualBoundingBoxAscent || fs * 0.75));
      const desc = Math.max(...mText.map((m) => (m.actualBoundingBoxDescent !== undefined ? m.actualBoundingBoxDescent : fs * 0.2)));
      const pitch = fs * 0.9;
      const numLines = TEXT.length;
      const totalH = asc + pitch * (numLines - 1) + desc;
      const b1 = vh / 2 - totalH / 2 + asc;

      const baselines = TEXT.map((_, i) => b1 + i * pitch);
      const lastLineIndex = TEXT.length - 1;

      L = {
        vw,
        vh,
        fs,
        cx: vw / 2,
        cy: vh / 2,
        baselines,
        top: b1 - asc,
        bot: baselines[lastLineIndex] + desc,
        amp: asc * 0.17,
        lastLineWidth: mText[lastLineIndex].width,
        wide: Math.max(...mText.map((m) => m.width)),
      };
    }

    function drawLines(color: string) {
      if (!ctx) return;
      ctx.fillStyle = color;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      ctx.font = '900 ' + L.fs + 'px ' + FONT;
      TEXT.forEach((line, i) => {
        ctx.fillText(line, L.cx, L.baselines[i]);
      });
    }

    function finishLoader() {
      document.body.style.overflow = '';
      document.body.classList.add('ready');
      if (cv) cv.style.display = 'none';
    }

    function frame(now: number) {
      if (!ctx) return;
      const t = now - t0;
      ctx.fillStyle = '#141414';
      ctx.fillRect(0, 0, L.vw, L.vh);

      const tEnd = HOLD0 + FILL;
      const tS = tEnd + HOLD1;
      const tF = tS + SCALE + HOLD2;

      const p = t > HOLD0 ? Math.min((t - HOLD0) / FILL, 1) : 0;
      let e = 0;
      let s = 1;
      let r = RED_RGB.r;
      let g = RED_RGB.g;
      let b = RED_RGB.b;
      let wordmarkAlpha = 1;

      if (t > tS) {
        e = Math.min((t - tS) / SCALE, 1);
        const q = e === 1 ? 1 : 1 - Math.pow(2, -10 * e);
        s = 1 + 1.1 * q;
        r = mix(RED_RGB.r, GRAY_RGB.r, q);
        g = mix(RED_RGB.g, GRAY_RGB.g, q);
        b = mix(RED_RGB.b, GRAY_RGB.b, q);
        wordmarkAlpha = Math.max(0, 1 - e * 1.1); // Wordmark scales up and fades out into solid dark
      }

      const ca = t > tEnd ? Math.max(0, 1 - (t - tEnd - HOLD1 * 0.3) / (HOLD1 * 0.4)) : 1;

      ctx.save();
      if (s !== 1) {
        ctx.translate(L.cx, L.cy);
        ctx.scale(s, s);
        ctx.translate(-L.cx, -L.cy);
      }

      ctx.globalAlpha = wordmarkAlpha;
      if (e > 0) {
        drawLines('rgb(' + r + ',' + g + ',' + b + ')');
      } else {
        drawLines('#424242');
        if (p > 0) {
          const m = L.amp * 1.4;
          const x0 = L.cx - L.wide / 2 - L.fs * 0.3;
          const x1 = L.cx + L.wide / 2 + L.fs * 0.3;
          const yc = L.bot + m + (L.top - m - (L.bot + m)) * p;
          const lam = L.wide * 0.62;
          const ph = reduce ? 0 : t * 0.0026;
          const n = 72;

          ctx.beginPath();
          for (let i = 0; i <= n; i++) {
            const x = x0 + ((x1 - x0) * i) / n;
            const y =
              yc +
              L.amp *
                (Math.sin((x / lam) * 6.2832 + ph) +
                  0.35 * Math.sin((x / (lam * 0.47)) * 6.2832 + ph * 1.7 + 1.3));
            if (i) ctx.lineTo(x, y);
            else ctx.moveTo(x, y);
          }
          ctx.lineTo(x1, L.bot + L.fs);
          ctx.lineTo(x0, L.bot + L.fs);
          ctx.closePath();
          ctx.clip();
          drawLines('#e5383b'); // Brand red signal liquid fill
        }
      }
      ctx.restore();

      if (e === 0 && ca > 0) {
        ctx.globalAlpha = ca;
        ctx.fillStyle = '#fff';
        ctx.textAlign = 'right';
        ctx.font =
          '500 ' +
          Math.max(13, Math.round(L.vw * 0.0085)) +
          'px Inter,"Inter Variable",system-ui,sans-serif';
        const lastBaseline = L.baselines[L.baselines.length - 1];
        ctx.fillText(
          'loading...  ' + Math.floor(p * 100) + ' %',
          L.cx + L.lastLineWidth / 2,
          lastBaseline + Math.max(22, L.fs * 0.2)
        );
        ctx.globalAlpha = 1;
      }

      if (t > tF) {
        document.body.classList.add('ready');
        if (cv) {
          cv.style.opacity = String(Math.max(0, 1 - (t - tF) / FADE));
        }
      }

      if (t > tF + FADE) {
        finishLoader();
        return;
      }

      raf = requestAnimationFrame(frame);
    }

    function start() {
      cancelAnimationFrame(raf);
      document.body.classList.remove('ready');
      if (cv) {
        cv.style.display = 'block';
        cv.style.opacity = '1';
      }
      layout();
      t0 = performance.now();
      raf = requestAnimationFrame(frame);
    }

    window.addEventListener('resize', layout);

    const wait =
      typeof document !== 'undefined' && document.fonts && document.fonts.load
        ? Promise.race([
            Promise.all([
              document.fonts.load('900 100px Archivo'),
              document.fonts.load('500 14px Inter'),
            ]),
            new Promise((r) => setTimeout(r, 2000)),
          ])
        : Promise.resolve();

    wait.then(start, start);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', layout);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <noscript>
        <style>{`#global-loader-canvas { display: none !important; }`}</style>
      </noscript>
      <canvas
        ref={canvasRef}
        id="global-loader-canvas"
        role="img"
        aria-label="Havenly Solutions loading"
        style={{
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 999999,
          background: '#141414',
          pointerEvents: 'auto',
          touchAction: 'none',
          transition: 'opacity 0.1s linear',
        }}
      />
    </>
  );
}

export default GlobalLoader;

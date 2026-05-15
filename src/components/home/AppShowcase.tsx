'use client'

import { useState, type ReactNode } from 'react'
import { Bell, FileText, Home, Map, Phone, User } from 'lucide-react'
import { HavenlySolutionsApp } from '@/components/HavenlyMobileDemo'

const APP_BG = '#0D1B2A' // extracted from Havenly mobile dark screen motifs
const APP_RED = '#C0392B' // exact Havenly danger/red tone
const APP_CARD_BG = '#1A1A2E' // dark card surface from Havenly screens
const APP_FONT = 'DM Sans, Space Grotesk, sans-serif' // exact mobile app fonts
const APP_TAB_BG = '#111111' // dark tab surface for phone footer
const BORDER_COLOR = '#DDE3EE' // exact border tone seen in evidence cards
const TEXT_WHITE = '#FFFFFF'
const TEXT_MUTED = 'rgba(255,255,255,0.55)'
const TEXT_SUBTLE = 'rgba(255,255,255,0.35)'

type DeviceType = 'iphone' | 'android' | 'nokia'

const DEVICE_TYPES: Array<{
  value: DeviceType
  label: string
  icon: React.ReactNode
}> = [
  { value: 'iphone', label: 'iPhone', icon: <Phone size={14} /> },
  { value: 'android', label: 'Android', icon: <Phone size={14} /> },
  { value: 'nokia', label: 'USSD Phone', icon: <Phone size={14} /> },
]

const PHONE_SPECS = {
  iphone: { width: 260, screenHeight: 560, shellHeight: 580 },
  android: { width: 250, screenHeight: 540, shellHeight: 560 },
  nokia: { width: 190, screenHeight: 280, shellHeight: 440 },
} as const

// ============ Icon & Helper Components ============

function AppleIcon() {
  return (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="white" aria-hidden="true">
      <path d="M14.5 11.5c0-2.5 2-3.7 2.1-3.8-1.1-1.6-2.9-1.8-3.5-1.9-1.5-.1-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1.9-4 2.4-1.7 2.9-.4 7.2 1.2 9.5.8 1.2 1.8 2.5 3 2.4 1.2-.1 1.7-.8 3.1-.8 1.5 0 1.9.8 3.2.7 1.3 0 2.1-1.2 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.4-.9-2.4-3.6z" />
      <path d="M12.2 3.8c.7-.8 1.1-2 1-3.1-1 0-2.1.7-2.8 1.5-.6.7-1.1 1.8-1 2.9 1.1.1 2.1-.6 2.8-1.3z" />
    </svg>
  )
}

function GooglePlayIcon() {
  return (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" aria-hidden="true">
      <path d="M1 1L17 10L1 19V1Z" fill="white" opacity="0.9" />
      <path d="M1 1L9 9L1 1Z" fill="rgba(255,255,255,0.3)" />
    </svg>
  )
}

function AppGalleryIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
      <ellipse cx="10" cy="5" rx="3.5" ry="5" fill="white" opacity="0.9" />
      <ellipse cx="10" cy="15" rx="3.5" ry="5" fill="white" opacity="0.7" />
      <ellipse cx="5" cy="10" rx="5" ry="3.5" fill="white" opacity="0.8" />
      <ellipse cx="15" cy="10" rx="5" ry="3.5" fill="white" opacity="0.6" />
      <circle cx="10" cy="10" r="3" fill={APP_RED} />
    </svg>
  )
}

function SmartphoneShell({
  device,
  accent,
  children,
}: {
  device: 'iphone' | 'android'
  accent?: boolean
  children: ReactNode
}) {
  const spec = PHONE_SPECS[device]
  const isIphone = device === 'iphone'

  return (
    <div
      className={`phone-shell ${device}-shell ${accent ? 'phone-highlight' : ''}`}
      style={{ width: `${spec.width}px`, height: `${spec.shellHeight}px` }}
    >
      {/* Real-world frame details */}
      <div className="phone-frame-outer">
        <div className="phone-frame-inner" />
      </div>

      {/* Side buttons */}
      <div className="btn-silent" />
      <div className="btn-vol-up" />
      <div className="btn-vol-down" />
      <div className="btn-power" />

      <div className="phone-bezel">
        {isIphone ? (
          <div className="iphone-notch">
            <div className="camera-lens" />
            <div className="speaker-grill" />
          </div>
        ) : (
          <div className="android-waterdrop">
             <div className="camera-lens" />
          </div>
        )}

        <div className="screen-glass">
          <div className="glass-reflection" />
          <div className="screen-viewport" style={{ height: '100%' }}>
            <div className="screen-pane" style={{ width: '100%', height: '100%' }}>
              {children}
            </div>
          </div>
        </div>
      </div>

      {isIphone ? <div className="home-indicator" /> : <div className="android-nav-pill" />}
    </div>
  )
}

function NokiaPhoneShell({ active }: { active?: boolean }) {
  const spec = PHONE_SPECS.nokia

  return (
    <div
      className={`nokia-shell ${active ? 'nokia-active' : ''}`}
      style={{ width: `${spec.width}px`, height: `${spec.shellHeight}px` }}
    >
      <div className="nokia-body-accent" />
      <div className="nokia-top-grill" />
      <div className="nokia-screen-frame">
        <div className="nokia-screen color-lcd">
          <div className="nokia-screen-glare" />
          <div className="nokia-screen-inner">
            <div className="ussd-header">HAVENLY SAFETY</div>
            <div className="ussd-divider" />
            <div className="ussd-list">
              <div className="ussd-line">1. Send SOS</div>
              <div className="ussd-line">2. My Contacts</div>
              <div className="ussd-line">3. Zone Status</div>
              <div className="ussd-line">4. NGO Help</div>
              <div className="ussd-line">5. Load Shedding</div>
            </div>
            <div className="ussd-divider" />
            <div className="ussd-footer">Reply: <span className="ussd-cursor">_</span></div>
          </div>
        </div>
        <div className="nokia-brand">NOKIA</div>
      </div>

      <div className="nokia-controls">
        <div className="nokia-nav-center">
           <div className="nokia-nav-inner" />
        </div>
        <div className="nokia-nav-ring square" />
        <div className="nokia-action-btns flat">
          <div className="nokia-btn-line" />
          <div className="nokia-btn-line" />
        </div>
      </div>

      <div className="nokia-keypad modern-grid">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map((label) => (
          <div key={label} className="nokia-key flat-key">
            <span className="key-label">{label}</span>
            <span className="key-subtext">
              {label === '2' ? 'ABC' : label === '3' ? 'DEF' : label === '4' ? 'GHI' : label === '5' ? 'JKL' : label === '6' ? 'MNO' : label === '7' ? 'PQRS' : label === '8' ? 'TUV' : label === '9' ? 'WXYZ' : ''}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function StoreBadge({
  topText,
  mainText,
  icon,
  href,
  highlight,
}: {
  topText: string
  mainText: string
  icon: React.ReactNode
  href: string
  highlight?: boolean
}) {
  return (
    <a
      href={href}
      className={`badge-card ${highlight ? 'badge-card-highlight' : ''}`}
    >
      <div className="badge-icon">{icon}</div>
      <div>
        <div className="badge-small">{topText}</div>
        <div className="badge-large">{mainText}</div>
      </div>
    </a>
  )
}

// ============ Main Component ============

export default function AppShowcase() {
  const [activeDevice, setActiveDevice] = useState<DeviceType>('iphone')

  return (
    <section className="app-showcase-section">
      <div className="app-showcase-inner">
        <div className="showcase-left">
          <span className="showcase-eyebrow">AVAILABLE ON ALL DEVICES</span>
          <h2 className="showcase-heading">
            Safety in<br />your hands.<br />Anywhere.
          </h2>
          <p className="showcase-body">
            From flagship smartphones to feature phones with zero data — Havenly works
            on every device South Africans own. No one gets left behind when every second
            counts.
          </p>

          <div className="badge-grid">
            <StoreBadge
              topText="Download on the"
              mainText="App Store"
              icon={<AppleIcon />}
              href="#"
            />
            <StoreBadge
              topText="Get it on"
              mainText="Google Play"
              icon={<GooglePlayIcon />}
              href="#"
            />
            <StoreBadge
              topText="Explore on"
              mainText="AppGallery"
              icon={<AppGalleryIcon />}
              href="#"
            />
            <StoreBadge
              topText="No data? Dial"
              mainText="*120*••••#"
              icon={<Phone size={18} color={APP_RED} />}
              href="tel:*120*0000%23"
              highlight
            />
          </div>

          <p className="ussd-note">Your PIN is created during registration.</p>

          <div className="device-tabs">
            {DEVICE_TYPES.map((device) => (
              <button
                key={device.value}
                type="button"
                className={
                  activeDevice === device.value
                    ? 'device-tab device-tab-active'
                    : 'device-tab'
                }
                onClick={() => setActiveDevice(device.value)}
              >
                <span className="device-icon">{device.icon}</span>
                {device.label}
              </button>
            ))}
          </div>
        </div>

        <div className="showcase-right">
          <div className="phones-container">
            {/* Nokia (Back Left) */}
            <div className="phone-wrapper nokia-wrapper">
              <NokiaPhoneShell active={activeDevice === 'nokia'} />
            </div>

            {/* Android (Center) */}
            <div className="phone-wrapper android-wrapper">
              <SmartphoneShell device="android" accent={activeDevice === 'android'}>
                <HomeScreen activeDevice="android" />
              </SmartphoneShell>
            </div>

            {/* iPhone (Front Right) */}
            <div className="phone-wrapper iphone-wrapper">
              <SmartphoneShell device="iphone" accent={activeDevice === 'iphone'}>
                <HavenlySolutionsApp />
              </SmartphoneShell>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .app-showcase-section {
          background: linear-gradient(180deg, #f8fbff 0%, #ffffff 100%);
          padding: 120px 0 160px;
          overflow: hidden;
          position: relative;
        }

        .app-showcase-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 44fr 56fr;
          gap: 60px;
          align-items: center;
        }

        .showcase-eyebrow {
          display: block;
          font-family: ${APP_FONT};
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #0f3b72;
          margin-bottom: 20px;
        }

        .showcase-heading {
          font-family: ${APP_FONT};
          font-size: 52px;
          font-weight: 800;
          color: #102a4d;
          line-height: 1.05;
          margin: 0 0 28px;
        }

        .showcase-body {
          font-family: ${APP_FONT};
          font-size: 16px;
          color: rgba(15, 23, 42, 0.8);
          line-height: 1.8;
          max-width: 480px;
          margin: 0 0 36px;
        }

        .badge-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          max-width: 440px;
        }

        .ussd-note {
          margin-top: 16px;
          font-family: ${APP_FONT};
          font-size: 11px;
          color: rgba(15, 23, 42, 0.55);
          max-width: 440px;
        }

        .device-tabs {
          margin-top: 24px;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }

        .device-tab {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 999px;
          background: #f3f6fb;
          border: 1px solid rgba(15, 23, 42, 0.08);
          color: rgba(15, 23, 42, 0.8);
          font-family: ${APP_FONT};
          font-size: 13px;
          cursor: pointer;
          transition: all 200ms ease;
        }

        .device-tab-active {
          background: #0f3b72;
          color: ${TEXT_WHITE};
          border-color: rgba(15, 23, 42, 0.15);
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.12);
        }

        .device-icon {
          display: inline-flex;
          color: currentColor;
        }

        .showcase-right {
          position: relative;
          min-height: 720px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .phones-container {
          position: relative;
          width: 100%;
          height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .phone-wrapper {
          position: absolute;
          left: 50%;
          top: 50%;
          transition: all 800ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .nokia-wrapper {
          margin-left: -340px;
          margin-top: -120px;
          z-index: 1;
          transform: scale(0.9);
          filter: drop-shadow(15px 25px 35px rgba(0,0,0,0.15));
        }

        .android-wrapper {
          margin-left: -140px;
          margin-top: -300px;
          z-index: 2;
          transform: scale(0.95);
          filter: drop-shadow(0 30px 50px rgba(0,0,0,0.2));
        }

        .iphone-wrapper {
          margin-left: 40px;
          margin-top: -200px;
          z-index: 3;
          transform: scale(1);
          filter: drop-shadow(-30px 40px 70px rgba(0,0,0,0.3));
        }

        @keyframes nokia-intro {
          from { opacity: 0; transform: rotateY(-20deg) rotateX(10deg) translateZ(-100px) scale(0.9); }
          to { opacity: 1; transform: rotateY(-20deg) rotateX(10deg) translateZ(50px) scale(1); }
        }

        /* Smartphone Realistic Styles */
        .phone-shell {
          position: relative;
          border-radius: 54px;
          padding: 8px;
          background: #111;
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.05),
            inset 0 0 0 1px rgba(255,255,255,0.05);
        }

        .phone-frame-outer {
          position: absolute;
          inset: -1.5px;
          border-radius: 55px;
          background: linear-gradient(135deg, #333 0%, #000 100%);
          padding: 1.5px;
        }

        .iphone-shell .phone-frame-outer {
          background: linear-gradient(135deg, #444 0%, #1a1a1a 100%);
        }

        .phone-frame-inner {
          width: 100%;
          height: 100%;
          border-radius: 54px;
          background: #000;
          box-shadow: inset 0 0 15px rgba(255,255,255,0.05);
        }

        .phone-bezel {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 48px;
          overflow: hidden;
          background: #000;
          border: 11px solid #000;
        }

        .iphone-notch {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 140px;
          height: 28px;
          background: #000;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .speaker-grill {
          width: 40px;
          height: 3px;
          background: #111;
          border-radius: 2px;
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
        }

        .android-waterdrop {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 24px;
          background: #000;
          clip-path: ellipse(50% 100% at 50% 0%);
          z-index: 100;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 4px;
        }

        .camera-lens {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #1a1a2e, #000);
          box-shadow: inset 0 0 2px rgba(255,255,255,0.3);
        }

        .screen-glass {
          position: relative;
          width: 100%;
          height: 100%;
          background: #000;
          overflow: hidden;
          border-radius: 38px;
        }

        .glass-reflection {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%);
          pointer-events: none;
          z-index: 10;
        }

        /* Side buttons */
        .btn-silent, .btn-vol-up, .btn-vol-down, .btn-power {
          position: absolute;
          background: linear-gradient(to bottom, #444, #222);
          border-radius: 2.5px;
          z-index: -1;
          border: 1px solid rgba(0,0,0,0.5);
          box-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }

        .btn-silent { left: -3.5px; top: 100px; width: 3.5px; height: 26px; }
        .btn-vol-up { left: -3.5px; top: 144px; width: 3.5px; height: 48px; }
        .btn-vol-down { left: -3.5px; top: 202px; width: 3.5px; height: 48px; }
        .btn-power { right: -3.5px; top: 170px; width: 3.5px; height: 75px; }

        /* Modern Nokia Realistic Styles */
        .nokia-shell {
          background: #1a1a1a;
          border-radius: 12px;
          padding: 16px 12px;
          box-shadow:
            0 20px 50px rgba(0,0,0,0.4),
            inset 0 1px 2px rgba(255,255,255,0.1);
          border: 1px solid #333;
          transform-style: preserve-3d;
        }

        .nokia-screen-frame {
          background: #000;
          padding: 12px;
          border-radius: 4px;
          margin-bottom: 12px;
        }

        .nokia-brand {
          text-align: center;
          color: #fff;
          font-family: ${APP_FONT};
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          margin-top: 8px;
          opacity: 0.8;
        }

        .color-lcd {
          background: linear-gradient(180deg, #1a2a4d 0%, #0d1b2a 100%);
          aspect-ratio: 0.8;
          border-radius: 2px;
          box-shadow: inset 0 0 10px rgba(0,0,0,0.5);
        }

        .nokia-nav-center {
          width: 36px;
          height: 28px;
          background: linear-gradient(145deg, #333, #111);
          border-radius: 4px;
          z-index: 3;
          border: 1px solid #444;
        }

        .nokia-nav-ring.square {
          width: 64px;
          height: 64px;
          border: 2px solid #3a3a3a;
          border-radius: 8px;
          position: absolute;
        }

        .nokia-action-btns.flat {
          padding: 0 10px;
        }

        .nokia-btn-line {
          width: 32px;
          height: 2px;
          background: #444;
          border-radius: 1px;
        }

        .modern-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }

        .flat-key {
          background: #222;
          height: 40px;
          border-radius: 6px;
          border: 1px solid #333;
          box-shadow: 0 2px 0 #000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .flat-key .key-label { font-size: 16px; font-weight: 700; color: #fff; }
        .flat-key .key-subtext { font-size: 6px; color: #888; }

        .home-indicator {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 5px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 999px;
          z-index: 20;
        }

        .android-nav-pill {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 90px;
          height: 4px;
          background: rgba(255, 255, 255, 0.12);
          border-radius: 999px;
          z-index: 20;
        }

        .badge-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 18px;
          background: #0f172a;
          border: 1px solid rgba(15, 23, 42, 0.2);
          border-radius: 20px;
          text-decoration: none;
          transition: all 200ms ease;
        }

        .badge-card:hover {
          background: #1e293b;
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }

        .badge-card-highlight {
          border-color: rgba(192, 57, 43, 0.3);
          border-left: 5px solid ${APP_RED};
        }

        .badge-icon {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }

        .badge-small {
          font-family: ${APP_FONT};
          font-size: 10px;
          color: rgba(255, 255, 255, 0.45);
          letter-spacing: 0.04em;
        }

        .badge-large {
          font-family: ${APP_FONT};
          font-size: 16px;
          font-weight: 700;
          color: ${TEXT_WHITE};
          line-height: 1.2;
        }

        .splash-button,
        .alert-button-filled,
        .alert-button-ghost {
          width: 100%;
          border: none;
          border-radius: 999px;
          font-family: ${APP_FONT};
          cursor: pointer;
          transition: transform 180ms ease, background 180ms ease;
        }

        .splash-button {
          padding: 16px 18px;
          background: ${TEXT_WHITE};
          color: ${APP_RED};
          font-weight: 700;
          font-size: 14px;
        }

        .splash-secondary {
          width: 100%;
          padding: 14px 18px;
          background: transparent;
          color: ${TEXT_WHITE};
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: 999px;
          font-family: ${APP_FONT};
          font-size: 14px;
          margin-top: 10px;
          cursor: pointer;
        }

        .splash-secondary:hover,
        .splash-button:hover,
        .alert-button-filled:hover,
        .alert-button-ghost:hover {
          transform: translateY(-1px);
        }

        .alert-button-filled {
          height: 44px;
          background: ${APP_RED};
          color: ${TEXT_WHITE};
          font-size: 13px;
          font-weight: 700;
        }

        .alert-button-ghost {
          height: 44px;
          background: transparent;
          color: rgba(255, 255, 255, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.18);
          font-size: 13px;
          font-weight: 700;
        }

        .pulse-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: rgba(204, 41, 54, 0.15);
          animation: pulse-ring 1.8s ease-out infinite;
        }

        .pulse-ring-delay {
          animation-delay: 0.6s;
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes alert-pulse {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .ussd-strip {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 20px 24px;
          background: #111111;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          margin-top: 24px;
          max-width: 520px;
          margin-left: auto;
          margin-right: auto;
        }

        .ussd-strip.full-width {
          max-width: none;
          width: 100%;
        }

        .ussd-screen {
          flex-shrink: 0;
          width: 180px;
          height: 120px;
          background: #0A1A0A;
          border: 1px solid rgba(0, 255, 0, 0.15);
          border-radius: 6px;
          padding: 10px 12px;
          overflow: hidden;
          position: relative;
        }

        .ussd-text {
          margin: 0;
          font-family: 'Courier New', 'Lucida Console', monospace;
          font-size: 10px;
          line-height: 1.7;
          color: #5fff5f;
          white-space: pre;
        }

        .ussd-cursor {
          animation: blink-cursor 1s step-end infinite;
          color: #5fff5f;
        }

        .ussd-info {
          display: grid;
          gap: 8px;
          color: rgba(255, 255, 255, 0.85);
        }

        .ussd-tag {
          display: block;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: ${APP_RED};
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .ussd-heading {
          font-size: 15px;
          font-weight: 600;
          color: ${TEXT_WHITE};
          margin: 0 0 6px 0;
        }

        .ussd-body {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.55);
          line-height: 1.6;
          margin: 0 0 4px 0;
        }

        .ussd-body code {
          font-family: 'Courier New', monospace;
          color: ${APP_RED};
          background: rgba(204, 41, 54, 0.1);
          padding: 1px 4px;
          border-radius: 3px;
        }

        .ussd-hint {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.3);
          margin: 0;
        }

        @media (max-width: 1024px) {
          .app-showcase-inner { grid-template-columns: 1fr; text-align: center; }
          .showcase-body, .badge-grid, .device-tabs, .ussd-note { margin-left: auto; margin-right: auto; }
          .device-tabs { justify-content: center; }
          .nokia-wrapper { margin-left: -260px; transform: scale(0.75); }
          .android-wrapper { margin-left: -100px; transform: scale(0.8); }
          .iphone-wrapper { margin-left: 40px; transform: scale(0.85); }
        }

        @media (max-width: 767px) {
          .showcase-heading { font-size: 38px; }
          .phones-container { height: 440px; }
          .nokia-wrapper { display: none; }
          .android-wrapper { margin-left: -140px; transform: scale(0.65); }
          .iphone-wrapper { margin-left: 0px; transform: scale(0.7); }
        }
      `}</style>
    </section>
  )
}

function StatusBar({ light = true }: { light?: boolean }) {
  const time = '9:41'
  const color = light ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.8)'

  return (
    <div
      style={{
        height: 44,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 18px',
        paddingTop: 12,
      }}
    >
      <span
        style={{
          fontSize: 13,
          fontWeight: 600,
          color,
          letterSpacing: '-0.03em',
          fontFamily: APP_FONT,
        }}
      >
        {time}
      </span>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        <svg width="16" height="12" viewBox="0 0 16 12">
          <rect x="0" y="8" width="3" height="4" rx="0.5" fill={color} />
          <rect x="4.5" y="5" width="3" height="7" rx="0.5" fill={color} />
          <rect x="9" y="2" width="3" height="10" rx="0.5" fill={color} />
          <rect x="13.5" y="0" width="2.5" height="12" rx="0.5" fill={color} opacity="0.35" />
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12">
          <path d="M8 10 L8 10" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <path d="M5.5 7.5 Q8 5.5 10.5 7.5" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M3 5 Q8 1 13 5" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
        <svg width="26" height="12" viewBox="0 0 26 12">
          <rect x="0" y="1" width="22" height="10" rx="2.5" stroke={color} strokeWidth="1" fill="none" opacity="0.7" />
          <rect x="22.5" y="4" width="2" height="4" rx="1" fill={color} opacity="0.5" />
          <rect x="1.5" y="2.5" width="16" height="7" rx="1.5" fill={color} opacity="0.9" />
        </svg>
      </div>
    </div>
  )
}

function AppTabBar({ active }: { active: number }) {
  const tabs = [
    { icon: Home, label: 'Home' },
    { icon: Bell, label: 'Alerts' },
    { icon: Map, label: 'Map' },
    { icon: FileText, label: 'Evidence' },
    { icon: User, label: 'Profile' },
  ]

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 72,
        background: APP_TAB_BG,
        borderTop: `1px solid ${BORDER_COLOR}`,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        paddingTop: 8,
      }}
    >
      {tabs.map((tab, index) => {
        const Icon = tab.icon
        const isActive = index === active
        const color = isActive ? APP_RED : 'rgba(255,255,255,0.4)'

        return (
          <div
            key={tab.label}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}
          >
            <Icon size={20} color={color} />
            <span style={{ fontSize: 9, color, letterSpacing: '0.04em', fontFamily: APP_FONT }}>
              {tab.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}

function SplashScreen({ device }: { device: 'iphone' | 'android' | 'honor' }) {
  return (
    <div className="screen-pane" style={{ background: 'linear-gradient(180deg, #0C1116 0%, #0A0A0A 100%)' }}>
      <StatusBar />
      <div style={{ padding: '24px 20px 92px 20px', height: 'calc(100% - 44px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontFamily: APP_FONT, fontSize: '11px', color: APP_RED, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '16px' }}>
            Havenly Solutions
          </div>
          <div style={{ fontFamily: APP_FONT, fontSize: '28px', fontWeight: 800, color: TEXT_WHITE, lineHeight: 1.05, marginBottom: '12px' }}>
            Safety in your hands.
          </div>
          <div style={{ fontFamily: APP_FONT, fontSize: '13px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: '260px' }}>
            Community-powered emergency response.
          </div>
        </div>

        <div>
          {device === 'honor' ? (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 12px', background: 'rgba(255,255,255,0.08)', borderRadius: 999, marginBottom: 18 }}>
              <AppGalleryIcon />
              <span style={{ color: TEXT_WHITE, fontSize: 11, fontFamily: APP_FONT }}>Available on AppGallery</span>
            </div>
          ) : null}

          <div style={{ display: 'grid', gap: '12px' }}>
            <button className="splash-button">Get Started Free</button>
            <button className="splash-secondary">Sign in</button>
          </div>

          <p style={{ marginTop: '18px', fontSize: '10px', color: 'rgba(255,255,255,0.4)', fontFamily: APP_FONT, lineHeight: 1.4 }}>
            By continuing you agree to our Terms & POPIA Policy
          </p>
        </div>
      </div>
      <AppTabBar active={0} />
    </div>
  )
}

function HomeScreen({ activeDevice }: { activeDevice: 'iphone' | 'android' | 'honor' }) {
  return (
    <div className="screen-pane" style={{ background: APP_BG, position: 'relative' }}>
      <StatusBar />
      <div style={{ padding: '20px', paddingBottom: '92px', height: 'calc(100% - 44px)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22 }}>
          <div>
            <div style={{ fontFamily: APP_FONT, fontSize: '12px', color: 'rgba(255,255,255,0.55)', marginBottom: 6 }}>
              Good morning
            </div>
            <div style={{ fontFamily: APP_FONT, fontSize: '20px', fontWeight: 700, color: TEXT_WHITE }}>
              Thandi
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ position: 'relative' }}>
              <Bell size={18} color={TEXT_WHITE} />
              <span style={{ position: 'absolute', top: 0, right: 0, width: 8, height: 8, borderRadius: 999, background: APP_RED, border: '1px solid #111' }} />
            </div>
            <div style={{ width: 32, height: 32, borderRadius: 999, background: '#121B2B', display: 'grid', placeItems: 'center', color: TEXT_WHITE, fontSize: 13, fontFamily: APP_FONT }}>
              T
            </div>
          </div>
        </div>

        <div style={{ background: '#121A29', borderRadius: 24, padding: '18px 16px 18px 18px', marginBottom: 20, border: `1px solid rgba(255,255,255,0.08)` }}>
          <div style={{ fontFamily: APP_FONT, fontSize: '9px', letterSpacing: '0.18em', color: APP_RED, textTransform: 'uppercase', marginBottom: 10 }}>
            MY ZONE
          </div>
          <div style={{ fontFamily: APP_FONT, fontSize: '16px', fontWeight: 700, color: TEXT_WHITE, marginBottom: 8 }}>
            Zone 4 — Soweto
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: APP_FONT, fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: '#29A46E', display: 'inline-block' }} />
            Active · 14 responders nearby
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 10, marginBottom: 24 }}>
          {[
            { label: 'SOS', active: true },
            { label: 'Contacts', active: false },
            { label: 'Evidence', active: false },
            { label: 'Report', active: false },
          ].map((action) => (
            <div key={action.label} style={{ background: '#121A29', borderRadius: 18, padding: '14px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 36, height: 36, borderRadius: 14, background: action.active ? APP_RED : 'rgba(255,255,255,0.08)', display: 'grid', placeItems: 'center', color: action.active ? TEXT_WHITE : 'rgba(255,255,255,0.7)', fontSize: 14 }}>
                {action.label === 'SOS' ? '!' : action.label[0]}
              </span>
              <span style={{ fontFamily: APP_FONT, fontSize: 9, textAlign: 'center', color: action.active ? TEXT_WHITE : 'rgba(255,255,255,0.55)' }}>
                {action.label}
              </span>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: 12 }}>
          <div style={{ fontFamily: APP_FONT, fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 10 }}>
            Recent Activity
          </div>
          <div style={{ display: 'grid', gap: 10 }}>
            {[
              { label: 'Zone 4 Alert resolved', time: '2h ago' },
              { label: 'Thabo added as contact', time: '1d ago' },
              { label: 'New guardian joined your zone', time: '1d ago' },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: 48, padding: '0 12px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 12, background: 'rgba(255,255,255,0.08)', display: 'grid', placeItems: 'center', color: APP_RED, fontSize: 14 }}>
                    •
                  </div>
                  <div>
                    <div style={{ fontFamily: APP_FONT, fontSize: 13, color: TEXT_WHITE }}>{item.label}</div>
                    <div style={{ fontFamily: APP_FONT, fontSize: 11, color: 'rgba(255,255,255,0.45)' }}>{item.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AppTabBar active={0} />
    </div>
  )
}

function SOSScreen() {
  return (
    <div className="screen-pane" style={{ background: APP_BG, position: 'relative' }}>
      <StatusBar />
      <div style={{ padding: '20px', paddingBottom: '92px', height: 'calc(100% - 44px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ fontFamily: APP_FONT, fontSize: '12px', color: APP_RED, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 18 }}>
          Emergency protocol
        </div>

        <div style={{ position: 'relative', width: 180, height: 180, marginBottom: 24 }}>
          <div className="pulse-ring pulse-ring-delay" />
          <div className="pulse-ring" />
          <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: APP_RED, boxShadow: `0 0 0 4px rgba(192, 57, 43, 0.3), 0 16px 40px rgba(192, 57, 43, 0.35)`, display: 'grid', placeItems: 'center' }}>
            <span style={{ fontFamily: APP_FONT, fontSize: 36, fontWeight: 800, color: TEXT_WHITE, letterSpacing: '0.05em' }}>SOS</span>
          </div>
        </div>

        <div style={{ fontFamily: APP_FONT, fontSize: 13, color: 'rgba(255,255,255,0.45)', textAlign: 'center', marginBottom: 18 }}>
          Hold 2 seconds to activate
        </div>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
          {['📍 GPS Active', '🔒 Encrypted', '📡 Mesh Ready'].map((pill) => (
            <div key={pill} style={{ fontFamily: APP_FONT, fontSize: 10, color: 'rgba(255,255,255,0.35)' }}>{pill}</div>
          ))}
        </div>
      </div>
      <AppTabBar active={1} />
    </div>
  )
}

function AlertScreen() {
  return (
    <div className="screen-pane" style={{ background: APP_BG, position: 'relative' }}>
      <StatusBar />
      <div style={{ padding: '20px', paddingBottom: '92px', height: 'calc(100% - 44px)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56, background: APP_RED, borderRadius: 18, padding: '0 18px', color: TEXT_WHITE, fontFamily: APP_FONT }}>
          <span style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700 }}>Active Alert</span>
          <span style={{ fontSize: 12, fontFamily: 'monospace' }}>00:02:47</span>
        </div>

        <div style={{ marginTop: 18, background: '#121A29', borderRadius: 24, padding: 18, border: `1px solid rgba(255,255,255,0.08)` }}>
          <div style={{ fontFamily: APP_FONT, fontSize: 9, color: APP_RED, textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 10 }}>SOS ACTIVATED</div>
          <div style={{ fontFamily: APP_FONT, fontSize: 16, fontWeight: 700, color: TEXT_WHITE, marginBottom: 6 }}>Thandi M. · Zone 4</div>
          <div style={{ fontFamily: APP_FONT, fontSize: 12, color: 'rgba(255,255,255,0.55)', marginBottom: 14 }}>2 minutes ago</div>
          <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', margin: '14px 0' }} />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, fontFamily: APP_FONT, fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 8, height: 8, borderRadius: 999, background: '#29A46E', display: 'inline-block' }} />SAPS Notified</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 8, height: 8, borderRadius: 999, background: '#E79A2A', display: 'inline-block' }} />3 Responders En Route</span>
          </div>
        </div>

        <div style={{ marginTop: 18, background: '#0D1117', borderRadius: 18, padding: 16, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundSize: '20px 20px', backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)' }} />
          <div style={{ position: 'relative', minHeight: 140, display: 'grid', placeItems: 'center' }}>
            <div style={{ position: 'relative', width: 10, height: 10, borderRadius: 999, background: APP_RED, zIndex: 1 }} />
            <div style={{ position: 'absolute', width: 40, height: 40, borderRadius: 999, background: 'rgba(192,57,43,0.18)', animation: 'alert-pulse 1.6s ease-out infinite', zIndex: 0 }} />
            <div style={{ position: 'absolute', width: 70, height: 70, borderRadius: 999, background: 'rgba(192,57,43,0.12)', animation: 'alert-pulse 1.6s ease-out infinite 0.3s', zIndex: 0 }} />
          </div>
          <div style={{ position: 'relative', textAlign: 'center', marginTop: 10, fontSize: 9, color: 'rgba(255,255,255,0.4)', fontFamily: APP_FONT }}>Live GPS</div>
        </div>

        <div style={{ marginTop: 18, display: 'grid', gap: 10 }}>
          <button className="alert-button-filled">I Can Respond</button>
          <button className="alert-button-ghost">Share Location</button>
        </div>
      </div>
      <AppTabBar active={1} />
    </div>
  )
}

function EvidenceScreen() {
  return (
    <div className="screen-pane" style={{ background: APP_BG, position: 'relative' }}>
      <StatusBar />
      <div style={{ padding: '20px', paddingBottom: '92px', height: 'calc(100% - 44px)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontFamily: APP_FONT, fontSize: 18, fontWeight: 700, color: TEXT_WHITE }}>Evidence Vault</div>
          <div style={{ fontFamily: APP_FONT, fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 4 }}>3 sealed packages</div>
        </div>

        <div style={{ display: 'grid', gap: 12, marginBottom: 12 }}>
          {[
            {
              title: 'SOS Event',
              subtitle: '14 May 2026 · GPS + Audio · Chain of custody',
              status: 'SEALED',
              statusColor: APP_RED,
              statusBg: 'rgba(192,57,43,0.12)',
            },
            {
              title: 'SOS Event',
              subtitle: '09 May 2026 · GPS + Audio · SAPS reference #10374',
              status: 'SUBMITTED',
              statusColor: '#27AE60',
              statusBg: 'rgba(39,174,96,0.12)',
            },
          ].map((card) => (
            <div key={card.subtitle} style={{ background: APP_CARD_BG, borderRadius: 18, border: `1px solid ${BORDER_COLOR}`, padding: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{ width: 34, height: 34, borderRadius: 12, background: 'rgba(255,255,255,0.08)', display: 'grid', placeItems: 'center', color: APP_RED }}>
                  <FileText size={18} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: APP_FONT, fontSize: 14, fontWeight: 500, color: TEXT_WHITE }}>{card.title}</div>
                  <div style={{ fontFamily: APP_FONT, fontSize: 10, color: 'rgba(255,255,255,0.45)', marginTop: 4 }}>{card.subtitle}</div>
                </div>
                <div style={{ padding: '4px 8px', borderRadius: 999, background: card.statusBg, color: card.statusColor, fontFamily: APP_FONT, fontSize: 9, fontWeight: 700, textTransform: 'uppercase' }}>
                  {card.status}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontFamily: APP_FONT, fontSize: 10, color: 'rgba(255,255,255,0.3)', textAlign: 'center', marginTop: 12 }}>
          All packages are ECTA-compliant and court-admissible.
        </p>
      </div>
      <AppTabBar active={3} />
    </div>
  )
}

function NokiaUSSDCard({ fullWidth }: { fullWidth: boolean }) {
  return (
    <div className={fullWidth ? 'ussd-strip full-width' : 'ussd-strip'}>
      <div className="ussd-screen">
        <pre className="ussd-text">
HAVENLY SAFETY
──────────────
1. Send SOS
2. My Contacts
3. Zone Status
4. NGO Help
5. Load Shedding
──────────────
Reply: <span className="ussd-cursor">_</span>
        </pre>
      </div>
      <div className="ussd-info">
        <span className="ussd-tag">NO DATA REQUIRED</span>
        <h4 className="ussd-heading">Works on every phone in SA.</h4>
        <p className="ussd-body">
          Dial <code>*120*••••#</code> — replace the dots with your registered PIN.
          No internet. No smartphone. No app.
        </p>
        <p className="ussd-hint">Your PIN is created during free registration.</p>
      </div>
    </div>
  )
}

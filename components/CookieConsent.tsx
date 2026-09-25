'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { OPEN_COOKIE_SETTINGS } from './CookieSettingsButton';

type Consent = { necessary: true; preferences: boolean; analytics: boolean; at: string; v: 1 };
const KEY = 'hs_cookie_consent';
const SIX_MONTHS = 60 * 60 * 24 * 180;

function read(): Consent | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

function write(c: Consent) {
  try { window.localStorage.setItem(KEY, JSON.stringify(c)); } catch { /* storage unavailable */ }
  // A small first-party cookie records the choice so it can also be honoured server-side. n = necessary, p = preferences, a = analytics.
  const value = ['n', c.preferences && 'p', c.analytics && 'a'].filter(Boolean).join('.');
  document.cookie = `hs_consent=${value}; Max-Age=${SIX_MONTHS}; Path=/; SameSite=Lax${window.location.protocol === 'https:' ? '; Secure' : ''}`;
}

/**
 * Where consent is applied. Load preference or analytics tooling here (and only here), and only when the matching flag is true.
 * The site currently loads no third-party scripts.
 */
function applyConsent(_consent: Consent) {
  /* e.g. if (_consent.analytics) loadAnalytics(); */
}

export function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [banner, setBanner] = useState(false);
  const [modal, setModal] = useState(false);
  const [pref, setPref] = useState(false);
  const [ana, setAna] = useState(false);
  const opener = useRef<HTMLElement | null>(null);
  const dialog = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existing = read();
    setMounted(true);
    if (existing) applyConsent(existing);
    else setBanner(true);
  }, []);

  const openModal = useCallback(() => {
    const c = read();
    setPref(!!c?.preferences);
    setAna(!!c?.analytics);
    opener.current = document.activeElement as HTMLElement | null;
    setBanner(false);
    setModal(true);
  }, []);

  useEffect(() => {
    window.addEventListener(OPEN_COOKIE_SETTINGS, openModal);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS, openModal);
  }, [openModal]);

  const save = (preferences: boolean, analytics: boolean) => {
    const c: Consent = { necessary: true, preferences, analytics, at: new Date().toISOString(), v: 1 };
    write(c);
    applyConsent(c);
    setBanner(false);
    setModal(false);
    opener.current?.focus?.();
  };

  const close = useCallback(() => {
    setModal(false);
    opener.current?.focus?.();
    if (!read()) setBanner(true);
  }, []);

  useEffect(() => {
    if (!modal) return;
    dialog.current?.querySelector<HTMLElement>('input:not([disabled]), button')?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return close();
      if (e.key !== 'Tab' || !dialog.current) return;
      const f = Array.from(dialog.current.querySelectorAll<HTMLElement>('button, input:not([disabled])'));
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [modal, close]);

  if (!mounted) return null;

  return (
    <>
      {banner && (
        <div className="ck" role="dialog" aria-labelledby="ck-title" aria-describedby="ck-desc">
          <h2 id="ck-title">Your cookie choices</h2>
          <p id="ck-desc">
            We use essential cookies to make this website work. With your permission we also use preference and analytics cookies to understand how it is used and to improve it.
            You can change your choice at any time. Read our <Link className="tlink" href="/cookie-policy">Cookie Policy</Link>.
          </p>
          <div className="row">
            <button className="btn btn-dark" type="button" onClick={() => save(true, true)}>Accept all</button>
            <button className="btn btn-line" type="button" onClick={() => save(false, false)}>Reject non-essential</button>
            <button className="btn btn-line" type="button" onClick={openModal}>Manage preferences</button>
          </div>
        </div>
      )}
      {modal && (
        <div className="ckm" data-cookie-modal onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }}>
          <div className="box" ref={dialog} role="dialog" aria-modal="true" aria-labelledby="ckm-title">
            <h2 id="ckm-title">Cookie preferences</h2>
            <p className="muted" style={{ fontSize: 'var(--t-sm)' }}>Choose which cookies you allow. Your choice is stored on this device and lasts six months.</p>
            <div className="ck-item" style={{ marginTop: 12 }}>
              <div><h3>Strictly necessary</h3><p>Keep the website working and remember your cookie choice. Always on.</p></div>
              <label className="sw"><span className="hp">Strictly necessary cookies, always on</span><input type="checkbox" checked disabled readOnly /><i /></label>
            </div>
            <div className="ck-item">
              <div><h3>Preferences</h3><p>Remember settings you choose.</p></div>
              <label className="sw"><span className="hp">Allow preference cookies</span><input type="checkbox" checked={pref} onChange={(e) => setPref(e.target.checked)} /><i /></label>
            </div>
            <div className="ck-item">
              <div><h3>Analytics</h3><p>Help us understand how the website is used so we can improve it.</p></div>
              <label className="sw"><span className="hp">Allow analytics cookies</span><input type="checkbox" checked={ana} onChange={(e) => setAna(e.target.checked)} /><i /></label>
            </div>
            <div className="row">
              <button className="btn btn-line" type="button" onClick={() => save(false, false)}>Reject non-essential</button>
              <button className="btn btn-line" type="button" onClick={() => save(true, true)}>Accept all</button>
              <button className="btn btn-dark" type="button" onClick={() => save(pref, ana)}>Save preferences</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

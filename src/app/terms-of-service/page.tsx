'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

/**
 * TermsOfServicePage
 * 
 * Refactored to solve the "Hydration Failed" error completely by using 
 * client-side mounting for the dynamic legal content. 
 * 
 * Optimized for Havenly Solutions's Premium Design Language.
 */
export default function TermsOfServicePage() {
  const [content, setContent] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // In a real Next.js app, we'd fetch this or it would be bundled. 
    // To solve the hydration error for the user's specific Turbopack setup, 
    // we fetch it on mount to ensure the server and client are perfectly in sync 
    // for the static layout, and dynamic content is injected safely.
    fetch('/api/legal/terms')
      .then(res => res.text())
      .then(html => setContent(html))
      .catch(() => setContent('<p>Our terms are currently being refined for the November launch.</p>'));
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFDFD] pt-32 pb-24 selection:bg-[#4C2A85]/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-400 font-medium uppercase tracking-wider">
          <Link href="/" className="hover:text-[#4C2A85] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#1A1A2E]">Legal</span>
        </div>

        {/* Hero Header */}
        <div className="relative mb-20">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-24 bg-[#C0392B] rounded-full hidden md:block" />
          <h1 className="font-display font-black text-[#1A1A2E] text-5xl md:text-7xl mb-6 tracking-tight">
            Terms of <span className="text-[#4C2A85]">Service</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-500">
            <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-bold text-gray-600 uppercase tracking-tighter">
              Version 2.1.0
            </div>
            <div className="h-1 w-1 rounded-full bg-gray-300" />
            <p className="text-sm font-medium">Last Updated: April 27, 2026</p>
            <div className="h-1 w-1 rounded-full bg-gray-300" />
            <p className="text-sm font-medium">South African Compliance Verified (POPIA)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Main Legal Content Wrapper */}
          <main className="lg:col-span-8">
            <div className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
              {mounted ? (
                <article 
                  className="prose prose-slate prose-lg max-w-none 
                             /* Havenly Solutions Headings */
                             prose-headings:font-display prose-headings:font-bold prose-headings:text-[#1A1A2E]
                             prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:border-b prose-h2:pb-4 prose-h2:border-gray-50
                             prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4
                             
                             /* Core Text */
                             text-gray-600 prose-p:leading-[1.8] prose-p:mb-8
                             
                             /* List Styling */
                             prose-li:marker:text-[#C0392B] prose-li:mb-2
                             
                             /* Links & Accents */
                             prose-a:text-[#C0392B] prose-a:font-bold prose-a:no-underline hover:prose-a:underline
                             prose-strong:text-[#1A1A2E] prose-strong:font-bold
                             "
                  dangerouslySetInnerHTML={{ __html: content }} 
                />
              ) : (
                <div className="animate-pulse space-y-8">
                  <div className="h-8 bg-gray-100 rounded-full w-1/3" />
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-100 rounded-full w-full" />
                    <div className="h-4 bg-gray-100 rounded-full w-full" />
                    <div className="h-4 bg-gray-100 rounded-full w-5/6" />
                  </div>
                </div>
              )}
            </div>
          </main>

          {/* Sidebar Navigation & Quick Links */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              
              {/* Quick Summary Card */}
              <div className="bg-[#1A1A2E] text-white rounded-3xl p-10 shadow-xl shadow-[#1A1A2E]/10">
                <h3 className="font-display font-bold text-2xl mb-6">Partner Summary</h3>
                <ul className="space-y-6">
                  {[
                    { label: 'Platform Scope', val: 'South Africa' },
                    { label: 'Launch Date', val: 'Nov 24, 2026' },
                    { label: 'Compliance', val: 'POPIA / GDPR' }
                  ].map(stat => (
                    <li key={stat.label} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">{stat.label}</p>
                      <p className="font-sans font-medium text-lg text-white">{stat.val}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Sidebar */}
              <div className="p-8 border border-gray-100 rounded-3xl bg-white">
                <h4 className="font-display font-bold text-[#1A1A2E] text-lg mb-4">Legal Queries?</h4>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                  Our compliance team operates from Johannesburg to ensure your data and rights are protected under local law.
                </p>
                <a 
                  href="mailto:legal@havenly.solutions"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-[#C0392B] text-white rounded-2xl font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-[#C0392B]/10 overflow-hidden relative group"
                >
                  <span className="relative z-10">Email General Counsel</span>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
                </a>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}

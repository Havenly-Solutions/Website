'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  const [content, setContent] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetch('/api/legal/privacy')
      .then(res => res.text())
      .then(html => setContent(html))
      .catch(() => setContent('<p>Our privacy policy is currently being updated.</p>'));
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFDFD] pt-32 pb-24 selection:bg-[#4C2A85]/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-400 font-medium uppercase tracking-wider">
          <Link href="/" className="hover:text-[#4C2A85] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#1A1A2E]">Legal</span>
        </div>

        <div className="relative mb-20">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-24 bg-[#0B6E4F] rounded-full hidden md:block" />
          <h1 className="font-display font-black text-[#1A1A2E] text-5xl md:text-7xl mb-6 tracking-tight">
            Privacy <span className="text-[#0B6E4F]">Policy</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-500">
            <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-bold text-gray-600 uppercase tracking-tighter">
              Compliance (POPIA)
            </div>
            <div className="h-1 w-1 rounded-full bg-gray-300" />
            <p className="text-sm font-medium">Last Updated: April 27, 2026</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <main className="lg:col-span-8">
            <div className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
              {mounted ? (
                <article 
                  className="prose prose-slate prose-lg max-w-none 
                             prose-headings:font-display prose-headings:font-bold prose-headings:text-[#1A1A2E]
                             prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:border-b prose-h2:pb-4 prose-h2:border-gray-50
                             prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4
                             text-gray-600 prose-p:leading-[1.8] prose-p:mb-8
                             prose-li:marker:text-[#0B6E4F] prose-li:mb-2
                             prose-a:text-[#0B6E4F] prose-a:font-bold prose-a:no-underline hover:prose-a:underline
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

          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="bg-[#1A1A2E] text-white rounded-3xl p-10 shadow-xl shadow-[#1A1A2E]/10">
                <h3 className="font-display font-bold text-2xl mb-6">Data Rights</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Under the Protection of Personal Information Act (POPIA), you have a right to access, delete, and correct your data at any time.
                </p>
                <Link href="/contact" className="inline-block px-6 py-3 bg-[#0B6E4F] text-white rounded-xl font-bold hover:scale-[1.02] transition-transform">
                  Data Request
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

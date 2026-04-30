'use client'
import { useState, useEffect } from 'react'

interface CountdownProps { dark?: boolean }

import { useCountdown } from '@/hooks/useCountdown'

const TARGET_DATE = process.env.NEXT_PUBLIC_LAUNCH_DATE || '2026-11-24T00:00:00+02:00'

export default function Countdown({ dark = false }: CountdownProps) {
  const time = useCountdown(TARGET_DATE)

  const units = [
    { value: time.days, label: 'Days' },
    { value: time.hours, label: 'Hours' },
    { value: time.minutes, label: 'Mins' },
    { value: time.seconds, label: 'Secs' },
  ]

  return (
      <div className="flex items-center gap-4">
        {units.map(({ value, label }, i) => (
            <div key={label} className="flex items-center gap-4">
              <div className="text-center">
                <div className={`font-display font-bold tabular-nums leading-none ${dark ? 'text-white' : 'text-[#1A1A2E]'} text-4xl`}>
                  {String(value).padStart(2, '0')}
                </div>
                <div className={`text-[10px] uppercase tracking-widest mt-1 ${dark ? 'text-white/40' : 'text-[#1A1A2E]/40'}`}>
                  {label}
                </div>
              </div>

              {i < units.length - 1 && (
                  <div className={`font-display font-bold text-2xl mb-3 ${dark ? 'text-white/20' : 'text-[#1A1A2E]/20'}`}>
                    :
                  </div>
              )}
            </div>
        ))}
      </div>
  )
}
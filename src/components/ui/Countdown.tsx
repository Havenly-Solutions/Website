'use client'
import { useState, useEffect } from 'react'

interface CountdownProps { dark?: boolean }

const TARGET_DATE = new Date('2026-11-24T00:00:00+02:00')

export default function Countdown({ dark = false }: CountdownProps) {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0
  })

  useEffect(() => {
    const tick = () => {
      const diff = TARGET_DATE.getTime() - Date.now()

      if (diff <= 0) {
        setTime({ days: 0, hours: 0, mins: 0, secs: 0 })
        return
      }

      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      })
    }

    tick()
    const id = setInterval(tick, 1000)

    return () => clearInterval(id)
  }, [])

  const units = [
    { value: time.days, label: 'Days' },
    { value: time.hours, label: 'Hours' },
    { value: time.mins, label: 'Mins' },
    { value: time.secs, label: 'Secs' },
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
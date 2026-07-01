'use client'
import { useState, useEffect } from 'react'

interface CountdownProps { dark?: boolean }

const TARGET_DATE = new Date(process.env.NEXT_PUBLIC_LAUNCH_DATE || '2026-11-24T00:00:00+02:00')

export default function Countdown({ dark = false }: CountdownProps) {
  const [mounted, setMounted] = useState(false)
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0
  })

  useEffect(() => {
    setMounted(true)
    const tick = () => {
      const now = new Date().getTime()
      const diff = TARGET_DATE.getTime() - now

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

  if (!mounted) {
    return (
      <div className="flex items-center gap-4 opacity-0">
        <div className="text-center">
          <div className="font-display font-bold tabular-nums text-xl md:text-2xl tracking-tight">00</div>
          <div className="text-[9px] uppercase tracking-widest mt-1">Days</div>
        </div>
      </div>
    )
  }

  const units = [
    { value: time.days, label: 'Days' },
    { value: time.hours, label: 'Hrs' },
    { value: time.mins, label: 'Min' },
    { value: time.secs, label: 'Sec' },
  ]

  return (
    <div className="flex items-center gap-4 tabular-nums text-xl md:text-2xl font-semibold tracking-tight">
      {units.map(({ value, label }, i) => (
        <div key={label} className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <span className={dark ? 'text-white' : 'text-[#1A1A2E]'}>
              {String(value).padStart(2, '0')}
            </span>
            <span className={`text-[9px] uppercase tracking-widest mt-1 ${dark ? 'text-white/40' : 'text-[#1A1A2E]/40'}`}>
              {label}
            </span>
          </div>

          {i < units.length - 1 && (
            <span className={dark ? 'text-white/20' : 'text-[#1A1A2E]/20'}>:</span>
          )}
        </div>
      ))}
    </div>
  )
}

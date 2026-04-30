'use client'
import { useState, useEffect, useCallback } from 'react'

export interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  total: number
}

export function useCountdown(targetDate: string): TimeLeft {
  const calculateTimeLeft = useCallback((): TimeLeft => {
    const now = Date.now()
    const target = new Date(targetDate).getTime()
    const difference = target - now

    if (difference <= 0 || isNaN(target)) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 }
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      total: difference
    }
  }, [targetDate])

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 })

  useEffect(() => {
    // Initial calculation
    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      const updated = calculateTimeLeft()
      setTimeLeft(updated)
      
      if (updated.total <= 0) {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [calculateTimeLeft])

  return timeLeft
}

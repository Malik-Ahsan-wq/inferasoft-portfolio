"use client"

import { useEffect, useRef, useCallback } from "react"
import { cn } from "@/app/lib/utils"

interface StarsBackgroundProps {
  starDensity?: number
  starColor?: string
  allStarsTwinkle?: boolean
  twinkleProbability?: number
  minTwinkleSpeed?: number
  maxTwinkleSpeed?: number
  className?: string
}

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  twinkleSpeed: number
  twinklePhase: number
  twinkleDirection: number
}

export const StarsBackground = ({
  starDensity = 0.0003,
  starColor = "#FFF",
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 0.5,
  maxTwinkleSpeed = 1,
  className,
}: StarsBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const animationFrameRef = useRef<number>(0)

  const initStars = useCallback(
    (width: number, height: number) => {
      const starCount = Math.floor(width * height * starDensity)
      const stars: Star[] = []

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.5 + 0.3,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * (maxTwinkleSpeed - minTwinkleSpeed) + minTwinkleSpeed,
          twinklePhase: Math.random() * Math.PI * 2,
          twinkleDirection: Math.random() > 0.5 ? 1 : -1,
        })
      }

      starsRef.current = stars
    },
    [starDensity, minTwinkleSpeed, maxTwinkleSpeed]
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let resizeTimeout: ReturnType<typeof setTimeout>

    const resize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        const dpr = window.devicePixelRatio || 1
        const rect = canvas.getBoundingClientRect()
        canvas.width = rect.width * dpr
        canvas.height = rect.height * dpr
        ctx.scale(dpr, dpr)
        initStars(rect.width, rect.height)
      }, 100)
    }

    resize()

    const observer = new ResizeObserver(() => resize())
    observer.observe(canvas.parentElement || canvas)

    let lastTime = 0

    const animate = (time: number) => {
      const delta = (time - lastTime) / 1000
      lastTime = time

      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      for (const star of starsRef.current) {
        star.twinklePhase += delta * star.twinkleSpeed * star.twinkleDirection

        const twinkle = allStarsTwinkle || Math.random() < twinkleProbability
        let opacity = star.opacity

        if (twinkle) {
          opacity = star.opacity * (0.5 + 0.5 * Math.sin(star.twinklePhase))
        }

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = starColor
        ctx.globalAlpha = Math.max(0, Math.min(1, opacity))
        ctx.fill()
      }

      ctx.globalAlpha = 1
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameRef.current)
      observer.disconnect()
      clearTimeout(resizeTimeout)
    }
  }, [starColor, allStarsTwinkle, twinkleProbability, initStars])

  return (
    <canvas
      ref={canvasRef}
      className={cn("h-full w-full", className)}
      aria-hidden="true"
    />
  )
}

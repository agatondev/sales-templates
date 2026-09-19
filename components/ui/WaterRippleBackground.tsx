'use client'

import { useEffect, useRef } from 'react'

interface Ripple {
  x: number
  y: number
  radius: number
  maxRadius: number
  alpha: number
  speed: number
  color: string
}

interface Droplet {
  x: number
  y: number
  targetY: number
  speed: number
  size: number
  alpha: number
  splashed: boolean
}

export function WaterRippleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const ripples: Ripple[] = []
    const droplets: Droplet[] = []

    const colors = [
      'rgba(167, 139, 250, ', // Purple
      'rgba(34, 211, 238, ',  // Cyan
      'rgba(236, 72, 153, ',  // Pink
      'rgba(129, 140, 248, ', // Indigo
    ]

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    // Spawn a water ripple
    const addRipple = (x: number, y: number, isBig = false) => {
      const color = colors[Math.floor(Math.random() * colors.length)]
      ripples.push({
        x,
        y,
        radius: 2,
        maxRadius: isBig ? Math.random() * 80 + 100 : Math.random() * 40 + 50,
        alpha: 0.8,
        speed: Math.random() * 1.5 + 1.5,
        color,
      })
    }

    // Spawn falling water droplet
    const spawnDroplet = () => {
      const x = Math.random() * width
      const startY = Math.random() * (height * 0.3)
      const targetY = startY + Math.random() * (height * 0.5) + 150
      droplets.push({
        x,
        y: startY,
        targetY,
        speed: Math.random() * 4 + 4,
        size: Math.random() * 2 + 2,
        alpha: 0.7,
        splashed: false,
      })
    }

    // Auto-generate falling water drops periodically
    const dropInterval = setInterval(() => {
      if (droplets.length < 8) {
        spawnDroplet()
      }
    }, 900)

    // User interaction: Click to create big water ripple
    const handleClick = (e: MouseEvent) => {
      addRipple(e.clientX, e.clientY, true)
      addRipple(e.clientX, e.clientY, false)
    }

    // User interaction: Mouse movement produces subtle water trails
    let lastMouseTime = 0
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastMouseTime > 80) {
        addRipple(e.clientX, e.clientY, false)
        lastMouseTime = now
      }
    }

    window.addEventListener('click', handleClick)
    window.addEventListener('mousemove', handleMouseMove)

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // 1. Draw falling droplets
      for (let i = droplets.length - 1; i >= 0; i--) {
        const d = droplets[i]
        d.y += d.speed

        ctx.beginPath()
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(167, 139, 250, ${d.alpha})`
        ctx.fill()

        // Draw drop tail/streak
        ctx.beginPath()
        ctx.moveTo(d.x, d.y)
        ctx.lineTo(d.x, d.y - d.size * 3)
        ctx.strokeStyle = `rgba(167, 139, 250, ${d.alpha * 0.4})`
        ctx.lineWidth = d.size * 0.8
        ctx.stroke()

        // Check if reached target or screen bottom
        if (d.y >= d.targetY || d.y >= height) {
          addRipple(d.x, d.y, false)
          droplets.splice(i, 1)
        }
      }

      // 2. Draw expanding water ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i]
        r.radius += r.speed
        r.alpha -= 0.012

        if (r.alpha <= 0 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1)
          continue
        }

        // Outer wave ring
        ctx.beginPath()
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `${r.color}${r.alpha})`
        ctx.lineWidth = 1.5
        ctx.stroke()

        // Inner secondary wave ring
        if (r.radius > 10) {
          ctx.beginPath()
          ctx.arc(r.x, r.y, r.radius * 0.6, 0, Math.PI * 2)
          ctx.strokeStyle = `${r.color}${r.alpha * 0.5})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      clearInterval(dropInterval)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('click', handleClick)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-10 opacity-70"
    />
  )
}

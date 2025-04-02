"use client"

import { useEffect, useRef } from "react"

interface ChartData {
  name: string
  value: number
}

interface ChartProps {
  data: ChartData[]
}

export function BarChart({ data }: ChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Set dimensions
    const width = canvas.width
    const height = canvas.height
    const padding = 40
    const chartWidth = width - padding * 2
    const chartHeight = height - padding * 2

    // Find max value for scaling
    const maxValue = Math.max(...data.map((item) => item.value))
    const barWidth = chartWidth / data.length - 10

    // Draw axes
    ctx.beginPath()
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, height - padding)
    ctx.lineTo(width - padding, height - padding)
    ctx.strokeStyle = "#ddd"
    ctx.stroke()

    // Draw bars
    data.forEach((item, index) => {
      const x = padding + index * (barWidth + 10) + 5
      const barHeight = (item.value / maxValue) * chartHeight
      const y = height - padding - barHeight

      // Draw bar
      ctx.fillStyle = "#5c6ac4"
      ctx.fillRect(x, y, barWidth, barHeight)

      // Draw label
      ctx.fillStyle = "#637381"
      ctx.font = "12px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(item.name, x + barWidth / 2, height - padding + 15)

      // Draw value
      ctx.fillStyle = "#212b36"
      ctx.font = "12px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(item.value.toString(), x + barWidth / 2, y - 5)
    })
  }, [data])

  return <canvas ref={canvasRef} width={600} height={300} style={{ width: "100%", height: "100%" }} />
}

export function LineChart({ data }: ChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Set dimensions
    const width = canvas.width
    const height = canvas.height
    const padding = 40
    const chartWidth = width - padding * 2
    const chartHeight = height - padding * 2

    // Find max value for scaling
    const maxValue = Math.max(...data.map((item) => item.value))

    // Draw axes
    ctx.beginPath()
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, height - padding)
    ctx.lineTo(width - padding, height - padding)
    ctx.strokeStyle = "#ddd"
    ctx.stroke()

    // Draw line
    ctx.beginPath()
    data.forEach((item, index) => {
      const x = padding + (index / (data.length - 1)) * chartWidth
      const y = height - padding - (item.value / maxValue) * chartHeight

      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.strokeStyle = "#5c6ac4"
    ctx.lineWidth = 2
    2
    ctx.stroke()

    // Draw points
    data.forEach((item, index) => {
      const x = padding + (index / (data.length - 1)) * chartWidth
      const y = height - padding - (item.value / maxValue) * chartHeight

      ctx.beginPath()
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fillStyle = "#5c6ac4"
      ctx.fill()
      ctx.strokeStyle = "#ffffff"
      ctx.lineWidth = 2
      ctx.stroke()

      // Draw label
      ctx.fillStyle = "#637381"
      ctx.font = "12px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(item.name, x, height - padding + 15)

      // Draw value
      ctx.fillStyle = "#212b36"
      ctx.font = "12px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(item.value.toString(), x, y - 10)
    })
  }, [data])

  return <canvas ref={canvasRef} width={600} height={300} style={{ width: "100%", height: "100%" }} />
}


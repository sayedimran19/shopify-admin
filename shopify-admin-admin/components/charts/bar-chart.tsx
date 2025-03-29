"use client"

import { Bar, BarChart as RechartsBarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

interface BarChartProps {
  data: {
    name: string
    value: number
  }[]
}

export function BarChart({ data }: BarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <RechartsBarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip
          cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
          contentStyle={{
            background: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "6px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        />
        <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
      </RechartsBarChart>
    </ResponsiveContainer>
  )
}


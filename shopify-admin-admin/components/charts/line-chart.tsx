"use client"

import { Line, LineChart as RechartsLineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

interface LineChartProps {
  data: {
    name: string
    value: number
  }[]
}

export function LineChart({ data }: LineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <RechartsLineChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip
          contentStyle={{
            background: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "6px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  )
}


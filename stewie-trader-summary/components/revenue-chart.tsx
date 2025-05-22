"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

// Data for the chart
const chartData = [
  { aum: "$1B", bpLow: 4, bpHigh: 6 },
  { aum: "$5B", bpLow: 20, bpHigh: 30 },
  { aum: "$10B", bpLow: 40, bpHigh: 60 },
  { aum: "$50B", bpLow: 200, bpHigh: 300 },
  { aum: "$100B", bpLow: 400, bpHigh: 600 },
  { aum: "$500B", bpLow: 2000, bpHigh: 3000 },
]

export function RevenueChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="aum" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" tickFormatter={(value) => `$${value}M`} />
          <Tooltip
            formatter={(value) => [`$${value}M`, "Annual Revenue"]}
            labelFormatter={(label) => `AUM: ${label}`}
            contentStyle={{ backgroundColor: "#1e293b", borderColor: "#334155", color: "#f8fafc" }}
          />
          <Bar dataKey="bpLow" stackId="a" fill="#34d399" name="4 basis points" />
          <Bar dataKey="bpHigh" stackId="a" fill="#059669" name="6 basis points" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}


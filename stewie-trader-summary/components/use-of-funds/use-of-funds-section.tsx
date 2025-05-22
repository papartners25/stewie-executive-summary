"use client"

import { Download, DollarSign, Clock, Quote } from "lucide-react"
import { useOfFundsData } from "@/data/use-of-funds"
import { FundCategoryCard } from "./fund-category-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { exportToCSV } from "@/utils/export-to-csv"
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts"

export function UseOfFundsSection() {
  const handleExport = () => {
    exportToCSV(useOfFundsData, "stewie-trader-use-of-funds.csv")
  }

  // Prepare data for pie chart
  const pieData = useOfFundsData.categories.map((category) => ({
    name: category.name,
    value: category.amount,
    percentage: ((category.amount / useOfFundsData.totalRaise) * 100).toFixed(1),
  }))

  // Colors for pie chart
  const COLORS = ["#10b981", "#34d399", "#6ee7b7", "#a7f3d0", "#d1fae5"]

  return (
    <section className="bg-slate-950/50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-emerald-600/20 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-emerald-500" />
              </div>
              <h2 className="text-3xl font-bold">Use of Funds</h2>
            </div>
            <Button
              variant="outline"
              className="border-slate-700 text-slate-300 hover:bg-slate-800 flex items-center gap-2"
              onClick={handleExport}
            >
              <Download className="h-4 w-4" />
              Export to CSV
            </Button>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 mb-8">
            <div className="mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-emerald-400">Funding Allocation</h3>
                  <p className="text-sm text-slate-400">
                    Total Raise: ${useOfFundsData.totalRaise.toLocaleString()} • {useOfFundsData.runwayMonths}-month
                    runway
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1.5 rounded-md">
                  <Clock className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm text-slate-300">
                    Staff costs shown at annual rates for {useOfFundsData.runwayMonths} months
                  </span>
                </div>
              </div>
            </div>

            <Tabs defaultValue="breakdown" className="w-full">
              <TabsList className="bg-slate-800/50 mb-6">
                <TabsTrigger value="breakdown" className="data-[state=active]:bg-emerald-600">
                  Breakdown
                </TabsTrigger>
                <TabsTrigger value="chart" className="data-[state=active]:bg-emerald-600">
                  Chart
                </TabsTrigger>
              </TabsList>

              <TabsContent value="breakdown" className="space-y-6">
                {useOfFundsData.categories.map((category) => (
                  <FundCategoryCard key={category.name} category={category} totalRaise={useOfFundsData.totalRaise} />
                ))}
              </TabsContent>

              <TabsContent value="chart">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 h-[500px] flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        outerRadius={180}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percentage }) => `${name}: ${percentage}%`}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => [`$${value.toLocaleString()}`, "Amount"]}
                        contentStyle={{ backgroundColor: "#1e293b", borderColor: "#334155", color: "#f8fafc" }}
                      />
                      <Legend
                        layout="vertical"
                        verticalAlign="middle"
                        align="right"
                        formatter={(value) => <span className="text-slate-300">{value}</span>}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="relative bg-gradient-to-r from-slate-900/80 to-emerald-900/20 border border-slate-800 rounded-xl p-8 mb-4">
            <div className="absolute top-6 left-8 text-emerald-500 opacity-30">
              <Quote className="h-16 w-16" />
            </div>
            <div className="relative z-10 ml-4">
              <p className="text-lg text-slate-200 italic leading-relaxed">
                "Stewie Trader is securing $1M in funding at a $4M valuation to revolutionize algorithmic
                trading with our AI-powered platform—delivering institutional-grade capabilities to Main Street advisors
                and emerging hedge funds through sophisticated machine learning and seamless compliance integration."
              </p>
              <div className="mt-4 flex items-center">
                <div className="h-10 w-10 rounded-full bg-emerald-600/20 flex items-center justify-center">
                  <span className="text-emerald-500 font-bold">ES</span>
                </div>
                <div className="ml-3">
                  <p className="text-emerald-400 font-semibold">Evan Spencer</p>
                  <p className="text-slate-400 text-sm">CEO, Stewie Trader</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


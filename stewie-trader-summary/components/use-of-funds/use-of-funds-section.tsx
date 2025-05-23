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
    label: `${((category.amount / useOfFundsData.totalRaise) * 100).toFixed(1)}%`,
    amount: `$${category.amount.toLocaleString()}`,
  }))

  // Colors for pie chart with better contrast
  const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#ec4899", "#8b5cf6"]

  // Custom render for the legend
  const renderLegendContent = (props) => {
    const { payload } = props
    
    return (
      <div className="p-4 bg-slate-800/70 rounded-lg shadow-lg">
        <h4 className="text-emerald-400 font-semibold text-sm mb-3">Budget Allocation</h4>
        <ul className="space-y-3">
          {payload.map((entry, index) => (
            <li key={`item-${index}`} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-sm mr-2" 
                style={{ backgroundColor: entry.color }}
              />
              <div className="flex flex-col">
                <span className="text-slate-200 font-medium text-sm">{entry.value}</span>
                <div className="flex space-x-2 text-xs">
                  <span className="text-emerald-400">{pieData[index].label}</span>
                  <span className="text-slate-400">{pieData[index].amount}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  // Custom label for pie chart
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 30;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#f8fafc"
        fontWeight="bold"
        fontSize={12}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {name}
      </text>
    );
  };

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
                        labelLine={false}
                        outerRadius={160}
                        innerRadius={80}
                        paddingAngle={3}
                        fill="#8884d8"
                        dataKey="value"
                        strokeWidth={2}
                        stroke="#0f172a"
                        label={renderCustomizedLabel}
                      >
                        {pieData.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={COLORS[index % COLORS.length]} 
                            style={{ filter: 'drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.3))' }}
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => [`$${value.toLocaleString()}`, "Amount"]}
                        contentStyle={{ 
                          backgroundColor: "#1e293b", 
                          borderColor: "#10b981", 
                          color: "#f8fafc",
                          borderRadius: "8px",
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
                          padding: "8px 12px"
                        }}
                      />
                      <Legend 
                        content={renderLegendContent}
                        layout="vertical"
                        verticalAlign="middle"
                        align="right"
                        wrapperStyle={{ paddingLeft: "10px" }}
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
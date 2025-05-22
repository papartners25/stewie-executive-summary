"use client"

import { useState } from "react"
import { Slideshow } from "./slideshow"
import { Slide } from "./slide"
import Image from "next/image"
import { useOfFundsData } from "@/data/use-of-funds"
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts"
import { BarChart, Bar, XAxis, YAxis } from "recharts"
import { ArrowRight, Building, ChevronRight, Target, Lock } from "lucide-react"

export function PresentationModal() {
  const [isOpen, setIsOpen] = useState(false)

  // Prepare data for pie chart
  const pieData = useOfFundsData.categories.map((category) => ({
    name: category.name,
    value: category.amount,
    percentage: ((category.amount / useOfFundsData.totalRaise) * 100).toFixed(1),
  }))

  // Colors for pie chart
  const COLORS = ["#10b981", "#34d399", "#6ee7b7", "#a7f3d0", "#d1fae5"]

  // Revenue chart data
  const revenueData = [
    { aum: "$1B", bpLow: 4, bpHigh: 6 },
    { aum: "$5B", bpLow: 20, bpHigh: 30 },
    { aum: "$10B", bpLow: 40, bpHigh: 60 },
    { aum: "$50B", bpLow: 200, bpHigh: 300 },
    { aum: "$100B", bpLow: 400, bpHigh: 600 },
    { aum: "$500B", bpLow: 2000, bpHigh: 3000 },
  ]

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-transparent hover:bg-slate-800 text-slate-300 border border-slate-700 font-medium py-2 px-4 rounded inline-flex items-center"
      >
        View Presentation
      </button>

      {isOpen && (
        <Slideshow
          onClose={() => setIsOpen(false)}
          slides={[
            // Title Slide
            <Slide key="title" title="Stewie Trader" bgClass="bg-gradient-to-b from-slate-950 to-slate-900">
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="mb-8">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stewie%20file-RJo5HighogdbplTUECRD8pm0zPmVaz.png"
                    alt="Stewie Trader Logo"
                    width={200}
                    height={200}
                    className="rounded-full border-4 border-slate-800 shadow-xl"
                  />
                </div>
                <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                  Stewie Trader
                </h1>
                <p className="text-2xl text-slate-300 mb-8">AI-Powered Trading Platform Market Analysis</p>
                <div className="max-w-2xl">
                  <p className="text-lg text-slate-300 italic">
                    "Securing $2M in funding at a $10M post-money valuation to revolutionize algorithmic trading with
                    our AI-powered platform"
                  </p>
                  <p className="mt-4 text-emerald-400">Evan Spencer, CEO</p>
                </div>
              </div>
            </Slide>,

            // Market Opportunity
            <Slide key="market" title="Market Opportunity">
              <div className="grid grid-cols-2 gap-8 h-full">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-emerald-400">Strategic Customer Segments</h3>
                  <p className="text-slate-300 mb-6">
                    Our comprehensive analysis examines the needs, challenges, and opportunities for targeting Main
                    Street registered investment advisors (RIAs) and small-to-mid-sized hedge funds as primary customer
                    segments for our AI-powered trading platform.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-slate-300">
                      <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                      <p>RIAs collectively manage trillions in assets</p>
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                      <p>Hedge fund industry exceeds $5 trillion in the US</p>
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                      <p>Both segments struggle with technology integration</p>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 rounded-xl -z-10"></div>
                  <div className="p-6 border border-slate-800 rounded-xl bg-slate-900/50 h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h4 className="text-lg font-medium text-white">Implementation Timeline</h4>
                        <p className="text-sm text-slate-400">Phased approach to market entry</p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-24 text-sm font-medium text-emerald-400">Q2-Q3 25'</div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-white">Initial Phase</p>
                          <p className="text-xs text-slate-400">
                            Focus on Main Street RIA's with urgent need for AI capabilities
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-24 text-sm font-medium text-emerald-400">Q4 25'-Q1 26'</div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-white">Expansion Phase</p>
                          <p className="text-xs text-slate-400">
                            Extend focus to small-to-mid-sized hedge funds with tailored solutions
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-24 text-sm font-medium text-emerald-400">Q2-Q3 26'</div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-white">Integration Phase</p>
                          <p className="text-xs text-slate-400">Develop cross-segment capabilities and case studies</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-24 text-sm font-medium text-emerald-400">Q4 26'+</div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-white">Retail Expansion</p>
                          <p className="text-xs text-slate-400">
                            Leverage credibility to launch retail-focused offerings
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>,

            // Revenue Potential
            <Slide key="revenue" title="Revenue Potential">
              <div className="h-full flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-emerald-400">Revenue Potential</h3>
                  <p className="text-sm text-slate-400">Based on 4-6 basis points (0.04%-0.06%) on AUM traded</p>
                </div>

                <div className="flex-1">
                  <ResponsiveContainer width="100%" height="70%">
                    <BarChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <XAxis dataKey="aum" stroke="#94a3b8" />
                      <YAxis stroke="#94a3b8" tickFormatter={(value) => `$${value}M`} />
                      <Tooltip
                        formatter={(value) => [`$${value}M`, "Annual Revenue"]}
                        labelFormatter={(label) => `AUM: ${label}`}
                        contentStyle={{ backgroundColor: "#1e293b", borderColor: "#334155", color: "#f8fafc" }}
                      />
                      <Legend />
                      <Bar dataKey="bpLow" stackId="a" fill="#34d399" name="4 basis points" />
                      <Bar dataKey="bpHigh" stackId="a" fill="#059669" name="6 basis points" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-6 text-center">
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <p className="text-sm text-slate-400">RIA Market Segment</p>
                    <p className="text-2xl font-bold text-white">$1-5B</p>
                    <p className="text-emerald-400 font-medium">$4-30M Annual Revenue</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <p className="text-sm text-slate-400">Hedge Fund Segment</p>
                    <p className="text-2xl font-bold text-white">$10-50B</p>
                    <p className="text-emerald-400 font-medium">$40-300M Annual Revenue</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <p className="text-sm text-slate-400">Total Market Potential</p>
                    <p className="text-2xl font-bold text-white">$100-500B</p>
                    <p className="text-emerald-400 font-medium">$400M-3B Annual Revenue</p>
                  </div>
                </div>
              </div>
            </Slide>,

            // Customer Segments - RIAs
            <Slide key="rias" title="Customer Segments - RIAs">
              <div className="grid grid-cols-3 gap-6 h-full">
                <div className="bg-slate-900 border-slate-800 border rounded-lg shadow-lg p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <BarChart className="h-5 w-5 text-emerald-500" />
                    <h3 className="text-lg font-semibold text-white">Market Landscape</h3>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">
                        Rapidly evolving space creating both challenges and opportunities
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">
                        Shifting client expectations and increased regulatory complexities
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">
                        Highly fragmented market where differentiation and efficiency are critical
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">
                        Competitive pressure from larger firms with greater resources
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-900 border-slate-800 border rounded-lg shadow-lg p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="h-5 w-5 text-emerald-500" />
                    <h3 className="text-lg font-semibold text-white">Key Pain Points</h3>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">
                        Technology integration challenges with overwhelming number of options
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Balancing AI adoption with human relationship management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Need for differentiation in crowded marketplace</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Compressed margins and rising operational costs</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-900 border-slate-800 border rounded-lg shadow-lg p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="h-5 w-5 text-emerald-500" />
                    <h3 className="text-lg font-semibold text-white">Opportunity Areas</h3>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Client-facing differentiation tools with unique insights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">
                        Operational efficiency solutions that streamline back-office tasks
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">
                        Competitive intelligence capabilities to level the playing field
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">
                        Technology that enhances rather than replaces advisor expertise
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Slide>,

            // Customer Segments - Hedge Funds
            <Slide key="hedge-funds" title="Customer Segments - Hedge Funds">
              <div className="grid grid-cols-3 gap-6 h-full">
                <div className="bg-slate-900 border-slate-800 border rounded-lg shadow-lg p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <BarChart className="h-5 w-5 text-emerald-500" />
                    <h3 className="text-lg font-semibold text-white">Market Landscape</h3>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Distinct challenges in competing with larger firms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Increasingly complex regulatory landscape</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">
                        Industry exceeds $5 trillion in assets under management in the US
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">
                        Regulators "playing catch-up" in oversight of AI in trading
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-900 border-slate-800 border rounded-lg shadow-lg p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="h-5 w-5 text-emerald-500" />
                    <h3 className="text-lg font-semibold text-white">Key Pain Points</h3>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Resource constraints vs. technological demands</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">
                        Regulatory compliance challenges with evolving AI oversight
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Operational efficiency and cost management pressures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Cybersecurity concerns and data protection requirements</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-900 border-slate-800 border rounded-lg shadow-lg p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="h-5 w-5 text-emerald-500" />
                    <h3 className="text-lg font-semibold text-white">Opportunity Areas</h3>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">
                        Democratized AI trading capabilities without massive infrastructure
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Enhanced risk management systems with real-time metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Cybersecurity and data protection features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">
                        Cost-effective access to institutional-quality capabilities
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Slide>,

            // Use of Funds
            <Slide key="use-of-funds" title="Use of Funds">
              <div className="h-full flex flex-col">
                <div className="mb-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-emerald-400">Funding Allocation</h3>
                    <p className="text-sm text-slate-400">
                      Total Raise: ${useOfFundsData.totalRaise.toLocaleString()} • {useOfFundsData.runwayMonths}-month
                      runway
                    </p>
                  </div>
                </div>

                <div className="flex-1 grid grid-cols-2 gap-8">
                  <div className="flex items-center justify-center">
                    <ResponsiveContainer width="100%" height={400}>
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          outerRadius={150}
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
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="space-y-4">
                    {useOfFundsData.categories.map((category) => (
                      <div key={category.name} className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium text-white">{category.name}</h4>
                          <span className="text-emerald-400">${category.amount.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-slate-800/30 h-1">
                          <div
                            className="bg-emerald-500 h-1"
                            style={{ width: `${(category.amount / useOfFundsData.totalRaise) * 100}%` }}
                          ></div>
                        </div>
                        <ul className="mt-2 space-y-1">
                          {category.items.slice(0, 2).map((item) => (
                            <li key={item.name} className="text-sm text-slate-300 flex justify-between">
                              <span>{item.name}</span>
                              <span>${item.amount.toLocaleString()}</span>
                            </li>
                          ))}
                          {category.items.length > 2 && (
                            <li className="text-sm text-slate-400 italic">+ {category.items.length - 2} more items</li>
                          )}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Slide>,

            // Marketing Strategy
            <Slide key="marketing" title="Strategic Marketing Approach">
              <div className="grid grid-cols-2 gap-8 h-full">
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center">
                      <Building className="h-5 w-5 text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-semibold">For Main Street RIAs</h3>
                  </div>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>Emphasize how AI enhances rather than replaces advisor expertise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Focus on freeing time for client relationships while providing institutional-quality insights
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>Use clear, jargon-free communication in all marketing materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>Highlight platform's ability to help RIAs differentiate in competitive marketplace</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>Provide case studies showing how similar-sized firms have leveraged the platform</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center">
                      <Lock className="h-5 w-5 text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-semibold">For Small-to-Mid-Sized Hedge Funds</h3>
                  </div>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>Emphasize cost-effective access to institutional-quality AI trading capabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Focus on how platform enables competition with larger rivals despite resource constraints
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>Demonstrate specific performance advantages and risk management improvements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>Highlight regulatory compliance capabilities and security features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>Emphasize how platform helps navigate complex regulatory requirements</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Slide>,

            // Conclusion
            <Slide key="conclusion" title="Conclusion" bgClass="bg-gradient-to-b from-slate-900 to-slate-950">
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="mb-8">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stewie%20file-uF4rVmvz7mERGiuOtag0CRpqLwaqOJ.png"
                    alt="Stewie Trader Logo"
                    width={200}
                    height={100}
                    className="h-auto"
                  />
                </div>
                <div className="max-w-3xl mx-auto text-center space-y-6">
                  <p className="text-slate-300">
                    Main Street RIAs and small-to-mid-sized hedge funds represent strategically valuable customer
                    segments for Stewie Trader. Both segments face significant challenges competing with larger rivals
                    and navigating an increasingly complex technological and regulatory landscape.
                  </p>
                  <p className="text-slate-300">
                    By addressing their specific needs for sophisticated yet accessible AI trading capabilities,
                    compliance support, operational efficiency, and competitive differentiation, Stewie Trader can
                    establish a strong market position before expanding to retail investors.
                  </p>
                  <div className="mt-8">
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2">
                      Get Started with Stewie Trader <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </Slide>,
          ]}
        />
      )}
    </>
  )
}


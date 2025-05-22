"use client"

import Image from "next/image"
import {
  ArrowRight,
  BarChart3,
  Building,
  ChevronRight,
  LineChart,
  Lock,
  PieChart,
  Target,
  Wallet,
  Quote,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RevenueChart } from "@/components/revenue-chart"
import { UseOfFundsSection } from "@/components/use-of-funds/use-of-funds-section"
import { PresentationModal } from "@/components/presentation/presentation-modal"
import { downloadFullReport } from "@/utils/download-report"

export default function ExecutiveSummary() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-12 md:py-24 flex flex-col items-center text-center">
        <div className="relative w-full max-w-3xl mx-auto mb-8">
          <div className="absolute -z-10 inset-0 opacity-20 blur-3xl bg-gradient-to-r from-green-400 to-emerald-600 rounded-full"></div>
          <div className="flex justify-center mb-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stewie%20file-RJo5HighogdbplTUECRD8pm0zPmVaz.png"
              alt="Stewie Trader Logo"
              width={180}
              height={180}
              className="rounded-full border-4 border-slate-800 shadow-xl"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
            Stewie Trader
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">AI-Powered Trading Platform Market Analysis</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white" onClick={downloadFullReport}>
              Download Full Report <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <PresentationModal />
          </div>
        </div>
      </header>

      {/* Quote Box */}
      <section className="container mx-auto px-4 py-6 mb-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-r from-slate-900/80 to-emerald-900/20 border border-slate-800 rounded-xl p-8">
            <div className="absolute top-6 left-8 text-emerald-500 opacity-30">
              <Quote className="h-16 w-16" />
            </div>
            <div className="relative z-10 ml-4">
              <p className="text-lg text-slate-200 italic leading-relaxed">
                "Assets managed by algorithm-driven and increasingly AI-enabled digital platforms will surge to almost
                US$6 trillion in the next 2 years"
              </p>
              <div className="mt-4 flex items-center">
                <div className="ml-3">
                  <p className="text-emerald-400 font-semibold">PwC Global AWM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-emerald-600/20 flex items-center justify-center">
              <Target className="h-6 w-6 text-emerald-500" />
            </div>
            <h2 className="text-3xl font-bold">Market Opportunity</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Strategic Customer Segments</h3>
              <p className="text-slate-300 mb-6">
                Our comprehensive analysis examines the needs, challenges, and opportunities for targeting Main Street
                registered investment advisors (RIAs) and small-to-mid-sized hedge funds as primary customer segments
                for our AI-powered trading platform.
              </p>
              <div className="flex items-center gap-2 text-slate-300">
                <div className="h-1 w-1 rounded-full bg-emerald-500"></div>
                <p>RIAs collectively manage trillions in assets</p>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <div className="h-1 w-1 rounded-full bg-emerald-500"></div>
                <p>Hedge fund industry exceeds $5 trillion in the US</p>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <div className="h-1 w-1 rounded-full bg-emerald-500"></div>
                <p>Both segments struggle with technology integration</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 rounded-xl -z-10"></div>
              <div className="p-6 border border-slate-800 rounded-xl bg-slate-900/50 h-full">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-lg font-medium text-white">Implementation Timeline</h4>
                    <p className="text-sm text-slate-400">Phased approach to market entry</p>
                  </div>
                  <LineChart className="h-5 w-5 text-emerald-500" />
                </div>
                <div className="space-y-4">
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
                        Extend focus to small-to-mid-sized hedge funds with tailored solutions for high frequency volume
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
                      <p className="text-xs text-slate-400">Leverage credibility to launch retail-focused offerings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Potential Visualization */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 mb-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-semibold text-emerald-400">Revenue Potential</h3>
                <p className="text-sm text-slate-400">Based on 4-6 basis points (0.04%-0.06%) on AUM traded</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-400 rounded-sm"></div>
                <span className="text-xs text-slate-300">4 basis points</span>
                <div className="w-3 h-3 bg-emerald-600 rounded-sm ml-2"></div>
                <span className="text-xs text-slate-300">6 basis points</span>
              </div>
            </div>

            {/* Client component for the chart */}
            <RevenueChart />

            <div className="mt-6 grid md:grid-cols-3 gap-6 text-center">
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
        </div>
      </section>

      {/* Customer Segments */}
      <section className="bg-slate-950/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="rias" className="w-full">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-emerald-600/20 flex items-center justify-center">
                    <Building className="h-6 w-6 text-emerald-500" />
                  </div>
                  <h2 className="text-3xl font-bold">Customer Segments</h2>
                </div>
                <TabsList className="bg-slate-800/50">
                  <TabsTrigger value="rias" className="data-[state=active]:bg-emerald-600">
                    RIAs
                  </TabsTrigger>
                  <TabsTrigger value="hedge-funds" className="data-[state=active]:bg-emerald-600">
                    Hedge Funds
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="rias" className="mt-0">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-slate-900 border-slate-800 shadow-lg">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-white flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-emerald-500" />
                        Market Landscape
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-slate-300">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Rapidly evolving space creating both challenges and opportunities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Shifting client expectations and increased regulatory complexities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Highly fragmented market where differentiation and efficiency are critical</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Competitive pressure from larger firms with greater resources</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-900 border-slate-800 shadow-lg">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-white flex items-center gap-2">
                        <PieChart className="h-5 w-5 text-emerald-500" />
                        Key Pain Points
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-slate-300">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Technology integration challenges with overwhelming number of options</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Balancing AI adoption with human relationship management</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Need for differentiation in crowded marketplace</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Compressed margins and rising operational costs</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-900 border-slate-800 shadow-lg">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-white flex items-center gap-2">
                        <Target className="h-5 w-5 text-emerald-500" />
                        Opportunity Areas
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-slate-300">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Client-facing differentiation tools with unique insights</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Operational efficiency solutions that streamline back-office tasks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Competitive intelligence capabilities to level the playing field</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Technology that enhances rather than replaces advisor expertise</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="hedge-funds" className="mt-0">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-slate-900 border-slate-800 shadow-lg">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-white flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-emerald-500" />
                        Market Landscape
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-slate-300">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Distinct challenges in competing with larger firms</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Increasingly complex regulatory landscape</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Industry exceeds $5 trillion in assets under management in the US</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Regulators "playing catch-up" in oversight of AI in trading</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-900 border-slate-800 shadow-lg">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-white flex items-center gap-2">
                        <PieChart className="h-5 w-5 text-emerald-500" />
                        Key Pain Points
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-slate-300">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Resource constraints vs. technological demands</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Regulatory compliance challenges with evolving AI oversight</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Operational efficiency and cost management pressures</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Cybersecurity concerns and data protection requirements</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-900 border-slate-800 shadow-lg">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-white flex items-center gap-2">
                        <Target className="h-5 w-5 text-emerald-500" />
                        Opportunity Areas
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-slate-300">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Democratized AI trading capabilities without massive infrastructure</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Enhanced risk management systems with real-time metrics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Cybersecurity and data protection features</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Cost-effective access to institutional-quality capabilities</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Use of Funds */}
      <UseOfFundsSection />

      {/* Marketing Strategy */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-emerald-600/20 flex items-center justify-center">
              <Wallet className="h-6 w-6 text-emerald-500" />
            </div>
            <h2 className="text-3xl font-bold">Strategic Marketing Approach</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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
                  <span>Focus on how platform enables competition with larger rivals despite resource constraints</span>
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
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stewie%20file-uF4rVmvz7mERGiuOtag0CRpqLwaqOJ.png"
                alt="Stewie Trader Logo"
                width={200}
                height={100}
                className="h-auto"
              />
            </div>
            <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
            <div className="text-slate-300 space-y-4">
              <p>
                Main Street RIAs and small-to-mid-sized hedge funds represent strategically valuable customer segments
                for Stewie Trader. Both segments face significant challenges competing with larger rivals and navigating
                an increasingly complex technological and regulatory landscape.
              </p>
              <p>
                By addressing their specific needs for sophisticated yet accessible AI trading capabilities, compliance
                support, operational efficiency, and competitive differentiation, Stewie Trader can establish a strong
                market position before expanding to retail investors.
              </p>
              <p>
                The market opportunity is substantial, with RIAs and hedge funds collectively managing trillions in
                assets while struggling with technology integration challenges. By focusing initially on these
                professional segments, Stewie Trader can buil By focusing initially on these professional segments,
                Stewie Trader can build credibility, refine capabilities, and establish a track record of success that
                will be valuable when expanding to retail investors in subsequent phases.
              </p>
            </div>
            <div className="mt-8">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                <a href="https://stewietrader.com" target="_blank" rel="noopener noreferrer">
                  Get Started with Stewie Trader
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stewie%20file-RJo5HighogdbplTUECRD8pm0zPmVaz.png"
                alt="Stewie Trader Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-slate-300">© 2025 Stewie Trader. All rights reserved.</span>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800" asChild>
                <a href="mailto:team@stewietrader.com">Contact</a>
              </Button>
              <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">
                Privacy
              </Button>
              <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">
                Terms
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


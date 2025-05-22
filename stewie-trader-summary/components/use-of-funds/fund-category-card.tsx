"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Clock } from "lucide-react"
import type { FundCategory } from "@/data/use-of-funds"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FundCategoryCardProps {
  category: FundCategory
  totalRaise: number
}

export function FundCategoryCard({ category, totalRaise }: FundCategoryCardProps) {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})

  const toggleItem = (itemName: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }))
  }

  const categoryPercentage = (category.amount / totalRaise) * 100

  return (
    <Card className="bg-slate-900 border-slate-800 shadow-lg overflow-hidden">
      <CardHeader className="pb-2 bg-slate-800/50">
        <CardTitle className="text-white flex items-center justify-between">
          <span>{category.name}</span>
          <div className="text-sm font-normal flex items-center gap-2">
            <span className="text-emerald-400">${category.amount.toLocaleString()}</span>
            <span className="text-slate-300">({categoryPercentage.toFixed(1)}%)</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="w-full bg-slate-800/30 h-1">
          <div className="bg-emerald-500 h-1" style={{ width: `${categoryPercentage}%` }}></div>
        </div>
        <ul className="divide-y divide-slate-800">
          {category.items.map((item) => (
            <li key={item.name} className="text-slate-300">
              <div
                className="p-3 flex items-center justify-between cursor-pointer hover:bg-slate-800/20"
                onClick={() => toggleItem(item.name)}
              >
                <div className="flex items-center gap-2">
                  {item.children && item.children.length > 0 ? (
                    expandedItems[item.name] ? (
                      <ChevronDown className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-emerald-500" />
                    )
                  ) : (
                    <div className="w-4"></div>
                  )}
                  <span>{item.name}</span>
                </div>
                <div className="text-sm flex items-center gap-2">
                  <span className="text-emerald-400">${item.amount.toLocaleString()}</span>
                  <span className="text-slate-400">({((item.amount / totalRaise) * 100).toFixed(1)}%)</span>
                </div>
              </div>

              {expandedItems[item.name] && item.children && (
                <div className="bg-slate-800/10 pl-6 pr-3 py-2 text-sm">
                  {item.description && <p className="text-slate-400 mb-2 italic">{item.description}</p>}
                  <ul className="space-y-1">
                    {item.children.map((child) => (
                      <li key={child.name} className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-slate-300">{child.name}</span>
                          {child.isAnnual && (
                            <div className="inline-flex items-center gap-1 text-xs bg-emerald-900/30 text-emerald-400 px-1.5 py-0.5 rounded">
                              <Clock className="h-3 w-3" />
                              <span>Annual Rate</span>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-400">${child.amount.toLocaleString()}</span>
                          <span className="text-slate-400">
                            ({child.percentage ? child.percentage : ((child.amount / item.amount) * 100).toFixed(1)}%)
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}


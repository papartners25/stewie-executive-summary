"use client"

import type { ReactNode } from "react"

interface SlideProps {
  title: string
  children: ReactNode
  bgClass?: string
}

export function Slide({ title, children, bgClass = "bg-slate-950" }: SlideProps) {
  return (
    <div className={`h-full w-full flex flex-col ${bgClass}`}>
      <div className="py-6 px-8 border-b border-slate-800">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-8">{children}</div>
    </div>
  )
}


export type FundItem = {
  name: string
  amount: number
  percentage?: number
  description?: string
  isAnnual?: boolean
  children?: FundItem[]
}

export type FundCategory = {
  name: string
  amount: number
  description?: string
  items: FundItem[]
}

export const useOfFundsData = {
  totalRaise: 1000000,
  runwayMonths: 24,
  categories: [
    {
      name: "Core Development & Infrastructure",
      amount: 390000,
      items: [
        {
          name: "AI Research and Development",
          amount: 150000,
          description:
            "Focus on core LLM financial integration and optimization",
          children: [
            { name: "Jr. Quantitative Analyst (24 months)", amount: 150000, isAnnual: true },
            { name: "Intern(s) (24 months)", amount: 25000, isAnnual: true },
          ],
        },
        {
          name: "Server Infrastructure",
          amount: 65000,
          children: [
            { name: "Cloud computing resources", amount: 35000, percentage: 54 },
            { name: "Data storage solutions", amount: 15000, percentage: 23 },
            { name: "Load balancing and disaster recovery", amount: 15000, percentage: 23 },
          ],
        },
      ],
    },
    {
      name: "Operational Expenses",
      amount: 455000,
      items: [
        {
          name: "Data Science and Engineering Team",
          amount: 295000,
          description:
            "Implementation and maintenance teams, operational staff who implement the algorithms developed in R&D (24-month total)",
          children: [
            { name: "Senior Data Engineer (24 months)", amount: 170000, isAnnual: true },
            { name: "CEO (24 months)", amount: 125000, isAnnual: true },
            { name: "Health Insurance & Benefits (24 months)", amount: 70000, isAnnual: true },
            { name: "Professional Development", amount: 10000 },
            { name: "Team Collaboration Tools", amount: 20000 },
          ],
        },
        {
          name: "Cybersecurity Measures",
          amount: 50000,
          children: [
            { name: "Security audits and encryption", amount: 30000, percentage: 60 },
            { name: "Threat detection and compliance", amount: 20000, percentage: 40 },
          ],
        },
        {
          name: "Regulatory Compliance and Licensing",
          amount: 60000,
          children: [
            { name: "Broker-dealer licensing preparation", amount: 30000, percentage: 50 },
            { name: "Compliance systems and documentation", amount: 30000, percentage: 50 },
          ],
        },
        {
          name: "User Interface Design & Development",
          amount: 20000,
          children: [
            { name: "Optimize existing components and leverage design system", amount: 20000, percentage: 100 },
          ],
        },
      ],
    },
    {
      name: "Marketing and Business Development",
      amount: 105000,
      items: [
        {
          name: "Targeted Marketing Campaigns",
          amount: 55000,
          children: [
            { name: "Digital marketing for RIAs and hedge funds", amount: 30000, percentage: 55 },
            { name: "Content creation and industry events", amount: 25000, percentage: 45 },
          ],
        },
        {
          name: "Sales and Business Development",
          amount: 40000,
          children: [
            { name: "Part-time BD representative and tools", amount: 40000, percentage: 100 },
          ],
        },
        {
          name: "Public Relations and Comms",
          amount: 10000,
          children: [
            { name: "Media relations and brand identity", amount: 10000, percentage: 100 },
          ],
        },
      ],
    },
    {
      name: "Contingency and Miscellaneous",
      amount: 50000,
      items: [
        {
          name: "Unforeseen Expenses",
          amount: 20000,
          children: [
            { name: "Unforeseen expenses reserve", amount: 20000, percentage: 100 },
          ],
        },
        {
          name: "Legal and Accounting Fees",
          amount: 25000,
          children: [
            { name: "Focus on broker-dealer license preparation", amount: 25000, percentage: 100 },
          ],
        },
        {
          name: "Office Space and Supplies",
          amount: 5000,
          children: [
            { name: "Primarily remote with occasional co-working", amount: 5000, percentage: 100 },
          ],
        },
      ],
    },
  ],
}
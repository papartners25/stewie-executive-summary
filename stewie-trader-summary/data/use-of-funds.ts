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
  totalRaise: 2000000,
  runwayMonths: 24,
  categories: [
    {
      name: "Core Development & Infrastructure",
      amount: 660000,
      items: [
        {
          name: "AI Research and Development",
          amount: 250000,
          description:
            "Creation of new algorithms and models, development of proprietary statistical arbitrage methods, pattern detection, and prediction systems",
          children: [
            { name: "Jr. Quantitative Analyst (24 months)", amount: 208000, isAnnual: true },
            { name: "Intern(s) (24 months)", amount: 29500, isAnnual: true },
            { name: "Third Party Services", amount: 12500 },
          ],
        },
        {
          name: "Server Infrastructure",
          amount: 250000,
          children: [
            { name: "Cloud computing resources", amount: 125000, percentage: 50 },
            { name: "Data storage solutions and databases", amount: 62500, percentage: 25 },
            { name: "Load balancing and scaling infrastructure", amount: 37500, percentage: 15 },
            { name: "Backup and disaster recovery systems", amount: 25000, percentage: 10 },
          ],
        },
        {
          name: "Specialized AI/ML Software and Tools",
          amount: 60000,
          children: [
            { name: "Premium ML optimization tools", amount: 24000, percentage: 40 },
            { name: "AI-powered risk management systems", amount: 21000, percentage: 35 },
            { name: "Specialized financial modeling packages", amount: 15000, percentage: 25 },
          ],
        },
        {
          name: "Financial Data Feeds",
          amount: 100000,
          children: [
            { name: "Real-time market data subscriptions", amount: 55000, percentage: 55 },
            { name: "Historical data for backtesting", amount: 30000, percentage: 30 },
            { name: "Alternative data sources", amount: 15000, percentage: 15 },
          ],
        },
      ],
    },
    {
      name: "Operational Expenses",
      amount: 933000,
      items: [
        {
          name: "Data Science and Engineering Team",
          amount: 725000,
          description:
            "Implementation and maintenance teams, operational staff who implement the algorithms developed in R&D (24-month total)",
          children: [
            { name: "Full-Stack Developer (24 months)", amount: 220000, isAnnual: true },
            { name: "Senior Data Engineer (24 months)", amount: 192000, isAnnual: true },
            { name: "CEO (24 months)", amount: 183000, isAnnual: true },
            { name: "Health Insurance & Benefits (24 months)", amount: 80000, isAnnual: true },
            { name: "Professional Development", amount: 20000 },
            { name: "Team Collaboration Tools", amount: 30000 },
          ],
        },
        {
          name: "Cybersecurity Measures",
          amount: 100000,
          children: [
            { name: "Security audits and penetration testing", amount: 35000, percentage: 35 },
            { name: "Firewall and threat detection systems", amount: 30000, percentage: 30 },
            { name: "Encryption and secure access infrastructure", amount: 25000, percentage: 25 },
            { name: "Security training and compliance", amount: 10000, percentage: 10 },
          ],
        },
        {
          name: "Regulatory Compliance and Licensing",
          amount: 60000,
          children: [
            { name: "Legal consultations for compliance", amount: 24000, percentage: 40 },
            { name: "Regulatory reporting systems", amount: 18000, percentage: 30 },
            { name: "Compliance documentation", amount: 12000, percentage: 20 },
            { name: "Industry certifications and audits", amount: 6000, percentage: 10 },
          ],
        },
        {
          name: "User Interface Design & Development",
          amount: 48000,
          children: [
            { name: "UX/UI design work", amount: 19200, percentage: 40 },
            { name: "Dashboard and visualization work", amount: 16800, percentage: 35 },
            { name: "User testing and refinement", amount: 7200, percentage: 15 },
            { name: "Design system documentation", amount: 4800, percentage: 10 },
          ],
        },
      ],
    },
    {
      name: "Marketing and Business Development",
      amount: 204000,
      items: [
        {
          name: "Targeted Marketing Campaigns",
          amount: 96000,
          children: [
            { name: "Digital marketing for RIAs and hedge funds", amount: 54000, percentage: 45 },
            { name: "Content creation", amount: 12000, percentage: 30 },
            { name: "Industry event sponsorships", amount: 18000, percentage: 15 },
            { name: "Marketing analytics and optimization", amount: 12000, percentage: 10 },
          ],
        },
        {
          name: "Sales and Business Development",
          amount: 90000,
          children: [
            { name: "Business development representative (24 months)", amount: 126000, isAnnual: true },
            { name: "Client onboarding resources", amount: 9000, percentage: 15 },
            { name: "CRM and sales enablement tools", amount: 9000, percentage: 15 },
            { name: "Sales training and materials", amount: 4500, percentage: 5 },
          ],
        },
        {
          name: "Public Relations and Comms",
          amount: 18000,
          children: [
            { name: "Media relations and press releases", amount: 9000, percentage: 50 },
            { name: "Industry analyst relations", amount: 5400, percentage: 30 },
            { name: "Brand identity development", amount: 3600, percentage: 20 },
          ],
        },
      ],
    },
    {
      name: "Contingency and Miscellaneous",
      amount: 200000,
      items: [
        {
          name: "Unforeseen Expenses",
          amount: 100000,
          children: [
            { name: "Emergency technical issues", amount: 40000, percentage: 40 },
            { name: "Market adaptation needs", amount: 35000, percentage: 35 },
            { name: "Opportunity fund for emerging trends", amount: 25000, percentage: 25 },
          ],
        },
        {
          name: "Legal and Accounting Fees",
          amount: 50000,
          children: [
            { name: "Corporate legal services", amount: 22500, percentage: 45 },
            { name: "Accounting and tax preparation", amount: 17500, percentage: 35 },
            { name: "IP protection and contracts", amount: 10000, percentage: 20 },
          ],
        },
        {
          name: "Office Space and Supplies",
          amount: 50000,
          children: [
            { name: "Co-working or office rental (24 months)", amount: 35000, isAnnual: true },
            { name: "Equipment and hardware", amount: 10000, percentage: 20 },
            { name: "Office supplies and utilities", amount: 5000, percentage: 10 },
          ],
        },
      ],
    },
  ],
}


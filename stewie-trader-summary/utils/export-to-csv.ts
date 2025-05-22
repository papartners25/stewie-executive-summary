import type { FundCategory } from "@/data/use-of-funds"

export function exportToCSV(
  data: { totalRaise: number; runwayMonths: number; categories: FundCategory[] },
  filename: string,
) {
  // Create CSV header
  let csvContent = "Category,Item,Sub-Item,Amount,Percentage,Notes\n"

  // Process each category
  data.categories.forEach((category) => {
    // Add category row
    csvContent += `${category.name},,,${formatAmount(category.amount)},${formatPercentage((category.amount / data.totalRaise) * 100)},\n`

    // Process items in each category
    category.items.forEach((item) => {
      // Add item row
      csvContent += `${category.name},${item.name},,${formatAmount(item.amount)},${formatPercentage((item.amount / data.totalRaise) * 100)},\n`

      // Process children if they exist
      if (item.children && item.children.length > 0) {
        item.children.forEach((child) => {
          // Add child row
          csvContent += `${category.name},${item.name},${child.name},${formatAmount(child.amount)},${formatPercentage(child.percentage || (child.amount / item.amount) * 100)},${child.isAnnual ? `Annual rate for ${data.runwayMonths} months` : ""}\n`
        })
      }
    })
  })

  // Add total row
  csvContent += `Total,,,${formatAmount(data.totalRaise)},100%,${data.runwayMonths}-month runway\n`

  // Create and trigger download
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
  const link = document.createElement("a")
  const url = URL.createObjectURL(blob)

  link.setAttribute("href", url)
  link.setAttribute("download", filename)
  link.style.visibility = "hidden"

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

function formatAmount(amount: number): string {
  return `$${amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

function formatPercentage(percentage: number): string {
  return `${percentage.toFixed(1)}%`
}


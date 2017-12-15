export const allMonthlySummaryByCategoryAll = state => {
  let summary = {}
  let categories = state.categories.map(category => {
    return Object.assign({}, category, {amount: 0})
  })

  Object.keys(state.records).map(day => {
    let yearMonth = day.slice(0, 4)
    let monthSummary
    if (!summary.hasOwnProperty(yearMonth)) {
      summary[yearMonth] = categories.slice(0)
    }
    monthSummary = summary[yearMonth]

    Object.values(state.records[day]).map(record => {
      let category = monthSummary.find(summaryCategory => {
        return summaryCategory.code === record.category
      })

      category.amount += record.amount
    })
  })

  return summary
}

export const monthlySummaryByCategoryWithZero = (state, getters) => {
  // return getters.allMonthlySummaryByCategoryAll[state.selectedMonth]
  return getters.allMonthlySummaryByCategoryAll['1712'] || []
}

export const monthlySummaryByCategory = (state, getters) => {
  return getters.monthlySummaryByCategoryWithZero.filter(category => {
    return category.amount > 0
  })
}

export const getCategoryFromCode = (state) => (code) => {
  return state.categories.find(category => {
    return category.code === code
  })
}

export const getCategoryIconFromCode = (state, getters) => (code) => {
  let category = getters.getCategoryFromCode(code)
  return category ? category.icon : ''
}

export const getCategoryNameFromCode = (state, getters) => (code) => {
  let category = getters.getCategoryFromCode(code)
  return category ? category.name : ''
}

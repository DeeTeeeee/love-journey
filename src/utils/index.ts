import moment from 'moment'

export const calculateTotalDays = (anniversary: string) => {
  const startDate = moment(anniversary, 'DD/MM/YYYY')
  const now = moment()
  return now.diff(startDate, 'days')
}

export const calculateTimeFromAnniversary = (anniversary: string) => {
  const startDate = moment(anniversary, 'DD/MM/YYYY')
  const currentDate = moment()
  const diff = moment.duration(currentDate.diff(startDate))
  const year = diff.years()
  const month = diff.months()
  const week = Math.floor(diff.days() / 7)
  const day = diff.days() - week * 7
  return {year, month, week, day}
}

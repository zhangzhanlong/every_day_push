import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(duration)
dayjs.extend(LocalizedFormat)

const WEEKS: { [key: number]: string } = {
  1: '星期一',
  2: '星期二',
  3: '星期三',
  4: '星期四',
  5: '星期五',
  6: '星期六',
  0: '星期日',
}

export const weekToday = () => {
  const week = dayjs().day()
  console.log("zzzz"+week)
  console.log("zzzz"+dayjs().day())
  console.log("zzzz"+dayjs())
  return WEEKS[week]
}

export default dayjs

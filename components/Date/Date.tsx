import { format, parseISO } from 'date-fns'

export const Date = ({ dateString }: { dateString: string }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'do LLLL yyyy')}</time>
}

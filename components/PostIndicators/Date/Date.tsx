import { ClockIcon } from '@heroicons/react/24/outline'
import { format, parseISO } from 'date-fns'

export const Date = ({ dateString, className }: { dateString: string; className?: string }) => {
  const date = parseISO(dateString)
  return (
    <div
      className={`flex flex-row space-x-1 text-secondary-text dark:text-dark-secondary-text items-center ${className}`}>
      <ClockIcon className={'h-4 w-4'} />
      <time dateTime={dateString}>{format(date, 'do LLLL yyyy')}</time>
    </div>
  )
}

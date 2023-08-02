import { BookOpenIcon } from '@heroicons/react/24/outline'

export const ReadTime = ({ readMins, className }: { readMins: number; className?: string }) => (
  <div
    className={`flex flex-row space-x-1 text-secondary-text dark:text-dark-secondary-text items-center ${className}`}>
    <BookOpenIcon className={'h-4 w-4'} />
    <p>{`${readMins} min read`}</p>
  </div>
)

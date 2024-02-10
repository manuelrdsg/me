import { MapIcon } from '@heroicons/react/24/outline'

export const Location = ({ location, className }: { location: string; className?: string }) => (
  <div
    className={`flex flex-row space-x-1 text-secondary-text dark:text-dark-secondary-text items-center ${className}`}>
    <MapIcon className={'h-4 w-4'} />
    <p>{location}</p>
  </div>
)

import Image from 'next/image'

const ProfileImage = () => {
  return (
    <div className="relative block border border-dark-primary rounded-xl overflow-hidden shadow-sm dark:shadow-md w-full h-full">
      <div className="h-full w-full relative overflow-hidden bg-neutral-100">
        <Image
          priority
          className="h-full w-full object-cover text-transparent opacity-100 scale-150 grayscale-0 brightness-100 dark:grayscale-15 dark:brightness-90"
          fill
          src={'https://res.cloudinary.com/manuelrdsg/image/upload/v1731512007/Portfolio/profile.webp'}
          alt="Profile picture"
          style={{ objectPosition: 'center 30%' }}
        />
      </div>
    </div>
  )
}

export default ProfileImage

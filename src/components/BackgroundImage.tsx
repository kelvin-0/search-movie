import Image from 'next/image'
import { ReactNode } from 'react'

type BgProp = {
  id: string
  isRemote: Boolean
  path: string
  children: ReactNode
}
const BackgroundImage: React.FC<BgProp> = ({
  id,
  isRemote,
  path,
  children,
}) => {
  let imageSrc: string = isRemote
    ? `https://image.tmdb.org/t/p/original/${path}`
    : path

  return (
    <div key={id} className={`shrink-0 relative w-full h-auto`}>
      <div className="flex justify-center items-center  relative w-full h-auto z-10 opacity-90 bg-slate-50 opacity-85 dark:bg-slate-950">
        {children}
      </div>
      <Image
        className="snap-center rounded-md object-cover cursor-pointer"
        fill
        src={imageSrc}
        alt={''}
        sizes="99vw"
        priority
      />
    </div>
  )
}
export default BackgroundImage

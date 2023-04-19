import Image from "next/image";
import { ReactNode } from "react";

type BgProp = {
    id: string,
    title: string,
    backdrop_path?: string,
    children: ReactNode
}
const BackgroundImage: React.FC<BgProp> = ({id, title, backdrop_path, children}) => {
  return (
    <div key={id} className={`shrink-0 relative w-full min-h-screen h-auto`}>
      <div className="flex justify-center items-center bg-gray-900 relative w-full min-h-screen h-auto z-10 opacity-90">
        {children}
      </div>
      <Image
          className="snap-center rounded-md object-cover cursor-pointer"
          fill
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt={""}
          sizes="99vw"
          priority
        />
    </div>
  );
};
export default BackgroundImage
import Image from "next/image";

type MovieProp = {
    id: string,
    title: string,
    poster_path: string,
    isLarge?: Boolean
}
const MyImage: React.FC<MovieProp> = ({id, title, poster_path, isLarge}) => {
  let sizeClassname: string = isLarge ? "w-[130px] h-[200px] sm:w-[300px] sm:h-[450px]" : "w-[130px] h-[200px]"
  return (
    <div key={id} className={`shrink-0 relative overflow-hidden ${sizeClassname}`} >
      <div
        role="status"
        className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center w-[98%] mx-auto h-full"
      >
        <div className="rounded-md flex h-[98%] my-auto items-center justify-center  bg-gray-300 sm:w-96 dark:bg-gray-700">
          <svg
            className="w-12 h-12 text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 640 512"
          >
            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
          </svg>
        </div>

        <span className="sr-only">Loading...</span>
      </div>
      <Image
          className="snap-center rounded-md object-cover cursor-pointer"
          fill
          src={`https://image.tmdb.org/t/p/${isLarge ? "original" : "w440_and_h660_face"}/${poster_path}`}
          alt={`Movie poster of "${title}"`}
          sizes="99vw"
        />
    </div>
  );
};
export default MyImage
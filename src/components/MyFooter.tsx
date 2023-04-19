import { Footer } from "flowbite-react";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsInstagram,
  BsDribbble,
} from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

export default function MyFooter() {
  return (
    <Footer container={true} className="mt-auto">
      <div className="w-full">
        <div className="w-full justify-between md:flex ">
          <div className="flex items-center">
            <Link href="/" className="flex flex-wrap">
              <Image
                src={"Logo.svg"}
                className="mr-3 h-6 sm:h-9"
                alt="Movie Finder Logo"
                width="64"
                height="64"
              />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                Movie Finder
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="https://www.themoviedb.org/documentation/api">TMDB API</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Movie Finder™" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

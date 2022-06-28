import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  HomeIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between bg-white max-w-6xl mx-5 xl:mx-auto cursor-pointer lg:mt-3 mt-6">
        {/* Left */}
        <div className="relative hidden lg:inline-grid h-24 w-24">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Mid */}
        <div className="relative p-3 rounded-md">
          <div className="absolute inset-y-0 pl-2 lg:pb-8 flex items-center poniter-events-none">
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            className="bg-gray-50 block w-full lg:px-9 px-7 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
            type="text"
            placeholder="Tìm kiếm"
          ></input>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="h-10 w-10 text-black" />
          <MenuIcon className="h-10 w-10 md:hidden cursor-pointer" />
          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-right">
              3
            </div>
          </div>

          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <img
            src="https://video.fsgn5-3.fna.fbcdn.net/v/t1.6435-1/123584179_1449709761900168_1445279572392526145_n.jpg?stp=dst-jpg_p160x160&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=RndPmtniwwgAX-bJRLW&_nc_ht=video.fsgn5-3.fna&oh=00_AT-RkfUAgk4Yuzgl5cgWb3YPyvXAZ7_taEfjYJTDSpUtEw&oe=62D979AF"
            alt="profile picture"
            className="h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;

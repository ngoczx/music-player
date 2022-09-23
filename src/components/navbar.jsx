import { React } from 'react';
import { AiFillHome } from 'react-icons/ai';
import {
  BsFillBarChartFill,
  BsMusicNoteBeamed,
  BsFillInfoCircleFill,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = ({ type, setType }) => {
  return (
    <div>
      <Link to="/" onClick={() => setType('home')}>
        <li
          className=" hidden lg:block py-5 text-center text-3xl text-purple-400"
          id="logo"
        >
          MusicZX
        </li>
      </Link>
      <ul className="flex lg:flex-col lg:mt-10 justify-center items-center md:gap-10 text-purple-400 text-3xl">
        <Link to="/" onClick={() => setType('home')}>
          <li
            className={`lg:px-20 px-5 py-5 hover:bg-zinc-100 cursor-pointer relative ${
              type === 'home' &&
              "bg-zinc-100 after:content-[' '] after:h-1 after:w-full after:left-0 after:bottom-0 after:absolute after:bg-purple-500 lg:after:h-full lg:after:w-[5px] lg:after:top-0"
            }`}
          >
            <AiFillHome />
          </li>
        </Link>
        <Link to="/page/top10">
          <li
            className={`lg:px-20 px-5 py-5 hover:bg-zinc-100 cursor-pointer relative ${
              type === 'top10' &&
              "bg-zinc-100 after:content-[' '] after:h-1 after:w-full after:left-0 after:bottom-0 after:absolute after:bg-purple-500 lg:after:h-full lg:after:w-[5px] lg:after:top-0"
            }`}
          >
            <BsFillBarChartFill />
          </li>
        </Link>
        <Link to="/page/new-release">
          <li
            className={`lg:px-20 px-5 py-5 hover:bg-zinc-100 cursor-pointer relative ${
              type === 'new-release' &&
              "bg-zinc-100 after:content-[' '] after:h-1 after:w-full after:left-0 after:bottom-0 after:absolute after:bg-purple-500 lg:after:h-full lg:after:w-[5px] lg:after:top-0"
            }`}
          >
            <BsMusicNoteBeamed />
          </li>
        </Link>
        <Link to="/page/socials">
          <li
            className={`lg:px-20 px-5 py-5 hover:bg-zinc-100 cursor-pointer relative ${
              type === 'socials' &&
              "bg-zinc-100 after:content-[' '] after:h-1 after:w-full after:left-0 after:bottom-0 after:absolute after:bg-purple-500 lg:after:h-full lg:after:w-[5px] lg:after:top-0"
            }`}
          >
            <BsFillInfoCircleFill />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;

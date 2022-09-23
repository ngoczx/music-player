import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NhacCuaTui from 'nhaccuatui-api-full';
import Songlist from './songlist';
import socials from '../assets/socials.json';

const Page = ({ getType }) => {
  const { page } = useParams();
  const [home, setHome] = useState([]);

  useEffect(() => {
    NhacCuaTui.getHome().then((data) => setHome(data));
  }, []);

  useEffect(() => {
    getType(page);
  }, [page, getType]);

  return (
    <div className="bg-gray-100 w-full relative px-3 pb-36 lg:px-10 min-h-[100vh] lg:h-[100vh]">
      {page === 'top10' && (
        <div className="mt-6">
          <h2 className="font-semibold text-2xl">Top 10</h2>
          <div className="flex flex-wrap">
            {home.ranking &&
              home.ranking.song.map((element) => (
                <Songlist element={element} key={element.songKey}></Songlist>
              ))}
          </div>
        </div>
      )}
      {page === 'new-release' && (
        <div className="mt-10">
          <h2 className="font-semibold text-2xl">Mới phát hành</h2>
          <div className="flex flex-wrap">
            {home.newRelease &&
              home.newRelease.song.map((element) => (
                <Songlist element={element} key={element.key}></Songlist>
              ))}
          </div>
          <h2 className="font-semibold text-2xl">Video</h2>
          <div className="flex flex-wrap justify-between">
            {home.video &&
              home.video.slice(0, 6).map((element) => (
                <div
                  className="mt-6 w-1/2 md:w-1/3 lg:w-1/6 p-2"
                  key={element.key}
                >
                  <img
                    src={element.thumbnail}
                    alt="img"
                    className="cursor-pointer rounded-md"
                  ></img>
                  <p className="text-xs md:text-base">{element.title}</p>
                </div>
              ))}
          </div>
        </div>
      )}
      {page === 'socials' && (
        <div className="mt-6">
          <h2 className="font-semibold text-2xl">Mạng xã hội</h2>
          <div className=" md:flex flex-wrap md:gap-5 lg:gap-20">
            {socials.map((social) => (
              <div className="socials w-full md:w-[48%] lg:w-1/4 h-[25vh] relative cursor-pointer overflow-hidden rounded-lg mt-10 shadow-2xl">
                <div
                  className="infor justify-center flex-col text-white text-2xl font-semibold flex items-center absolute top-0 left-0 w-full h-full opacity-1 z-[1] opacity-0 hover:opacity-100 duration-[450ms] ease-in-out"
                  key={social.id}
                >
                  <h2>{social.name}</h2>
                  <button
                    type="button"
                    className="inline-flex justify-center mt-2 text-white text-lg py-2 px-10 rounded-full border-purple-400 border-2 hover:bg-purple-400"
                  >
                    <a href={social.link} target="_blank" rel="noreferrer">
                      Ghé thăm
                    </a>
                  </button>
                </div>
                <img
                  src={social.img}
                  alt="img"
                  className="rounded-lg absolute h-full w-full object-cover cursor-pointer duration-200 ease-linear z-0"
                ></img>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;

import { React, useState, useEffect } from 'react';
import NhacCuaTui from 'nhaccuatui-api-full';
import { BiSearch, BiHeart, BiCloudDownload } from 'react-icons/bi';
import { BsPlayFill, BsHeartFill } from 'react-icons/bs';
import songs from '../assets/songs.json';

const Content = ({ song, setSong }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    NhacCuaTui.getTopics().then((data) => setTopics(data));
  }, []);

  return (
    <div className="content bg-gray-100 w-full relative lg:h-[100vh] flex flex-col lg:flex-row">
      <div className="left lg:w-1/2 w-full md:p-8 px-3 py-10">
        <div className="flex rounded-full bg-white items-center justify-center">
          <BiSearch className="text-2xl text-gray-400 " />
          <input
            type="text"
            placeholder="Tìm bài hát..."
            className="w-[90%] px-7 py-2 focus:outline-none"
          ></input>
        </div>
        <div className="mt-6">
          <h2 className="font-semibold">Đang thịnh hành</h2>
          <div className="background md:px-10 px-2 py-10 mt-4 rounded-xl">
            <h2 className="font-semibold text-2xl">On top of the world</h2>
            <div className="buttons mt-10">
              <button
                type="button"
                className="inline-flex justify-center text-sm py-2 px-7 border-2 border-transparent rounded-full text-white bg-purple-400 hover:bg-purple-500"
              >
                Theo dõi
              </button>
              <button
                type="button"
                className="inline-flex justify-center text-sm py-2 px-7 border-2 border-purple-400 rounded-full text-black hover:bg-purple-400 hover:text-white ml-7 "
              >
                Khám phá ngay
              </button>
            </div>
          </div>
          <h2 className="font-semibold mt-6">Danh sách nhạc</h2>
          <div className="mt-4 overflow-hidden overflow-y-scroll h-[450px]">
            {songs.map((element) => (
              <div
                className={`flex items-center text-2xl py-4 justify-between rounded-xl cursor-pointer md:px-2 hover:bg-white ${
                  song.id === element.id && 'bg-white'
                }`}
                onClick={() => {
                  setSong(element);
                }}
                key={element.id}
              >
                <div className="flex items-center">
                  <BiHeart />
                  <p className="ml-3 md:text-base text-xs">{element.name}</p>
                </div>
                <div className="flex items-center">
                  <BsHeartFill className="text-purple-400 mr-2" />
                  <p className="text-sm mr-4">15k</p>
                  <BsPlayFill />
                  <p className="text-sm">29k</p>
                  <a href={element.url}>
                    <BiCloudDownload className="ml-2 text-3xl hidden md:block" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="right lg:w-1/2 md:p-8 p-2">
        <Topics />
      </div>
    </div>
  );

  function Topics() {
    return (
      <div className="Topics mb-[88px]">
        <h2 className="text-2xl font-semibold">Chủ đề</h2>
        <div className="flex flex-wrap mt-10">
          {topics.topic &&
            topics.topic.slice(0, 12).map((topic) => (
              <div
                className="w-1/2 md:w-1/3 lg:w-1/4 px-3 py-5"
                key={topic.key}
              >
                <div className="h-[160px] relative overflow-hidden rounded-lg">
                  <img
                    src={topic.thumbURL}
                    alt="img"
                    className="rounded-lg absolute hover:scale-125 h-full w-full object-cover cursor-pointer duration-200 ease-linear"
                  />
                </div>
                <p>{topic.title}</p>
              </div>
            ))}
        </div>
      </div>
    );
  }
};
export default Content;

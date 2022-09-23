import { React } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import songs from '../assets/songs.json';
import {
  BsPlayFill,
  BsFillPauseFill,
  BsSkipEndFill,
  BsSkipStartFill,
} from 'react-icons/bs';

const Music = ({ song, setSong }) => {
  const handleClickNext = () => {
    if (song.id || song.id === 0) {
      setSong(songs[song.id + 1]);
      if (song.id === songs.length - 1) {
        setSong(songs[0]);
      }
    }
  };

  const handleClickPrev = () => {
    if (song.id) {
      setSong(songs[song.id - 1]);
    }
    if (song.id === 0) {
      setSong(songs[songs.length - 1]);
    }
  };

  return (
    <div className="fixed lg:absolute w-full z-10 bottom-0  flex ">
      <div></div>
      <AudioPlayer
        src={song.url}
        customIcons={{
          play: <BsPlayFill className="scale-125" />,
          pause: <BsFillPauseFill className="scale-125" />,
          previous: <BsSkipStartFill />,
          next: <BsSkipEndFill />,
        }}
        header={
          'Đang phát: ' + (song.name || ' ') + ' - ' + (song.author || ' ')
        }
        onEnded={handleClickNext}
        layout="Stacked-Reverse"
        showJumpControls={false}
        showSkipControls={true}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrev}
        className="border-1 shadow-none text-xs md:text-base"
      ></AudioPlayer>
    </div>
  );
};

export default Music;

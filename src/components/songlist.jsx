import React from 'react';

const Songlist = ({ element }) => {
  return (
    <div className="flex items-center py-8 w-full md:w-1/2">
      <img
        src={element.thumbnail}
        alt="img"
        className="w-24 rounded-full"
      ></img>
      <div className="ml-6">
        <h2 className="font-semibold ">{element.title}</h2>
        {element.artists.map((artist) => (
          <span key={artist.artistId}>{artist.name}, </span>
        ))}
      </div>
    </div>
  );
};

export default Songlist;

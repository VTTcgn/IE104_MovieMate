import React from 'react';

const movies = [
  { title: "Suất Chiếu Đặc Biệt", imgSrc: "https://via.placeholder.com/200x300" },
  { title: "Joker", imgSrc: "https://via.placeholder.com/200x300" },
  { title: "Mộ Đom Đóm", imgSrc: "https://via.placeholder.com/200x300" },
  { title: "Đội Quân Cảm Tử", imgSrc: "https://via.placeholder.com/200x300" },
];

const MovieSection = ({ title }) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold p-4">{title}</h2>
      <div className="flex space-x-4 overflow-x-scroll p-4">
        {movies.map((movie, index) => (
          <div key={index} className="w-[200px]">
            <img src={movie.imgSrc} alt={movie.title} className="w-full h-[300px] object-cover rounded-md" />
            <h3 className="text-lg mt-2">{movie.title}</h3>
            <button className="bg-yellow-500 px-4 py-2 mt-2 rounded-md">Mua Vé</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSection;

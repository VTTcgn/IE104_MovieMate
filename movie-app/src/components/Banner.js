import React, { useState } from 'react';

const movies = [
  {
    id: 1,
    title: "Doctor Strange",
    description: "Doctor Strange in the Multiverse of Madness",
    releaseDate: "19th Feb, 2022",
    backgroundImage: "https://thanhnien.mediacdn.vn/Uploaded/nhuvnq/2022_02_14/generic-poster-8842.jpg",
    thumbnail: "https://thanhnien.mediacdn.vn/Uploaded/nhuvnq/2022_02_14/generic-poster-8842.jpg",
    rating: 5,
  },
  {
    id: 2,
    title: "The Avengers",
    description: "The Avengers: Earth's Mightiest Heroes",
    releaseDate: "25th Apr, 2012",
    backgroundImage: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e8/Avengers-Infinity_War-Official-Poster.jpg/330px-Avengers-Infinity_War-Official-Poster.jpg",
    thumbnail: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/e8/Avengers-Infinity_War-Official-Poster.jpg/330px-Avengers-Infinity_War-Official-Poster.jpg",
    rating: 4,
  },
  {
    id: 3,
    title: "Thor",
    description: "Thor: The God of Thunder",
    releaseDate: "6th May, 2011",
    backgroundImage: "https://thanhnien.mediacdn.vn/Uploaded/nhuvnq/2022_07_07/poster-thor-viet-9761.jpg",
    thumbnail: "https://thanhnien.mediacdn.vn/Uploaded/nhuvnq/2022_07_07/poster-thor-viet-9761.jpg",
    rating: 4,
  },
  // Add more movies if necessary
];

const Banner = () => {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]); // Default selected movie

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} className="text-yellow-400">★</span>);
      } else {
        stars.push(<span key={i} className="text-white-300">★</span>); // Màu trắng hoặc xám cho sao không được đánh giá
      }
    }
    return stars;
  };

  return (
    <div className="relative w-full h-[600px] bg-cover bg-center" style={{ backgroundImage: `url(${selectedMovie.backgroundImage})` }}>
      {/* Left content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start px-10">
        <div className="text-white max-w-xl">
          <div className="flex items-center space-x-2 mb-4">
            {renderStars(selectedMovie.rating)}
          </div>
          <h1 className="text-5xl font-bold mb-4">{selectedMovie.title}</h1>
          <h3 className="text-xl italic mb-2">{selectedMovie.description}</h3>
          <p className="text-yellow-400 mb-2">Released on {selectedMovie.releaseDate}</p>
          <p className="mb-6">While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts... <a href="#" className="text-blue-400 hover:underline">Read more</a></p>
          <div className="flex space-x-4">
            <button className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-300 transition">Watch Trailer</button>
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-md hover:bg-yellow-600 transition">Book Tickets</button>
          </div>
        </div>
      </div>

      {/* Right content: thumbnails with scroll */}
      <div className="absolute right-10 top-20 h-[400px] overflow-y-auto space-y-4 custom-scrollbar">
        {movies.map((movie) => (
          <div 
            key={movie.id} 
            className={`bg-gray-800 hover:bg-gray-700 transition p-2 rounded-md cursor-pointer ${selectedMovie.id === movie.id ? 'ring-2 ring-yellow-500' : ''}`}
            onClick={() => setSelectedMovie(movie)}
          >
            <img 
              src={movie.thumbnail} 
              alt={movie.title} 
              className="w-[150px] h-[100px] object-cover rounded-md" 
            />
            <p className="text-white text-center mt-2">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;

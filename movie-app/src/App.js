import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import QuickBooking from './components/QuickBooking';
import MovieSection from './components/MovieSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Banner />
      <QuickBooking />
      <MovieSection title="Phim Đang Hot" />
      <MovieSection title="Phim Đang Chiếu" />
      <Footer />
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/movieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const responce = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
      .catch((err) => {
        console.log("Error :", err);
      });
    dispatch(addMovies(responce.data));
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
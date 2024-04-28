import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectorActorPopular,
  selectorMovieLegacy,
  selectorMoviePopular,
  selectorMovieTrending,
  selectorTvshowPopular,
} from "../../redux/pages/home/slice";
import SliderCard from "../../components/SliderCard";
import classes from "./style.module.css";
import ShowCase from "../../components/ShowCase";
import { SliderBanner } from "../../components/SliderBanner";

const HomePage = () => {
  const movieTrendingData = useSelector(selectorMoviePopular);
  const moviePopularData = useSelector(selectorMovieTrending);
  const movieLegacyData = useSelector(selectorMovieLegacy);
  const tvshowData = useSelector(selectorTvshowPopular);
  const actorPopularData = useSelector(selectorActorPopular);
  const IMG_ORG = "https://image.tmdb.org/t/p/original/";
  const IMG_500 = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    // change title
    document.title = "Home";
  });

  return (
    <div className="d-flex flex-column">
      <SliderBanner
        data={movieTrendingData}
        imgOrg={IMG_ORG}
        img500={IMG_500}
      />
      <ShowCase
        data={moviePopularData}
        type="movie"
        to="/movie-trending"
        titleMain="Movies Trending"
        img500={IMG_500}
      />
      <ShowCase
        data={movieLegacyData}
        type="movie"
        to="/movie-legacy"
        titleMain="Movies Legacy"
        img500={IMG_500}
      />
      <ShowCase
        data={tvshowData}
        type="tvshow"
        to="/tvshow-popular"
        titleMain="TV Shows"
        img500={IMG_500}
      />
      {/* cast */}
      <SliderCard
        data={actorPopularData}
        img500={IMG_500}
        extraClass={classes.actor_container}
        title="Community"
      />
    </div>
  );
};
export default HomePage;

import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./style.module.css";
import SliderCard from "../../components/SliderCard";
import { Banner } from "../../components/Banner";
import {
  getMoviesAndTvshowBannerDetails,
  getMoviesAndTvshowCastDetails,
  getMoviesAndTvshowGenresDetails,
  getMoviesAndTvshowRecommendDetails,
  getMoviesAndTvshowTrailerDetails,
} from "../../services/api/details";

const DetailsMoviePage = (props) => {
  const { type, titleDetail } = props;
  const { id } = useParams();
  const [banner, setBanner] = useState({});
  const [genres, setGenres] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [casts, setCasts] = useState([]);
  const [recommends, setRecommends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const IMG_ORG = "https://image.tmdb.org/t/p/original/";
  const IMG_500 = "http://image.tmdb.org/t/p/w500/";

  // format date
  const formatDate = (date) => {
    const [dateStr] = new Date(date)
      .toLocaleString("default", {
        month: "short",
        year: "numeric",
        day: "numeric",
      })
      .split("T");
    return dateStr;
  };

  // fetch movie api
  const getDetailsMovie = useCallback(async () => {
    try {
      setIsLoading(true);
      const resBannerDetails = await getMoviesAndTvshowBannerDetails(type, id);
      const resGenresDetails = await getMoviesAndTvshowGenresDetails(type, id);
      const resTrailerDetails = await getMoviesAndTvshowTrailerDetails(
        type,
        id
      );
      const resCastDetails = await getMoviesAndTvshowCastDetails(type, id);
      const resRecommendDetails = await getMoviesAndTvshowRecommendDetails(
        type,
        id
      );
      if (resBannerDetails) {
        setBanner(resBannerDetails);
      }
      if (resGenresDetails) {
        setGenres(resGenresDetails.genres);
      }
      if (resTrailerDetails) {
        setTrailer(resTrailerDetails.results);
      }
      if (resCastDetails) {
        setCasts(resCastDetails.cast);
      }
      if (resRecommendDetails) {
        setRecommends(resRecommendDetails.results);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [id, type]);

  useEffect(() => {
    getDetailsMovie();
  }, [getDetailsMovie]);

  // change title
  useEffect(() => {
    let title;
    if (isLoading) {
      title = `${titleDetail}`;
    } else {
      title = `${titleDetail} | ${
        banner?.original_title || banner?.original_name
      }`;
    }
    document.title = title;
  }, [isLoading, banner, titleDetail]);

  const releaseTimeMovie = () => {
    if (banner.first_air_date || banner.release_date) {
      return formatDate(banner.first_air_date || banner.release_date);
    }
  };

  return (
    <React.Fragment>
      <Banner
        img500={IMG_500}
        imgOrg={IMG_ORG}
        backdropPath={banner.backdrop_path}
        trailerData={trailer}
        posterPath={banner.poster_path}
        alt={banner.name}
        title={banner.original_title || banner.name}
        overview={banner.overview}
        genresData={genres}
        releaseTimeMovie={releaseTimeMovie()}
      />
      <div className="py-3">
        {/* cast */}
        <SliderCard
          data={casts}
          type="cast"
          img500={IMG_500}
          extraClass={classes.cast_container}
          title="Cast"
        />
      </div>
      {/* recommend */}
      <SliderCard
        data={recommends}
        type={type}
        img500={IMG_500}
        extraClass={classes.recommend_container}
        title="Recommendations"
      />
    </React.Fragment>
  );
};
export default DetailsMoviePage;

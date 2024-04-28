import React, { useCallback, useEffect, useState } from "react";
import classes from "./style.module.css";
import Card from "../../components/Card";
import SortTable from "../../components/SortTable";
import { getMoviesLegacy } from "../../services/api/movie";

//option sort
const options = [
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
];

const MovieLegacyListPage = () => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [movies, setMovies] = useState([]);
  const [hasError, setHasError] = useState(false);
  const IMG_500 = "http://image.tmdb.org/t/p/w500/";

  // fetch movie api
  const getMovies = useCallback(async () => {
    try {
      const resMovieLegacyData = await getMoviesLegacy(page);
      if (resMovieLegacyData) {
        setMovies((prevMovies) => [
          ...prevMovies,
          ...resMovieLegacyData.results,
        ]);
      }
      // state show button show more
      setTotalPage(resMovieLegacyData.total_pages);
      setHasError(false);
    } catch (error) {
      setHasError(true);
      console.error(error);
    }
  }, [page]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  // show more handle
  const showMoreHandle = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // change title
  useEffect(() => {
    document.title = "Movies Legacy";
  }, []);

  return (
    <React.Fragment>
      <div className="d-flex justify-content-lg-between align-items-center justify-content-center px-4">
        <h1>Movies Legacy</h1>
      </div>
      <div className="d-flex flex-column flex-lg-row gap-lg-4 px-4">
        <div className="col-lg-3 col-12">
          <SortTable options={options} disabled={true} />
        </div>
        <div
          className={`d-flex align-items-center flex-column col-lg-9 col-12`}
        >
          <div
            className={`d-flex flex-row flex-wrap gap-4 py-2 justify-content-center`}
          >
            {/* error */}
            {hasError && (
              <div className="col-12 text-center p-2">
                <h1>Failed to fetch data. Please try again.</h1>
              </div>
            )}
            {/* list */}
            {!hasError &&
              movies.map((movie, index) => {
                if (movie.poster_path === null) {
                  return null;
                } else {
                  return (
                    <div
                      key={index}
                      className={`col-4 col-md-2 col-lg-2 col-xl-2`}
                    >
                      <Card
                        type="movie"
                        title={movie.title}
                        id={movie.id}
                        img500={IMG_500}
                        posterPath={movie.poster_path}
                        originalAlt={movie.original_name}
                        originalTitle={movie.original_name}
                        firstAirDate={movie.first_air_date}
                        releaseDate={movie.release_date}
                        voteAverage={movie.vote_average}
                      />
                    </div>
                  );
                }
              })}
          </div>
          {/* button show more */}
          {!hasError && page < totalPage ? (
            <button className={classes.btn_loadmore} onClick={showMoreHandle}>
              Show More
            </button>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};
export default MovieLegacyListPage;

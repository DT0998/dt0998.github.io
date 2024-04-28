import { LazyLoadImage } from "react-lazy-load-image-component";
import Trailer from "../Trailer";
import classes from "./style.module.css";

export const Banner = (props) => {
  const {
    img500,
    imgOrg,
    backdropPath,
    trailerData,
    posterPath,
    alt,
    title,
    overview,
    genresData,
    releaseTimeMovie,
  } = props;
  return (
    <div
      className={`${classes.banner_details}`}
      style={{
        backgroundImage: `url(${imgOrg + backdropPath})`,
      }}
    >
      {/* banner */}
      <div className="d-flex justify-content-center align-items-center flex-md-row flex-column py-5">
        <div className="d-flex justify-content-center align-items-center col-md-6 px-3 px-md-0">
          <LazyLoadImage
            src={`${img500 + posterPath}`}
            alt={alt}
            className={classes.banner_details_img}
            effect="blur"
            threshold={100}
            delayMethod="debounce"
            delayTime={300}
            placeholderSrc={`${img500 + posterPath}`}
          />
        </div>
        <div className={`${classes.banner_details_content} px-3 col-md-5`}>
          <p className={classes.banner_details_title}>{title}</p>
          <p>{overview}</p>
          {/* genres */}
          <ul className="d-flex flex-wrap list-unstyled pl-0">
            {genresData.map((genre) => (
              <li className={classes.banner_genres} key={genre.id}>
                {genre.name}
              </li>
            ))}
          </ul>
          {releaseTimeMovie && (
            <p className={classes.banner_release_day}>
              Release day: {releaseTimeMovie}
            </p>
          )}
          {/* trailer */}
          <Trailer data={trailerData} />
        </div>
      </div>
    </div>
  );
};

import httpService from "../../http";

export const getMoviesPopular = async (sort, page = 1) => {
  const PAGE = `&page=${page}`;
  const SORT = `&sort_by=${sort}`;
  if (sort) {
    return await httpService.get(`/discover/movie?${PAGE}${SORT}`);
  } else {
    return await httpService.get(`/movie/popular?${PAGE}`);
  }
};

export const getMoviesTrendingDay = async (page = 1) => {
  const PAGE = `&page=${page}`;
  return await httpService.get(`/trending/movie/day?${PAGE}`);
};

export const getMoviesTrendingWeek = async (page = 1) => {
  const PAGE = `&page=${page}`;
  return await httpService.get(`/trending/movie/week?${PAGE}`);
};

export const getMoviesLegacy = async (page = 1) => {
  const PAGE = `&page=${page}`;
  return await httpService.get(`/movie/top_rated?${PAGE}`);
};

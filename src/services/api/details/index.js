import httpService from "../../http";

export const getMoviesAndTvshowBannerDetails = async (type, id) => {
  return await httpService.get(`/${type}/${id}`);
};

export const getMoviesAndTvshowGenresDetails = async (type, id) => {
  return await httpService.get(`/${type}/${id}`);
};

export const getMoviesAndTvshowTrailerDetails = async (type, id) => {
  return await httpService.get(`/${type}/${id}/videos`);
};

export const getMoviesAndTvshowCastDetails = async (type, id) => {
  return await httpService.get(`/${type}/${id}/credits`);
};

export const getMoviesAndTvshowRecommendDetails = async (type, id) => {
  return await httpService.get(`/${type}/${id}/recommendations`);
};

import httpService from "../../http";

export const getTvshowPopular = async (sort, page = 1) => {
  const PAGE = `&page=${page}`;
  const SORT = `&sort_by=${sort}`;
  if (sort) {
    return await httpService.get(`/discover/tv?${PAGE}${SORT}`);
  } else {
    return await httpService.get(`/tv/popular?${PAGE}`);
  }
};

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import {
  getMoviesLegacy,
  getMoviesPopular,
  getMoviesTrendingDay,
} from "../../../services/api/movie";
import { getTvshowPopular } from "../../../services/api/tvshow";
import { getActorPopular } from "../../../services/api/person";

// get movie and tvshow action
export const getAllMovieAndTvShow = createAsyncThunk(
  "homepage/fetchAllMovieAndTv",
  async () => {
    // get data
    const resMoviePopular = await getMoviesPopular();
    const resMovieTrending = await getMoviesTrendingDay();
    const resMoviesLegacy = await getMoviesLegacy();
    const resTvshowPopular = await getTvshowPopular();
    const resActorPopular = await getActorPopular();

    // assign data
    const moviePopularData = resMoviePopular.results;
    const movieTrendingData = resMovieTrending.results;
    const tvShowPopularData = resTvshowPopular.results;
    const movieLegacyData = resMoviesLegacy.results;
    const actorPopularData = resActorPopular.results;
    // return data
    return {
      moviePopularData,
      movieTrendingData,
      tvShowPopularData,
      movieLegacyData,
      actorPopularData,
    };
  }
);

// slice
const slice = createSlice({
  name: "homepage",
  initialState: {
    moviePopular: [],
    movieTrending: [],
    tvshowPopular: [],
    movieLegacy: [],
    actorPopular: [],
  },
  reducers: {},
  extraReducers: {
    [getAllMovieAndTvShow.fulfilled]: (state, action) => {
      state.moviePopular = action.payload.moviePopularData;
      state.movieTrending = action.payload.movieTrendingData;
      state.tvshowPopular = action.payload.tvShowPopularData;
      state.movieLegacy = action.payload.movieLegacyData;
      state.actorPopular = action.payload.actorPopularData;
    },
  },
});

const persistConfig = {
  key: "homepage",
  storage,
  whitelist: [],
};

export const homepageActions = slice.actions;
export const selectorMoviePopular = (state) => state.page.home.moviePopular;
export const selectorMovieTrending = (state) => state.page.home.movieTrending;
export const selectorTvshowPopular = (state) => state.page.home.tvshowPopular;
export const selectorMovieLegacy = (state) => state.page.home.movieLegacy;
export const selectorActorPopular = (state) => state.page.home.actorPopular;
export default persistReducer(persistConfig, slice.reducer);

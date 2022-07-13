import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Loading } from "./components/loading";
import Layout from "./layout/layout";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovieAndTvShowData } from "./redux/home/actions";
import Routes from "./config/routes/routes";
import { selectorLoading } from "./redux/home/slice";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectorLoading);
  useEffect(() => {
    dispatch(getAllMovieAndTvShowData());
  }, [dispatch]);

  return (
    <React.Fragment>
      {isLoading ? (
        <Layout>
          <Routes />
        </Layout>
      ) : (
        <Loading type="fullscreen" />
      )}
    </React.Fragment>
  );
}

export default App;

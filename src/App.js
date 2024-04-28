import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "./layouts";
import { getAllMovieAndTvShow } from "./redux/pages/home/slice";
// toast
import { ToastContainer } from "react-toastify";
import Routes from "./configs/routes";
import Loading from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const getMovieAndTvShow = useCallback(async () => {
    try {
      setIsLoading(true);
      await dispatch(getAllMovieAndTvShow()).unwrap();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    getMovieAndTvShow();
  }, [getMovieAndTvShow]);

  return (
    <React.Fragment>
      {/* toast container */}
      <ToastContainer limit={1} />
      {isLoading ? (
        <Loading />
      ) : (
        <Layout>
          <Routes />
        </Layout>
      )}
    </React.Fragment>
  );
}

export default App;

import classes from "./style.module.css";
const Loading = () => {
  return (
    <div
      className={`${classes.loading} d-flex justify-content-center align-items-center`}
    >
      <div className={classes.loader}></div>
    </div>
  );
};

export default Loading;

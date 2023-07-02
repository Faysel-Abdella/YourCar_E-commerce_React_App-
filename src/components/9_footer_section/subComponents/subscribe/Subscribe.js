import classes from "./subscribe.module.css";

const Subscribe = () => {
  <div className={classes["subscribe-container"]}>
    <h2>News Letter</h2>
    <p>Subscribe to our news letter for updates, news and exclusive offers</p>

    <form className={classes["input-container"]}>
      <input type="email" placeholder="Email" />
      <button>Subscribe</button>
    </form>
  </div>;
};

export default Subscribe;

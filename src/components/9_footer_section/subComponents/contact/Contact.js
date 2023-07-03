import classes from "./contact.module.css";

const Contact = () => {
  return (
    <div className={classes["contact-container"]}>
      <h2>Contact</h2>

      <div className={classes["contact-infos-container"]}>
        <div className={classes["contact-info-container"]}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C8.13 2 5 5.13 5 9C5 13.17 9.42 18.92 11.24 21.11C11.64 21.59 12.37 21.59 12.77 21.11C14.58 18.92 19 13.17 19 9C19 5.13 15.87 2 12 2ZM12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.66304 14.2366 10.2989 13.7678 10.7678C13.2989 11.2366 12.663 11.5 12 11.5Z"
              fill="#12273D"
            />
          </svg>

          <div className={classes["contact-info"]}>
            <p>2038 2nd Avenue,</p>
            <p>Las Vegas, United States</p>
          </div>
        </div>

        <div className={classes["contact-info-container"]}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.23 12.2598L13.69 11.9698C13.3914 11.9347 13.0886 11.9678 12.8046 12.0665C12.5206 12.1652 12.2626 12.327 12.05 12.5398L10.21 14.3798C7.37123 12.936 5.06382 10.6286 3.62004 7.78977L5.47004 5.93977C5.90004 5.50977 6.11004 4.90977 6.04004 4.29977L5.75004 1.77977C5.69335 1.29194 5.45923 0.842003 5.09228 0.515614C4.72532 0.189226 4.25115 0.00918337 3.76004 0.00976704H2.03004C0.900041 0.00976704 -0.0399593 0.949767 0.0300407 2.07977C0.560041 10.6198 7.39004 17.4398 15.92 17.9698C17.05 18.0398 17.99 17.0998 17.99 15.9698V14.2398C18 13.2298 17.24 12.3798 16.23 12.2598V12.2598Z"
              fill="#12273D"
            />
          </svg>

          <div className={classes["contact-info"]}>
            <a href="tel:01444773421423">01444773421423</a>
            <a href="tel:01444773421423">01477678449405</a>
          </div>
        </div>

        <div className={classes["contact-info-container"]}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 8L12 13L4 8V6L12 11L20 6V8ZM20 4H4C2.89 4 2 4.89 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4Z"
              fill="#12273D"
            />
          </svg>

          <div className={classes["contact-info"]}>
            <a href="mailto:info@YourCar.com">info@YourCar.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

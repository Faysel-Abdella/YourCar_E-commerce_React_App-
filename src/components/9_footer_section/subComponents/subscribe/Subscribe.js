import { useState, useRef } from "react";

import classes from "./subscribe.module.css";

const Subscribe = () => {
  const inputRef = useRef();

  const [emailInput, setEmailInput] = useState("");
  //Check if the user input is correct
  const [emailInputIsCorrect, setEmailInputIsCorrect] = useState(false);
  //Check if the user click the input box
  const [userTouchTheInputBox, setUserTouchTheInputBox] = useState(false);
  //Then the entered email is not valid if the user click the input box and he inter the incorrect value

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const trackKeyStrock = (event) => {
    setEmailInput(event.target.value);
  };

  const submitSubscribe = (event) => {
    event.preventDefault();
    if (emailInput === "" || !emailRegex.test(emailInput)) {
      setUserTouchTheInputBox(true);
      setEmailInputIsCorrect(false);

      return;
    }

    setUserTouchTheInputBox(true);
    setEmailInputIsCorrect(true);
    setEmailInput("");
  };

  const enteredEmailIsInValid = !emailInputIsCorrect && userTouchTheInputBox;

  return (
    <div className={classes["subscribe-container"]}>
      <h2>News Letter</h2>
      <p>
        Subscribe to our news letter for <br />
        updates, news and exclusive offers
      </p>

      <form
        className={`${classes["input-container"]} ${
          enteredEmailIsInValid ? classes["show-error"] : ""
        }`}
        onSubmit={submitSubscribe}
        id="form1"
      >
        <input
          // type="email"
          placeholder="Email"
          ref={inputRef}
          value={emailInput}
          onChange={trackKeyStrock}
        />
        <button>Subscribe</button>
        <p className={classes["error-message"]}>Please enter a valid email</p>
      </form>
    </div>
  );
};

export default Subscribe;

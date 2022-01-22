import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const handleOnChange = (event) => {
    setText(event.target.value);
    // console.log("On changed !!!");
  };
  const handleUpperCaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    // console.log("Uppercase clicked !!!");
  };
  const handleLowercaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    // console.log("Lowercase clicked !!!");
  };
  const handleClearClick = () => {
    setText("");
    // console.log("Lowercase clicked !!!");
  };
  const handleCopyClick = () => {
    var copyText = document.getElementById("myTextBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    // console.log("Copy clicked !!!");
  };
  const handleRemoveExtraSpaceClick = () => {
    setText(text.trim().split(/[ ]+/).join(" "));
    // console.log("RemoveExtraSpace clicked !!!");
  };
  return (
    <>
      <div className="form-group">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            name="myTextBox"
            id="myTextBox"
            rows="8"
            placeholder={text}
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          type="button"
          name="convertToUpperCase"
          id="convertToUpperCase"
          className={`btn btn-${
            props.themeMode === "light" ? "primary" : "light"
          }  btn-block m-1`}
          onClick={handleUpperCaseClick}
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          name="convertToUpperCase"
          id="convertToUpperCase"
          className={`btn btn-${
            props.themeMode === "light" ? "primary" : "light"
          }  btn-block m-1`}
          onClick={handleLowercaseClick}
        >
          Convert to Lowercase
        </button>
        <button
          type="button"
          name="convertToUpperCase"
          id="convertToUpperCase"
          className={`btn btn-outline-${
            props.themeMode === "light" ? "primary" : "light"
          }  btn-block m-1`}
          onClick={handleCopyClick}
        >
          Copy Text
        </button>
        <button
          type="button"
          name="convertToUpperCase"
          id="convertToUpperCase"
          className={`btn btn-outline-${
            props.themeMode === "light" ? "primary" : "light"
          }  btn-block m-1`}
          onClick={handleRemoveExtraSpaceClick}
        >
          Remove Extra Space
        </button>
        <button
          type="button"
          name="convertToUpperCase"
          id="convertToUpperCase"
          className={`btn btn-outline-${
            props.themeMode === "light" ? "primary" : "light"
          }  btn-block m-1`}
          onClick={handleClearClick}
        >
          Clear
        </button>
      </div>
      <div className="container">
        <h1>Text Summary</h1>
        <p>
          {
            text
              .trim()
              .split(" ")
              .filter((element) => {
                return element.length !== 0;
              }).length
          }{" "}
          words and {text.trim().length} characters
        </p>
        <p>
          {text.length > 0
            ? 0.008 *
              text
                .trim()
                .split(" ")
                .filter((element) => {
                  return element.length !== 0;
                }).length
            : 0}{" "}
          minutes to read
        </p>
        <h1>Privew</h1>
        <p>{text}</p>
      </div>
    </>
  );
}

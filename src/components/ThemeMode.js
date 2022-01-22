// import React, { useState } from "react";
import React from "react";
import { ReactComponent as LightIcon } from "../bootstrap/icons/sun.svg";
import "../css/ThemeMode.css";
import "../bootstrap/icons/fonts/bootstrap-icons.woff";

export default function ThemeMode(props) {
  return (
    <>
      <span
        className={`themeToggle theme-${props.themeMode}`}
        onClick={props.onClickToogleThemeMode}
      >
        <LightIcon
          className="themeToogleIcon"
          onClick={props.onClickToogleThemeMode}
        />
      </span>
    </>
  );
}

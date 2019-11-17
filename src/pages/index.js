// src/pages/index.js
/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import ThemeSwitcher from "../components/theme-switcher"

export default () => {
  return (
    <div
      sx={{
        backgroundColor: "background",
        color: "text",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <ThemeSwitcher />
      <Styled.h1>Hello world!</Styled.h1>
    </div>
  )
}

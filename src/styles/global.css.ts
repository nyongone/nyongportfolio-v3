import { globalFontFace, globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
    boxSizing: "border-box",
});

globalStyle("html, body", {
    width: "100%",
    height: "auto",
    margin: 0,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    backgroundColor: "#fff",
    color: "#222",
    fontFamily: "NanumBarunGothic, sans-serif",
});

globalStyle("b", {
    paddingBottom: 1,
    borderBottom: "2px dotted #ff0000",
    fontSize: "inherit",
    fontWeight: 500,
});

globalStyle("button", {
    cursor: "pointer",
});

globalStyle("a:link, a:visited", {
    color: "inherit",
    textDecoration: "none",
});

globalFontFace("NanumBarunGothic", [
    {
        src: "url('./assets/fonts/NanumBarunGothicUltraLight.ttf')",
        fontWeight: 100,
    },
    {
        src: "url('./assets/fonts/NanumBarunGothicLight.ttf')",
        fontWeight: 300,
    },
    {
        src: "url('./assets/fonts/NanumBarunGothic.ttf')",
        fontWeight: 500,
    },
    {
        src: "url('./assets/fonts/NanumBarunGothicBold.ttf')",
        fontWeight: 700,
    },
]);

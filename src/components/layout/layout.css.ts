import { style } from "@vanilla-extract/css";

export const layout = {
    flexbox: style({
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 24,
        margin: "0 auto",
        padding: 40,
        "@media": {
            "screen and (max-width: 767px)": {
                padding: 0,
            },
        },
    }),
    container: style({
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "min(640px, 100%)",
        minHeight: "100vh",
        "@media": {
            "screen and (max-width: 767px)": {
                padding: 40,
            },
        },
    }),
};

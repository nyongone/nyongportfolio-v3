import { style } from "@vanilla-extract/css";

export const header = {
    container: style({
        width: "100%",
        height: "auto",
        "@media": {
            "screen and (max-width: 767px)": {
                paddingTop: 50,
            },
        },
    }),
    titleContainer: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 12,
    }),
    title: style({ fontSize: "3rem", fontWeight: 500, lineHeight: "4rem" }),
    subtitle: style({
        fontSize: "1.75rem",
        fontWeight: 300,
        lineHeight: "2.5rem",
    }),
    hr: style({
        width: "80px",
        height: "1px",
        margin: "20px 0",
        border: "none",
        outline: "none",
        backgroundColor: "#ccc",
        float: "right",
    }),
};

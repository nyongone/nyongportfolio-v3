import { style } from "@vanilla-extract/css";

export const section = {
    container: style({
        width: "100%",
        height: "auto",
        padding: "20px 0",
        fontSize: "1.5rem",
        fontWeight: 500,
    }),
    title: style({
        width: "auto",
        paddingBottom: 12,
        fontSize: "2rem",
        fontWeight: 700,
    }),
};

import { style } from "@vanilla-extract/css";

export const techstack = {
    container: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 8,
    }),
    detail: style({ fontSize: "1.5rem", lineHeight: "2.5rem" }),
};

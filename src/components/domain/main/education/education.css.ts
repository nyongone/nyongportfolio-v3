import { style } from "@vanilla-extract/css";

export const education = {
    container: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 8,
    }),
    current: style({ fontSize: "1.5rem" }),
    term: style({ fontSize: "1.25rem", color: "#aaa" }),
    detail: style({ fontSize: "1.5rem", lineHeight: "2.5rem" }),
};

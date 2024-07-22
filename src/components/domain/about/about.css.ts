import { style } from "@vanilla-extract/css";

export const about = {
    container: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 12,
        paddingTop: 12,
        paddingBottom: 24,
    }),
    title: style({ fontSize: "1.75rem", fontWeight: 700 }),
    detail: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 12,
    }),
    paragraph: style({
        fontSize: "1.5rem",
        fontWeight: 500,
        lineHeight: "2.25rem",
        color: "#666",
    }),
};

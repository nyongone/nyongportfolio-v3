import { style } from "@vanilla-extract/css";

export const projectList = {
    container: style({
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: 24,
        width: "100%",
        marginTop: 12,
    }),
    card: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 8,
        width: 120,
        cursor: "pointer",
    }),
    image: style({
        width: 120,
        height: 120,
        border: "1px solid #eee",
        borderRadius: 8,
        objectFit: "cover",
    }),
    title: style({ fontSize: "1.5rem", lineHeight: "2rem", fontWeight: 500 }),
    term: style({ fontSize: "1.25rem", fontStyle: "italic", color: "#a0a0a0" }),
    detail: style({ fontSize: "1.5rem", lineHeight: "2rem" }),
};

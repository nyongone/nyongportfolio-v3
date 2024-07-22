import { style } from "@vanilla-extract/css";

export const footer = {
    container: style({
        position: "relative",
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 8,
        width: "100%",
        height: "100px",
        marginTop: 120,
    }),
    linkContainer: style({
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 12,
        marginBottom: 12,
    }),
    link: style({
        fontSize: "1.25rem",
        fontWeight: 500,
        textDecoration: "none",
        paddingBottom: 1,
        borderBottom: "1px solid #222",
        selectors: {
            "&:link, &:visited": {
                color: "inherit",
            },
        },
    }),
    copyright: style({ fontSize: "1.25rem", fontWeight: 500 }),
};

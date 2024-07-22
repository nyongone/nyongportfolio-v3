import { style } from "@vanilla-extract/css";

export const navigation = {
    container: style({
        position: "sticky",
        top: 100,
        display: "inline-flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        alignSelf: "flex-start",
        gap: 16,
        width: 100,
        "@media": {
            "screen and (max-width: 767px)": {
                position: "fixed",
                top: 0,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "100%",
                height: 60,
                borderBottom: "1px solid #eee",
                backgroundColor: "white",
                zIndex: 99,
            },
        },
    }),
    item: style({
        fontSize: "2rem",
        fontWeight: 500,
        color: "inherit",
        textDecoration: "none",
        cursor: "pointer",
        "@media": {
            "screen and (max-width: 767px)": {
                fontSize: "1.5rem",
            },
        },
        selectors: {
            "&.active": {
                paddingBottom: 2,
                borderBottom: "2px dotted #ff0000",
            },
        },
    }),
};

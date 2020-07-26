module.exports = {
    purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
    theme: {
        extend: {
            colors: {
                capeHoney: {
                    default: "#dcd7ce",
                    lighter: "#b2aea975",
                    darker: "#b2aea9",
                    alt: "#bda27f",
                },
                outerSpace: {
                    default: "#2E3131",
                    lighter: "#434848",
                },
                stock: {
                    default: "#1e824c",
                    low: "#6c7a89",
                    out: "#d91e18",
                },
            },
        },
    },
    variants: {
        // backgroundColor: ["responsive", "hover", "focus"],
    },
    plugins: [],
};

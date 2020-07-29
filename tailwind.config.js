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
        // boxShadow: {
        //     default:
        //         "0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)",
        //     md:
        //         "0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)",
        //     lg:
        //         "0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .25)",
        // },
    },
    variants: {
        boxShadow: ["responsive", "hover", "focus"],
    },
    plugins: [],
};

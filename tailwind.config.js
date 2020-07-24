module.exports = {
    purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
    theme: {
        extend: {
            colors: {
                capeHoney: {
                    default: "#dcd7ce",
                    darker: "#fde3a7",
                },
                outerSpace: {
                    default: "#2E3131",
                    lighter: "#434848",
                },
            },
        },
    },
    variants: {
        // backgroundColor: ["responsive", "hover", "focus"],
    },
    plugins: [],
};

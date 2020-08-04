// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: "Safari Judaica",
    plugins: [
        {
            use: "gridsome-plugin-tailwindcss",
        },
        {
            use: "@gridsome/source-airtable",
            options: {
                apiKey: process.env.AIRTABLE_API_KEY, // required
                base: process.env.AIRTABLE_BASE, // required
                tables: [
                    {
                        name: "Products", // required
                        typeName: "Product", // required
                        select: {}, // optional
                        links: [
                            {
                                fieldName: "Product Reviews",
                                typeName: "Review",
                            },
                        ],
                    },
                    {
                        name: "Product Reviews", // required
                        typeName: "Review", // required
                        select: {}, // optional
                    },
                    {
                        name: "Categories", // required
                        typeName: "Category", // required
                        links: [
                            // optional
                            {
                                fieldName: "Category",
                                typeName: "Category",
                                linkToFirst: true, // optional
                            },
                        ],
                    },
                ],
            },
        },
    ],
    templates: {
        Product: "/shop/:CategoryName__0/:Slug",
        Category: "/shop/:Name",
    },
};

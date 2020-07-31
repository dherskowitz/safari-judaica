const fetch = require("node-fetch");

module.exports = async (req, res) => {
    let data = JSON.parse(req.body);
    let base_url = "https://api.airtable.com/v0";
    let payload = {
        records: [
            {
                fields: {
                    Name: data.formData.name,
                    Email: data.formData.email,
                    Phone: `${data.formData.countryCode} ${
                        data.formData.phone
                    }`,
                    Message: data.formData.message,
                    "Product SKU": [data.productData.id],
                },
            },
        ],
    };
    try {
        let response = await fetch(
            `${base_url}/${process.env.AIRTABLE_BASE}/Product%20Inquiries`,
            {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );
        console.log(response);
        let data = await response.json();
        res.json({
            body: data,
        });
    } catch (error) {
        console.error(error);
        res.json({
            body: error,
        });
    }
};

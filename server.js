const express = require("express");
const axios = require("axios");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

const apiLimiter = rateLimit({
    windowMs: 60 * 1000,
    limit: 10,
    message: {
        message: "Too many requests. Please try again later."
    }
});

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (request, response) => {
    response.render("index");
});

app.get(
    "/api/external-data",
    apiLimiter,
    async (request, response) => {

        try {

            const apiResponse = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );

            response.json(apiResponse.data);

        } catch (error) {

            console.log(error.message);

            response.status(500).json({
                message: "Failed to fetch external API data"
            });

        }

    }
);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
const loadButton = document.getElementById("loadButton");

const message = document.getElementById("message");

const result = document.getElementById("result");

loadButton.addEventListener("click", async function () {

    message.textContent = "Loading...";

    try {

        const response = await fetch("/api/external-data");

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        message.textContent = "Data loaded successfully";

        result.textContent = JSON.stringify(
            data,
            null,
            2
        );

    } catch (error) {

        message.textContent =
            `Error: ${error.message}`;

    }

});
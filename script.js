document.getElementById('button').addEventListener('click', function (event) {
    // Prevent the default form submission
    event.preventDefault();

    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;

    let url = "https://localhost:8080/";

    // Add query parameters only if the fields have values
    const params = new URLSearchParams();

    if (name.trim() !== "") {
        params.append("name", name.trim());
    }

    if (year.trim() !== "") {
        params.append("year", year.trim());
    }

    // Update the h3 text
    const fullUrl = params.toString() ? `${url}?${params.toString()}` : url;
    document.getElementById('url').textContent = fullUrl;
});
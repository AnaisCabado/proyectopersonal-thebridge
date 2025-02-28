// FETCH HEADER
fetch("../header.html")
    .then(response => response.text())
    .then(data => {
        document.querySelector("header").innerHTML = data;
    })
    .catch(error => {
        console.error("Error al cargar el header:", error);
    });

// FETCH FOOTER
fetch("../footer.html")
    .then(response => response.text())
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    })
    .catch(error => {
        console.error("Error al cargar el footer:", error);
    });

function addCode() {
    codeElements = document.getElementsByTagName("code");

    for (let i = 1; i <= codeElements.length; i++) {
        let element = codeElements[i - 1]
        let filename = "code" + i + ".txt";
        fetch(filename)
        .then(response => response.text())
        .then(text => {
            element.innerHTML = text;
            element.classList.add("language-javascript");
            Prism.highlightElement(element);
        })
        .catch(error => console.error('Error fetching the file:', error));
    }
}

addCode();
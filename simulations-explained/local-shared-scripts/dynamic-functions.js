function loadCode() {
    let codeElements = document.getElementsByTagName("code");

    for (let i = 1; i <= codeElements.length; i++) {
        let element = codeElements[i - 1]
        let filename = "./local-assets/code" + i + ".txt";
        fetch(filename)
        .then(response => response.text())
        .then(text => {
            element.textContent = text;
            element.style.backgroundColor = "#111111";
            element.classList.add("language-javascript");
            hljs.highlightElement(element);
        })
        .catch(error => console.error('Error fetching the file:', error));
    }
}


function applyScroll() {
    const codeBlocks = document.getElementsByTagName("pre");
    for (codeBlock of codeBlocks) {
        codeBlock.style.overflowX = "auto";
    }
}

loadCode();
applyScroll();
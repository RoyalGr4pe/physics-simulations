function main() {
    const currentPage = window.location.pathname;;
    console.log(currentPage)
    
    // Find the link that matches the current page and add the "active" class
    const links = document.querySelectorAll('.top-bar-button');
    console.log(links)
    links.forEach(link => {
        console.log(link.getAttribute('href'))
        if (link.getAttribute('href') === `${currentPage}`) {
            link.classList.add('active');
        }
    });
}


main()
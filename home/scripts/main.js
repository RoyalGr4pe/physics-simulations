function main() {
    const currentPage = window.location.pathname;;
    
    // Find the link that matches the current page and add the "active" class
    const links = document.querySelectorAll('.top-bar-button');
    links.forEach(link => {
        if (link.getAttribute('href') === `${currentPage}`) {
            link.classList.add('active');
        }
    });
}

main()
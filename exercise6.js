
    // Get all the show and hide links
    const showLinks = document.querySelectorAll('.showlink');
    const hideLinks = document.querySelectorAll('.text p:last-child a');

    // Hide the article bodies by default
    const articleBodies = document.querySelectorAll('.text');
    articleBodies.forEach(body => body.style.display = 'none');

    // Add event listeners to the show links
    showLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const articleBody = articleBodies[index];
            articleBody.style.display = 'block';
            link.style.display = 'none';
        });
    });

    // Add event listeners to the hide links
    hideLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const articleBody = articleBodies[index];
            articleBody.style.display = 'none';
            showLinks[index].style.display = 'block';
        });
    });

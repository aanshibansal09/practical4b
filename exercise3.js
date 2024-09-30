

    // Function to update the image based on the selected option
    function updateImage() {
        const selector = document.getElementById('imageSelector');
        const image = document.getElementById('myimage');
        const selectedOption = selector.options[selector.selectedIndex];
        const imageSrc = selectedOption.value;
        const imageAlt = selectedOption.getAttribute('data-name');

        image.src = imageSrc;
        image.alt = imageAlt;
    }

    // Attach the change event to the select element
    document.getElementById('imageSelector').addEventListener('change', updateImage);
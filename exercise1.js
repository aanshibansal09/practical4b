const yellow = document.getElementById('mydiv');

yellow.addEventListener('mouseover', () => {
     yellow.textContent = 'Can I help you?';
 });

 yellow.addEventListener('mouseout', () => {
    yellow.textContent = 'Hello world!';
 });
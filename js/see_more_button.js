let showAll = false;

function toggleProjects() {
    const items = document.querySelectorAll('.gallery__item');
    const button = document.getElementById('toggleButton');

    if (showAll) {
        // Show only the first 4 items
        items.forEach((item, index) => {
            item.style.display = index < 4 ? 'block' : 'none';
        });
        button.textContent = 'See More';
    } else {
        // Show all items
        items.forEach(item => {
            item.style.display = 'block';
        });
        button.textContent = 'Show Less';
    }

    showAll = !showAll;
}

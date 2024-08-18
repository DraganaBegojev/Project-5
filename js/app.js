baguetteBox.run('.gallery');

document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.getElementById('imageSearch');
    const galleryItems = document.querySelectorAll('.gallery a');

    searchBox.addEventListener('input', () => {
        const searchTerm = searchBox.value.toLowerCase();
        
        galleryItems.forEach(item => {
            const caption = item.getAttribute('data-caption').toLowerCase();
            const altText = item.querySelector('img').getAttribute('alt').toLowerCase();
            
            if (caption.includes(searchTerm) || altText.includes(searchTerm)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});
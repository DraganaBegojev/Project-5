baguetteBox.run('.gallery');

document.getElementById('imageSearch').addEventListener('input', () => {
    const searchTerm = document.getElementById('imageSearch').value.toLowerCase();
    const galleryItems = document.querySelectorAll('.gallery a');
    
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
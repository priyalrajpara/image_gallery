document.addEventListener("DOMContentLoaded", function(){
    const buttons = document.querySelectorAll('.options button');
    const images = document.querySelectorAll('.gallery img');

    buttons.forEach(button => {
        button.addEventListener('click', function(){
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            images.forEach(img => {
                const category = img.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    img.style.display = 'block';
                } else {
                    img.style.display = 'none';
                }
            });
        });
    });

    // Trigger click on the active button to apply the filter on page load
    document.querySelector('.options .active')?.click();
});
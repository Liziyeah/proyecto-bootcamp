const gallery = document.querySelector('.event-gallery');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');

gallery.addEventListener('click', (e) => {
	const clickedImage = e.target.closest('.card');
	if (clickedImage) {
		const image = clickedImage.querySelector('img');
		if (image) {
			modalImage.src = image.src;
			modal.style.display = 'flex';
		}
	}
});

window.addEventListener('click', (e) => {
	if (e.target === modal) {
		modal.style.display = 'none';
	}
});

const saveButton = document.addEventListener('#btnsave');

saveButton.addEventListener('click');

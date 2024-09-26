document.addEventListener("DOMContentLoaded", function () {
    const uploadCircle = document.getElementById('uploadCircle');
    const fileInput = document.getElementById('fileInput');
    const confirmPopup = document.getElementById('confirmPopup');
    const confirmBtn = document.getElementById('confirmBtn');
    const cancelBtn = document.getElementById('cancelBtn');

    let selectedImage;

    uploadCircle.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (event) => {
        if (event.target.files.length > 0) {
            selectedImage = URL.createObjectURL(event.target.files[0]);
            confirmPopup.style.display = 'block';
        }
    });

    confirmBtn.addEventListener('click', () => {
        if (selectedImage) {
            uploadCircle.style.backgroundImage = `url(${selectedImage})`;
            uploadCircle.style.backgroundSize = 'cover';
        }
        confirmPopup.style.display = 'none';
    });

    cancelBtn.addEventListener('click', () => {
        confirmPopup.style.display = 'none';
        fileInput.value = '';
    });
});

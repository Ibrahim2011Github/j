
// Показать изображение через 5 секунд
setTimeout(function() {
    document.getElementById('image-container').style.display = 'block';
}, 5000);

// Показать кнопку удаления через 15 секунд
setTimeout(function() {
    document.getElementById('delete-button').style.display = 'block';
}, 15000);

// Удалить изображение при нажатии на кнопку удаления
function deleteImage() {
    document.getElementById('image-container').style.display = 'none';
}

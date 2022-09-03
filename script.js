const textInput = document.getElementById('text-input');
const containerText = document.getElementById('meme-text');
const photoInput = document.getElementById('meme-insert');
const imagePreview = document.getElementById('meme-image');

function uploadImage() {
  const reader = new FileReader();
  reader.onload = (e) => {
    imagePreview.src = e.target.result;
  };
  reader.readAsDataURL(photoInput.files[0]);
}

function previewText() {
  containerText.innerText = textInput.value;
}

textInput.addEventListener('input', previewText);
photoInput.addEventListener('input', uploadImage);

const textInput = document.getElementById('text-input');
const containerText = document.getElementById('meme-text');
const photoInput = document.getElementById('meme-insert');
const imagePreview = document.getElementById('meme-image');
const containerImage = document.getElementById('meme-image-container');
const buttonFire = document.getElementById('fire');
const buttonWater = document.getElementById('water');
const buttonEarth = document.getElementById('earth');

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

function onClickButton(event) {
  const { target } = event;
  const colorClass = target.attributes['data-class'].nodeValue;
  containerImage.className = colorClass;
}

textInput.addEventListener('input', previewText);
photoInput.addEventListener('input', uploadImage);
buttonFire.addEventListener('click', onClickButton);
buttonWater.addEventListener('click', onClickButton);
buttonEarth.addEventListener('click', onClickButton);

const text = document.getElementById('text-input');
const containerText = document.getElementById('meme-text');

function previewText() {
  containerText.innerText = text.value;
}

text.addEventListener('input', previewText);

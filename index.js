function showAlertMessage() {
  const input = document.getElementById('nameInput');
  if (input.value.trim() === '') {
    alert('Name is required');
  } else {
    alert('Hello, ' + input.value);
  }
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = 'lightblue';
}

function toggleText() {
  const text = document.getElementById('toggleText');
  if (text.style.display === 'none') {
    text.style.display = 'block';
  } else {
    text.style.display = 'none';
  }
}

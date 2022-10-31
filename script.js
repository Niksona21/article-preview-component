const shareOption = document.querySelector('.option');

document.querySelector('.share-btn').addEventListener('click', function () {
  this.classList.toggle('active');
  shareOption.classList.toggle('active');
});
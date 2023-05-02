const uploadPictureButton = document.querySelector('#class-cover')

uploadPictureButton.addEventListener('change', (event) => {
  displayPicture(event)
})

const displayPicture = (event) => {
  const input = event.target
  if (input.files && input.files[0]) {
    const reader = new FileReader()

    reader.onload = function (e) {
      document.getElementById('cover').setAttribute('src', e.target.result)
    }

    reader.readAsDataURL(input.files[0])
  }
}

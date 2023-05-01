const uploadPictureButton = document.querySelector('#class-cover')
const uploadedVideo = document.querySelector('#class-video')

uploadPictureButton.addEventListener('change', (event) => {
  displayPicture(event)
})

uploadedVideo.addEventListener('change', (event) => {
  displayVideo(event)
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

const displayVideo = (event) => {
  console.log(event)
  console.log(event.target)
  console.log(event.target.files)
}

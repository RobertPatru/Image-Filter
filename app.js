const inputTypeFile = document.querySelector('#upload-image');
const imageContainer = document.querySelector('.image-container');
let uploadedImage = "";
let alreadyImgUploaded = false;

inputTypeFile.addEventListener('change', changeImage);

function changeImage() {
    const newImg = document.createElement('img');
    newImg.classList.add('uploaded-image');

    const choosedFile = this.files[0];


    if (choosedFile) {
        const reader = new FileReader(); // FileReader is a predefined function of Java Script
       
        reader.addEventListener('load', function(){
            uploadedImage = reader.result;
            newImg.setAttribute('src', uploadedImage);
        });

        reader.readAsDataURL(choosedFile);

    }

    // if you upload an image, the app knows this by setin alreadyImgUploaded = true
    if (alreadyImgUploaded == false) {
        imageContainer.append(newImg);
        alreadyImgUploaded = true;
        console.log(uploadedImage);
    }
    else {
        console.log('else', alreadyImgUploaded);
        newImg.setAttribute('src', uploadedImage, uploadedImage);
    }
}
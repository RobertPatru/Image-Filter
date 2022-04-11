const inputTypeFile = document.querySelector('#upload-image');
const imageContainer = document.querySelector('.image-container');
const samllImages = document.querySelectorAll('.small-img');
const uploadedImage = document.querySelector('.uploaded-image');

inputTypeFile.addEventListener('change', changeImage);

function changeImage() {
let uploadedImage = "";
    const bigImg = document.querySelector('.big-image');
    const choosedFile = this.files[0];


    if (choosedFile) {
        const reader = new FileReader(); // FileReader is a predefined function of Java Script
       
        reader.addEventListener('load', function(){
            uploadedImage = reader.result;
            bigImg.setAttribute('src', uploadedImage);



            for(i = 0; i < samllImages.length; i++) {
                samllImages[i].setAttribute('src', uploadedImage);
                console.log(samllImages[i]);
            }
        });

        reader.readAsDataURL(choosedFile);
    }
}

for (i = 0; i < samllImages.length; i++) {
    samllImages[i].addEventListener( 'click', (event) => {
        console.log(event.target.classList[1]);
        uploadedImage.classList = "";

        uploadedImage.classList.add('uploaded-image', 'big-image', `${event.target.classList[1]}`)
    } );
}
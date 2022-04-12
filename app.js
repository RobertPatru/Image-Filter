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


document.querySelector('.left-arrow').addEventListener('click', () => {
    uploadedImage.style.transform  = 'scaleX(-1)';
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    uploadedImage.style.transform  = 'scaleX(1)';
});

document.querySelector('.up-arrow').addEventListener('click', () => {
    uploadedImage.style.transform  = 'scaleY(-1)';
});

document.querySelector('.down-arrow').addEventListener('click', () => {
    uploadedImage.style.transform  = 'scaleY(1)';
});

let rotate = 0;

document.querySelector('.clockwise-circle').addEventListener('click', () => {
    rotate = rotate + 90;
    uploadedImage.style.transform = `rotate(${rotate}deg)`;
});

document.querySelector('.anticlockwise-circle').addEventListener('click', () => {
    rotate = rotate - 90;
    uploadedImage.style.transform = `rotate(${rotate}deg)`;
});
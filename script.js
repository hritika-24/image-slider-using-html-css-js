const prev_btn =document.querySelector(".prev");
const next_btn =document.querySelector(".next");
const img_container=document.querySelector(".images")
const images =document.querySelectorAll("img");

let image_index=0;

prev_btn.addEventListener("click",()=>{
    images[image_index].classList.remove("active");
    image_index = (image_index===0) ? images.length-1 : image_index-1;
    images[image_index].classList.add("active");
    // images.style.transform=`translateX(-${image_index * 100}%)`;
})

next_btn.addEventListener("click",()=>{
    images[image_index].classList.remove("active");
    image_index = (image_index===images.length-1) ? 0 : image_index+1;
    images[image_index].classList.add("active");
    // images.style.transform=`translateX(-${image_index * 100}%)`;

})
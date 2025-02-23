document.querySelectorAll('.image-content img').forEach(function(image){
    image.onclick = () =>{
    document.querySelector('.image-pop').style.display = 'flex';
    document.querySelector('.image-cover img').src = image.getAttribute('src')
    }
})

document.querySelector('.exit').onclick =()=>{
    document.querySelector('.image-pop').style.display = 'none'
}

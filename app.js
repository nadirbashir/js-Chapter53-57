imgPaths = ["./images/1.jpg", "./images/2.jpg", "./images/3.jpg", "./images/4.png", "./images/5.jpg", "./images/6.jpg", "./images/7.png"]; 
var imageBox = document.getElementById("images");
for(var i = 0; i < imgPaths.length; i++){
    imageBox.innerHTML += "<img class = 'images' src = '"+ imgPaths[i] +"' onClick = 'displayModal(this)'>"
}

function displayModal(x){
    var modal = document.getElementById("modal");
    modal.classList.add('modal-open');
    modal.classList.remove('modal-close');
    modal.style.display = 'block';
    document.getElementById("modal-img").src = x.src;
}

function onClosedImageModal(){
    var modal = document.getElementById("modal");
    modal.classList.add('modal-close');
    modal.classList.remove('modal-open');
    setTimeout(()=>{
        modal.style.display = "none";
    },550)
}
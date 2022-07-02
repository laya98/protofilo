var imgArr = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg"];

function displayImg(){
    var num = Math.floor(Math.random() * (imgArr.length));
    document.canvas.src= imgArr[num];
}

// 784

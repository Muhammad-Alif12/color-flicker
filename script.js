const warna = ["black","red","yellow","green","blue"];
const textWarna = ["black","red","yellow","green","blue"];

let i = 0;
const text = document.getElementById("text");

canvas.onclick = function () {
    if(i <  warna.length){
        canvas.style.backgroundColor = warna[i];
        text.textContent = textWarna[i];      
        text.style.color = warna[i];
        i++;
    }else{
        i = 0
        canvas.style.backgroundColor = warna[i];
        text.style.color = warna[i];
        text.textContent = textWarna[i];
    }
};
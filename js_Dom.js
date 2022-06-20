 /* setTimeOut用法
    function showAlert(){
        alert('I finally showed up')
    }
    var timeoutID = setTimeout(showAlert, 2000);*/

/*  function用法
    (function (x,y){
        var sum = x+ y;
            alert(sum);
    })(5,9);*/

 /* 鼠标事件
    var element1 = document.querySelector('.menu');
    element1.style.backgroundColor = "blue";
    element1.onclick = function (){
        element1.style.backgroundColor = "red";
    }
    element1.ondbclick = function (){
        element1.style.backgroundColor = "green";
    }
    element1.onmousedown = function (){
        element1.style.backgroundColor = "grey";
    }
    element1.onmouseout = function (){
        element1.style.backgroundColor = "pink";
    }
    element1.onmouseup = function (){
        element1.style.backgroundColor = "black";
    }*/

    var divContainer = docunment.getElementById("container");
    divContainer.classList.add("product");
    alert(divContainer.classList);
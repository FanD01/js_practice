//获取文本域内容
var el = document.querySelector('#content');
//为文本域DOM节点添加blur事件
el.addEventListener('blur',function(){
    //获取文本域的内容
    var data = el.value;
    //将内容保存到服务器
    saveOnline(data);
});
//保存内容的具体代码
function saveOnline(data){
    var xhr = new XMLHttpRequest();
    xhr.open('POST','/savedata');
    xhr.send('data='+ data);
}


/*
    свойства
    события
    методы
*/

var div = document.querySelector('#text');

/*function print_object(obj){
    var res = '<ul>';
    
    for(i in obj)
        res += '<li><b>' + i + '</b>: ' + obj[i] + '</li>';
        
    res += '</ul>';
    document.write(res);
}


print_object(text.style);  */

div.onclick = function(){
    div.innerHTML = 'ура!';
    div.className = 'test';
    div.style.color = '#f00';
    div.style.fontSize = '30px';
}
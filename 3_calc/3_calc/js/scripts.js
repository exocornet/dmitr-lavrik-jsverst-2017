window.onload = function(e){

    var inp1 = document.querySelector('input[name=num1]');
    var inp2 = document.querySelector('input[name=num2]');
    var span = document.querySelector('.res');

    document.querySelector('input[name=sum]').onclick = function(){
        var res = parseInt(inp1.value) + parseInt(inp2.value);
        span.innerHTML = res;
    }

    document.querySelector('input[name=min]').onclick = function(){
        var res = parseInt(inp1.value) - parseInt(inp2.value);
        span.innerHTML = res;
    }

    document.querySelector('input[name=div]').onclick = function(){
        var res = parseInt(inp1.value) / parseInt(inp2.value);
        span.innerHTML = res;
    }

    document.querySelector('input[name=mult]').onclick = function(){
        var res = parseInt(inp1.value) * parseInt(inp2.value);
        span.innerHTML = res;
    }
    
}


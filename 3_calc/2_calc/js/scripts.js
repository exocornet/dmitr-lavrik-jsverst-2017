window.onload = function(e){

    //Сложение
    var btnSumma = document.querySelector('input[name=calc1]');
    var inp1 = document.querySelector('input[name=num1]');
    var inp2 = document.querySelector('input[name=num2]');
    var summa = document.querySelector('.sum');

    btnSumma.onclick = function(){
        
        var sum = parseInt(inp1.value) + parseInt(inp2.value);
        summa.innerHTML = sum;

        this.setAttribute('disabled', 'disabled');
    }

    inp1.oninput = function(){
        btnSumma.removeAttribute('disabled');
    }
    inp2.oninput = function(){
        btnSumma.removeAttribute('disabled');
    }

    //Вычитание
    var btnMinus = document.querySelector('input[name=calc2]');
    var inp3 = document.querySelector('input[name=num3]');
    var inp4 = document.querySelector('input[name=num4]');
    var minus = document.querySelector('.min');

    btnMinus.onclick = function(){

        var min = parseInt(inp3.value) - parseInt(inp4.value);
        minus.innerHTML = min;

        this.setAttribute('disabled', 'disabled');
    }

    inp3.oninput = function(){
        btnMinus.removeAttribute('disabled');
    }
    inp4.oninput = function(){
        btnMinus.removeAttribute('disabled');
    }


    //Умножение
    var btnMultiplicat = document.querySelector('input[name=calc3]');
    var inp5 = document.querySelector('input[name=num5]');
    var inp6 = document.querySelector('input[name=num6]');
    var multiplicat = document.querySelector('.mult');

    btnMultiplicat.onclick = function(){

        var mult = parseInt(inp5.value) * parseInt(inp6.value);
        multiplicat.innerHTML = mult;

        this.setAttribute('disabled', 'disabled');
    }

    inp5.oninput = function(){
        btnMultiplicat.removeAttribute('disabled');
    }
    inp6.oninput = function(){
        btnMultiplicat.removeAttribute('disabled');
    }


    //Умножение
    var btnDivision = document.querySelector('input[name=calc4]');
    var inp7 = document.querySelector('input[name=num7]');
    var inp8 = document.querySelector('input[name=num8]');
    var division = document.querySelector('.divis');

    btnDivision.onclick = function(){

        var divis = parseInt(inp7.value) / parseInt(inp8.value);
        division.innerHTML = divis;

        this.setAttribute('disabled', 'disabled');
    }

    inp7.oninput = function(){
        btnDivision.removeAttribute('disabled');
    }
    inp8.oninput = function(){
        btnDivision.removeAttribute('disabled');
    }
}


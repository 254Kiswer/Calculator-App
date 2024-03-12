(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
   
    buttons.foreach(function(button){
        button.addEventListiner('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListiner('click', function(e){
        if(screen.value === ''){
            screen.value = "Please enter";
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })
    
    clear.addEventListener('click', function(e){
        screen.value = "";

    })

})();
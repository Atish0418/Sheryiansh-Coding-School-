
var btn = document.querySelector('button')
var percent = document.querySelector('.percentage')
var growth = document.querySelector('.growth')

var grow = 0
var check = 0
btn.addEventListener('click', function(){
    if(check == 0){
        var int = setInterval(function(){
            grow++
            percent.innerHTML = grow+'%'
            growth.style.width = grow+'%'
        },100)
    
        setTimeout(function(){
            clearInterval(int)
            btn.innerHTML = 'Downloaded'
            btn.style.opacity = '0.5'

            setTimeout(function() {
                grow = 0;
                percent.innerHTML = '0%';
                growth.style.width = '0%';
                btn.innerHTML = 'Download';
                btn.style.opacity = '1';
                check = 0;
            }, 3000);
                
        },10000)
        check = 1
    }
})
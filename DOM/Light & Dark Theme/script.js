var btn = document.querySelector('button')
var body = document.querySelector('body')
var icon = document.querySelector('#icon')

btn.addEventListener('click', function(){
    if(body.classList.contains('light')){
        body.classList.remove('light')
        body.classList.add('dark')
        icon.innerHTML = '<i class="ri-moon-fill"></i>'
    }else{
        body.classList.remove('dark')
        body.classList.add('light')
        icon.innerHTML = '<i class="ri-sun-line"></i>'
    }
})


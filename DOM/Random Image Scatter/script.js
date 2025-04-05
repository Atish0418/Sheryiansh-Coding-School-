var btn = document.querySelector('button')
var body = document.querySelector('body')

btn.addEventListener('click', function(){

    var images = ['/src/img1.png', '/src/img2.png', '/src/img3.png', '/src/img4.png', '/src/img5.png', '/src/img6.png', '/src/img8.png',]

    var num = Math.floor(Math.random()*images.length)

    var random = images[num]
    

    var x = Math.random()*90
    var y = Math.random()*90
    var rot = Math.random()*360


    var img = document.createElement('img') 

    img.setAttribute('src', random)
    img.style.height = '400px'
    img.style.position = 'absolute'
    img.style.left = x+'%'
    img.style.top = y+'%'
    // img.style.rotate = rot+'deg'

    body.appendChild(img)
})




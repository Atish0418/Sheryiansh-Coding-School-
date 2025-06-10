var arr = [
  {
    dp: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D',
    story: 'https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww',
    id:'angle.priya'
  },
  {
    dp: 'https://i.pinimg.com/474x/4b/7f/4e/4b7f4e1a05bae03cfc4f29123c86e1ba.jpg',
    story: 'https://i.pinimg.com/474x/c2/a0/33/c2a0337b4f31d857df60bcada1f5dd50.jpg'
  },
  {
    dp: 'https://i.pinimg.com/736x/e7/ea/10/e7ea104c4898495892d0d2733ecd8542.jpg',
    story: 'https://i.pinimg.com/736x/d6/59/69/d65969cf4f01d93874f87e967898441c.jpg'
  },
  {
    dp: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsfGVufDB8fDB8fHww',
    story: 'https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyf'
  },
  {
    dp: 'https://i.pinimg.com/736x/f3/17/e4/f317e41b860a1ac365ca8c391be2021c.jpg',
    story: 'https://i.pinimg.com/736x/bd/7d/51/bd7d515c972ac08dfd99db8ebe04b5b1.jpg'
  },
  {
    dp: 'https://i.pinimg.com/736x/fe/88/8e/fe888eadce4aac14a3c5931c06e79217.jpg',
    story: 'https://i.pinimg.com/736x/c6/a7/18/c6a7180205d987dead83037dda2ba9c1.jpg'
  }
]

var storiyan = document.querySelector('.storiyan')
var sum = ''

arr.forEach(function (elem, idx) {
  sum = sum + `<div class="story">
                    <img id="${idx}" src="${elem.dp}" alt="">
                </div>`
})

storiyan.innerHTML = sum

storiyan.addEventListener('click', function (dets) {
  var fullScr = document.querySelector('.full-screen')

  fullScr.style.display = 'block'
  fullScr.style.backgroundImage = `url(${arr[dets.target.id].story})`
  // console.log(gold)

  setTimeout(function(){
    fullScr.style.display = 'none'
  },2000)
})












var container = document.querySelector('#container')
var like = document.querySelector('i')

container.addEventListener('dblclick', function () {
  var rot = Math.floor(Math.random() * 60) - 30;

  like.style.transition = 'none';
  like.style.transform = 'translate(-50%, -50%) scale(0) rotate(0deg)';
  like.style.opacity = 0;

  // Force reflow
  like.offsetHeight;

  // Show with bounce
  like.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
  like.style.transform = `translate(-50%, -50%) scale(1.5) rotate(${rot}deg)`;
  like.style.opacity = 1;

  // After 800ms, start flying up and fading
  setTimeout(function () {
    like.style.transition = 'transform 0.6s ease, opacity 0.8s ease';
    like.style.transform = `translate(-50%, -150%) scale(1.2) rotate(${rot}deg)`;
    like.style.opacity = 0;
  }, 800)

  // Reset back to scale(0) after animation completes (cleanup)
  setTimeout(function () {
    like.style.transition = 'none';
    like.style.transform = 'translate(-50%, -50%) scale(0) rotate(0deg)';
    like.style.opacity = 0;
  }, 1600)
})

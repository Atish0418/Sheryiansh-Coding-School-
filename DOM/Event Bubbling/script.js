// Event Bubbling

let arr = [
  {
    image: 'https://i.pinimg.com/736x/82/6e/d6/826ed6bb894469f8f487166595cb0997.jpg',
    name: 'Virat Kohli',
    isStatus: 'Stranger',
  },
  {
    image: 'https://i.pinimg.com/736x/91/8b/ad/918badf2086482a3eea43346ec92518c.jpg',
    name: 'Rohit Sharma',
    isStatus: 'Stranger',
  },
  {
    image: 'https://i.pinimg.com/736x/e7/9e/08/e79e08eef57b0e2dfa6af73da3280e3b.jpg',
    name: 'Hardik Pandya',
    isStatus: 'Stranger',
  },
]

let main = document.querySelector('.main')
function heroFunction() {
  var sum = ''

  arr.forEach(function (elem, idx) {
    sum = sum + `<div class="card">
            <div class="nav1">
                <img src = ${elem.image} alt="">
            </div>
            <div class="nav2">
                <h1>${elem.name}</h1>
                <h3 style="color: ${elem.isStatus == 'Friends' ? 'green': 'red'}">${elem.isStatus}</h3>
                <button id = ${idx}>${elem.isStatus === 'Friends' ? 'Remove Friend' : 'Add Friend'}</button>
            </div>
        </div>`
  })
  
  main.innerHTML = sum
}
heroFunction()

main.addEventListener('click', function (dets) {
  var gold = arr[dets.target.id]

  if(gold.isStatus == 'Stranger'){
    gold.isStatus = 'Friends'
  }else{
      gold.isStatus = 'Stranger'
  }
  heroFunction()
})
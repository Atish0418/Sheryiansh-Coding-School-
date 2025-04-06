var arr = [
  {
    name: "Wade Wilson",
    age: 32,
    role: "UI/UX Designer",
    icon: '<i class="ri-hotel-line"></i>',
    company: "Epic Coders",
    skills: ["UI", "UX", "Photoshop", "+4"],
    bio: "Wade is a 32 year old UI/UX designer, with an impressive portfolio behind him.",
    action: "View Profile",
    image: 'https://i.pinimg.com/originals/97/31/02/9731022f0be7c965e880505461643850.jpg',
    status: 'available',
    charges: '$55/hr'
  },
  {
    name: "Emma Clark",
    age: 28,
    role: "mobile designer",
    icon: '<i class="ri-user-line"></i>',
    company: "Freelancer",
    skills: ["PHP", "android", "iOS", "+2"],
    bio: "Emma is an android and iOS developer who worked at Apple for 6 years. ",
    action: "View Profile",
    image: 'https://static1.bigstockphoto.com/3/6/6/large1500/66383710.jpg',
    status: 'not available',
    charges: '$32/hr'
  },
  {
    name: "Leo Martinez",
    age: 35,
    role: "mobile designer",
    icon: '<i class="ri-user-line"></i>',
    company: "Freelancer",
    skills: ["PHP", "android", "iOS", "+12"],
    bio: "Leo focuses on deep user research and experience optimization.",
    action: "View Profile",
    image: 'https://thumbs.dreamstime.com/b/portrait-young-casual-man-23733816.jpg',
    status: 'not available',
    charges: '$42/hr'
  },
  {
    name: "Kane Wiliams",
    age: 30,
    role: "interactive designer",
    icon: '<i class="ri-user-line"></i>',
    company: "Freelancer",
    skills: ["PHP", "android", "iOS", "+2"],
    bio: "Kane is an interactive designer who is really awesome at what she does ",
    action: "View Profile",
    image: 'https://img.freepik.com/premium-photo/headshot-young-professional-man-wearing-glasses-suit-he-has-short-brown-hair-friendly-smile-he-is-looking-directly-camera_14117-205371.jpg',
    status: 'not available',
    charges: '$44/hr'
  },
  {
    name: "Jason Lee",
    age: 29,
    role: "mobile designer",
    icon: '<i class="ri-user-line"></i>',
    company: "Freelancer",
    skills: ["PHP", "android", "iOS", "+2"],
    bio: "Jason is an Android and IOS designer with advanced knowledge in coding ",
    action: "View Profile",
    image: 'https://c8.alamy.com/comp/2R1M0AD/lets-look-at-the-future-together-serious-creative-professional-woman-looking-intently-at-the-camera-while-sitting-at-her-desk-2R1M0AD.jpg',
    status: 'available',
    charges: '$40/hr'
  },
  {
    name: "Mia Robinson",
    age: 27,
    role: "UI/UX designer",
    icon: '<i class="ri-hotel-line"></i>',
    company: "Epic Coders",
    skills: ["UI", "UX", "photoshop", "+4"],
    bio: "Mia's designs are known for their color harmony and clarity.",
    action: "View Profile",
    image: 'https://i0.wp.com/www.torontophotographerz.com/wp-content/uploads/2017/06/Linkedin-portraits-2.jpg?fit=800%2C1200&ssl=1',
    status: 'not available',
    charges: '$30/hr'
  },
  {
    name: "Noah Patel",
    age: 31,
    role: "UX designer",
    icon: '<i class="ri-hotel-line"></i>',
    company: "Apple Inc.",
    skills: ["UI", "UX", "photoshop", "+4"],
    bio: "Noah helps startups refine and scale their digital products.",
    action: "View Profile",
    image: 'https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png',
    status: 'not available',
    charges: '$50/hr'
  },
  {
    name: "Lara Bennett",
    age: 26,
    role: "mobile designer",
    icon: '<i class="ri-user-line"></i>',
    company: "Freelancer",
    skills: ["PHP", "android", "iOS", "+4"],
    bio: "Lara crafts words that guide users seamlessly through products.",
    action: "View Profile",
    image: 'https://i.pinimg.com/originals/6c/15/14/6c1514b1f32c69e253f0253978f2efbd.jpg',
    status: 'not available',
    charges: '$32/hr'
  },
  {
    name: "Ethan James",
    age: 34,
    role: "photographer",
    icon: '<i class="ri-hotel-line"></i>',
    company: "Epic Coders",
    skills: ["UI", "UX", "Leadership", "+4"],
    bio: "Ethan leads a team of creatives building human-centered designs.",
    action: "View Profile",
    image: 'https://i.pinimg.com/736x/3f/e9/fe/3fe9fe7f0573b76d84f1bc313e43c98d.jpg',
    status: 'not available',
    charges: '$40/hr'
  },
  {
    name: "Ava Brooks",
    age: 29,
    role: "UI/UX designer",
    icon: '<i class="ri-hotel-line"></i>',
    company: "Epic Coders",
    skills: ["UI", "UX", "Prototyping", "+4"],
    bio: "Ava designs interactive experiences with a focus on user delight.",
    action: "View Profile",
    image: 'https://i.pinimg.com/originals/95/48/61/95486188fbf36520e34fc2ec41b4523f.jpg',
    status: 'not available',
    charges: '$45/hr'
  }
];

let sum = ''

arr.forEach(function (elem) {
  sum = sum + `<div class="main">
        <div class="card">
            <div class="nav">
                <h5>${elem.status }</h5>
                 <h4>${elem.charges}</h4>
            </div>
            <img src=${elem.image} alt="">
            <div class="nav1">
                <h3>${elem.name}</h3>
                <h5>${elem.role}</h5>
                    <p>${elem.icon} ${elem.company}</p>
            </div>
    
            <div class="nav2">
            ${elem.skills.map(skill => {
    const isExtra = skill.startsWith("+");
    return `<span class="skill${isExtra ? " extra-skill" : ""}">${skill}</span>`
  }).join('')}
            </div>
    
            <div class="nav3">
                <p>${elem.bio}</p>
            </div>
    
            <button>View Profile</button>
        </div>
    </div>`
})

console.log(sum)

let body = document.querySelector('body')

body.innerHTML = sum
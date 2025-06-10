let searchBtn = document.querySelector(".search")
let usernameinp = document.querySelector(".usernameinp")
let card = document.querySelector(".card")

function getProfileData(username) {
    return fetch(`https://api.github.com/users/${username}`).then((raw) => {
        if (!raw.ok) throw new Error("User not found");
        return raw.json();
    });
}

function getRepos(username) {
    return fetch(`https://api.github.com/users/${username}/repos?sort=updated`).then((raw) => {
        if (!raw.ok) throw new Error("Failed to fetch repos...");
        return raw.json();
    });
}

function decorateProfileData(details){
    console.log(details)
    let data = `<img src="${details.avatar_url}" alt="GitHub Avatar"
            class="w-32 h-32 rounded-full border-4 border-gray-600 shadow-md" />
  
          <div class="flex-1 space-y-2">
            <h2 class="text-2xl font-semibold text-white">${details.name}</h2>
            <p class="text-gray-300">@${details.login}</p>
            <p class="text-gray-400">${details.bio ? details.bio : ""}</p>
  
            <div class="flex flex-wrap gap-4 mt-4 text-gray-300">
              <div>
                <span class="font-bold text-white">Public Repos: </span> ${details.public_repos}
              </div>
              <div>
                <span class="font-bold text-white">Followers:</span> ${details.followers}
              </div>
              <div>
                <span class="font-bold text-white">Following:</span> ${details.following}
              </div>
              <div>
                <span class="font-bold text-white">Location:</span> ${details.location ? details.location : "Not added"}  
              </div>
              <div>
                <span class="font-bold text-white">Company:</span> ${details.company ? details.company : "Not added"}
              </div>
            </div>`;

    card.innerHTML = data; 
}



searchBtn.addEventListener("click", function () {
    let username = usernameinp.value.trim()
    if (username.length > 0) {
        getProfileData(username).then((data) => {
            decorateProfileData(data)
        });
    }
    else {
        alert("Please enter username");
    }
})
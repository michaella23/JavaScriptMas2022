import podcasts from "./data.js";

function getFreePodcasts(data){
    const freePods = [];
    data.map(({title, rating, paid}) => {
        if (paid === false) {
            freePods.push({title, rating, paid});
        }
   })
   return freePods;
}

console.log(getFreePodcasts(podcasts))

function getXmasPodcasts(data) {
    const xmasPods = [];
    data.map(({title, hosts, genre, image, link}) => {
        if (genre === "christmas") {
            xmasPods.push({title, hosts, genre, image, link});
            document.body.innerHTML += `
                <div class="pod">
                    <h2>${title}</h2>
                    <p>Host(s): ${hosts}</p>
                    <a href=${link} target="_blank"><img src="${image}" alt="xmas podcast" class="pod-image" /></a>
                </div>
            `
        }
    })
    return xmasPods;
}

console.log(getXmasPodcasts(podcasts))
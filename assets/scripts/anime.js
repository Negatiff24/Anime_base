const urlParams = new URLSearchParams(window.location.search);
const animeId = urlParams.get('animeId');

getAnimeDataFromServer()

function getAnimeDataFromServer() {
    axios.get(`https://api.jikan.moe/v3/anime/${animeId}`)
        .then(response => {
            console.log(response.data);
            if (response.data) {
                const h1 = document.querySelector('h1');
                h1.innerText = response.data.title;

                const trailerContainer = document.querySelector('.trailer-container');
                trailerContainer.innerHTML = `
                <iframe
                        width="560" 
                        height="315" 
                        src="${response.data.trailer_url}" 
                        frameborder="0"
                         allowfullscreen></iframe> `

            }
        })
        .catch(err => {
            console.error(err);
        })
}
//btnEl stands for button element
const btnEl = document.getElementById("btn");

const jokeEl = document.getElementById("joke");

const apiKey = "75Oh3XPiVGUKJX0QAdwLEA==NDgKRXoJAx0HdVjy";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL  = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){

    //trycatch seperti if-else
    try {
        jokeEl.innerText = "Updating...";
        btnEl.disabled = true; // saat loading, button nggak bisa diklik
        btnEl.innerText = "Loading...";

        const response = await fetch(apiURL, options);
        const data = await response.json();

        //console.log(data) -> bentuknya array
        //console.log(data[0].joke); -> element array-nya aja

        btnEl.disabled = false; // setelah loading selesai, button aktif kembali
        btnEl.innerText = "Tell me a joke";

        jokeEl.innerText = data[0].joke; // ganti teks Dad Joke jadi jokes-nya

    } catch (error) {
        jokeEl.innerText = "An error happened, try again later";

        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
    }
    
}

btnEl.addEventListener("click", getJoke);
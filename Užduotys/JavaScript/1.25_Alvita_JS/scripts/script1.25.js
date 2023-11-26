
// mygtuka priskirti kintamajam
let button = document.getElementById("mygtukas");
let image = document.getElementById("paveikslelis");
let paragrafas= document.getElementById("random-joke");

// apsirasyti eventlistener - kai paspausdim kad kazkas ivyktu
//button.addEventListener("click", function() {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        console.log(event);
       
        let headers = {
            headers: {
                Accept: "application/json"
            } //headers - uzklausos parametrai
        }

        async function getJoke() {
            let response = await fetch("https://icanhazdadjoke.com/", headers)
            let jokeData = await response.json();
            //console.log(jokeData.id);
            paragrafas.textContent = jokeData.joke;
            //console.log(jokeData.joke);

            image.setAttribute("src", `https://icanhazdadjoke.com/j/${jokeData.id}.png`);
        }
        
        getJoke();


});

const loadJokes = async () => {
    try {
        const res = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await res.json()

        const setup = document.getElementById("setup")
        setup.innerHTML = data.setup;
        const punchline = document.getElementById("punchline")
        punchline.innerHTML = data.punchline;
    } catch (error) {
        
    }
};

window.addEventListener("load", () => {
  loadJokes();
});

function showCat() {
    document.getElementById('envelope').style.display = 'none';
    document.getElementById('catContent').style.display = 'block';
}

function handleResponse(userResponse) {
    let catGif = document.getElementById('catGif');
    let responseText = document.getElementById('responseText');
    let choiceContainer = document.getElementById('choiceContainer');

    if (userResponse === 'yes') {
        catGif.src = 'lovey.gif';
        responseText.innerHTML = 'Yay! You are my Valentine!';
        choiceContainer.style.display = 'none';
        var audio = document.getElementById('audio');
        audio.play();
    } else if (userResponse === 'no') {
        catGif.src = 'marie_sad.gif';
        responseText.innerHTML = 'Oh no! I will find love next time.';
        choiceContainer.style.display = 'none';
    } else {
        catGif.src = "chow.gif";
        responseText.textContent = "";
    }
}


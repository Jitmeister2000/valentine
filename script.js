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
        responseText.innerHTML = 'MY TOULOUSE! Happy Valentines Day love, I love you more than anything and I cannot wait to see you and your fat face. You are all I want beside me every second of every day to laugh with and hold. Love, Marty';
        choiceContainer.style.display = 'none';
        var audio = document.getElementById('audio');
        audio.play();
    } else if (userResponse === 'no') {
        catGif.src = 'marie_sad.gif';
        responseText.innerHTML = 'No Valentine for me this year it seems...';

        choiceContainer.style.display = 'none';
    } else {
        catGif.src = "chow.gif";
        responseText.textContent = "";
    }
}

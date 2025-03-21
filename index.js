/* This is a file inserted to keep the learn IDE browser happy */
const testVar = {}
document.addEventListener('DOMContentLoaded', () => {
    const articleHearts = document.querySelectorAll('.like-glyph');

    function mimicServerCall(url="http://mimicServer.example.com", config={}) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                let isRandomFailure = Math.random() < .2
                if (isRandomFailure) {
                    reject("Random server error. Try again.");
                } else {
                    resolve("Pretend remote server notified of action!");
                }
            }, 300);
        });
    }

    function likeCallback(event) {
        const heart = event.target;
        mimicServerCall()
            .then(function() {
                if (heart.innerText === "♡") {
                    heart.innerText = "♥";
                    heart.classList.add("activated-heart");
                } else {
                    heart.innerText = "♡";
                    heart.classList.remove("activated-heart");
                }
            })
            .catch(function(error) {
                alert("Something went wrong!");
            });
    }

    for (const glyph of articleHearts) {
        glyph.addEventListener("click", likeCallback);
    }
});

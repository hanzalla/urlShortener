
const long_url = document.getElementById('long_url');
const submit_button = document.getElementById('submit_button');
const short_url = document.getElementById('short_url');
const copied_btn = document.getElementById('copied_button');


submit_button.addEventListener("click", () => {
    event.preventDefault();
    let newUrl = long_url.value;
    fetch(`https://api.shrtco.de/v2/shorten?url=${newUrl}`)
        .then((resp) => resp.json())
        .then((value) => {
            short_url.value = value.result.short_link2;
        })
        .catch((error) => {
            short_url.value = "Something went wrong!";
        });

});

function updatedBtnText() {
    copied_btn.innerHTML = "Copy";
}

copied_btn.addEventListener("click", () => {
    event.preventDefault();
    navigator.clipboard.writeText(short_url.value);
    copied_btn.innerHTML = "Copied";

    setTimeout(updatedBtnText, 1000);
})

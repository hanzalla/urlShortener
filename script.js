const long_url = document.getElementById('long-url');
const submit_button = document.getElementById('submit_button');


submit_button.addEventListener('submit', getUrl);

function getUrl(event) {
    event.preventDefault();
    const urlValue = long_url.value;
    console.log(urlValue);

}

submit_button.onclick = getUrl;
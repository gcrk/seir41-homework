const logo = document.querySelector('#logo');
const again = document.querySelector('.again');

const spin = () => {
    const logo = document.querySelector('#logo');
    const audio = document.querySelector("#audio");
    audio.play();
    logo.classList.add('spin');
    setTimeout(() => {
        outputVideo();
        logo.classList.add('hide');
    }, 2500);
}

const outputVideo = () => {
    const output = document.querySelector("#output");
    output.innerHTML = `
    <iframe src='https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"frameborder="0"' type="text/html" width="640" height="360"></iframe>' <br>
    <button class="again">Go again</button>`
}

logo.addEventListener("click", () => {
    spin();
})

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("again")) {
        location.reload();
    }
})
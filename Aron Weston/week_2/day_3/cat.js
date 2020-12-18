const cat = document.getElementById('cat');

cat.style.position = "absolute";
cat.style.left = "0px";
cat.style.right = "0px";
cat.style.bottom = "300px";

const moveCat = () => {

    const right = () => {
        const start = parseInt(cat.style.left);
        const move = start + 9;
        cat.style.left = move + 'px';

        if (start > (window.innerWidth - 275)) {
            cat.style.transform = "rotate(-90deg)";

            setInterval(left, 90);
            cat.style.left = 0;
        }
    }

    const left = () => {
        const start = parseInt(cat.style.right);
        const move = start + 9;
        cat.style.right = move + 'px';

        // if (start < (window.innerHeight - 275)) {
        //     cat.style.transform = 'rotate(-270deg)'
        //     clearInterval(moveLeft)
        // }
    }
    const moveRight = setInterval(right, 80);


    // const up = () => {
    //     const start = parseInt(cat.style.bottom);
    //     const move = start + 9;
    //     cat.style.bottom = move + 'px';
    //     if (start > (window.innerHeight - 275)) {
    //         cat.style.transform = 'rotate(180deg)'
    //         clearInterval(moveUp)
    //     }
    // }

    // const down = () => {
    //     const start = parseInt(cat.style.top);
    //     const move = start + 9;
    //     cat.style.top = move + 'px';
    // }

    // const moveUp = setInterval(up, 80);
    // const moveDown = setInterval(down, 80);

}

moveCat()


//Get a random cat from catapi.com
const getCat = async () => {
    let cat = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=${config.key}&mime_types=gif`);

    const haveCat = await cat.json();

    return haveCat;
}


//Get a new cat each time
const newCat = () => {
    getCat().then(data => {
        const cat = document.getElementById('cat');
        cat.style.cursor = "pointer";
        cat.style.width = "800px"
        cat.style.borderRadius = '200px';
        cat.style.transform = "rotate(-90deg)";
        document.body.style.background = `url(${data[0].url})`
        cat.src = `${data[0].url}`;
    }).catch(err => console.error(err));
}

//Set the background
const background = (e) => {
    const colour = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
    document.querySelector('h1').style.color = colour;
    document.body.style.backgroundColor = colour;
}

//Change background and h1 colour
document.body.addEventListener('mousemove', background);
//Get the cat
document.getElementById('cat').addEventListener('click', newCat);


if (something) {
    const moveRight = setInterval(right, 80);
}

if (something) {
    const moveUp = setInterval(up, 80);
}
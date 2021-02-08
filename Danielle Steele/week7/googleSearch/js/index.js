const search = () => {
    const xhr = new XMLHttpRequest();
    const inputText =document.getElementById('searchInput').value;
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${inputText}`);
    xhr.send(); 

    xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) return;
        const list = document.getElementById("searchResults")
        list.innerHTML = ""
        const data = JSON.parse( xhr.responseText );
            data.items.forEach(item => {
                console.log(item);
                const li = document.createElement('li');
                li.innerHTML = item.volumeInfo.title;
                list.appendChild(li);
            })
    };
};

document.getElementById('searchButton').addEventListener('click', search)
fetchFact(); 
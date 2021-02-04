const fetchResult = (e) => {
	e.preventDefault();
	const query = document.getElementById("bookTitle").value;
	const resultDiv = document.querySelector("#result");
	const xhr = new XMLHttpRequest();
	let result;
	xhr.open("GET", `https://www.googleapis.com/books/v1/volumes?q=title:${query}`);
	xhr.send();
	xhr.onload = () => {
		result = JSON.parse(xhr.responseText);
		document.querySelector("#searchHeading").className = "display";
		resultDiv.innerHTML = "";

		for (book of result.items) {
			const div = document.createElement("div");
			const h3 = document.createElement("h3");
			const img = document.createElement("img");
			const authors = document.createElement("p");
			const p = document.createElement("p");
			const hr = document.createElement("hr");
			h3.innerText = book.volumeInfo.title;
			authors.innerHTML = `<strong>${book.volumeInfo.authors.join(", ")}</strong>`;
			img.src = book.volumeInfo.imageLinks.thumbnail;
			p.innerText = book.volumeInfo.description === undefined ? "N/A" : book.volumeInfo.description;
			div.append(h3, img, authors, p, hr);
			resultDiv.append(div);
		}
	};
};

document.querySelector("#search-form").addEventListener("submit", fetchResult);

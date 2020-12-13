//1. Recipe Card

const recipe = {
    title: "Kebab",
    servings: 1,
    ingredients: ["lettuce", "tomato", "chicken"]
}

console.log(recipe.title);
console.log("Serves:", recipe.servings);
console.log(Object.keys(recipe)[2])
console.log(recipe.ingredients[0]);
console.log(recipe.ingredients[1]);
console.log(recipe.ingredients[2]);


//2. Reading List 

const books = [{
        title: "Book 1",
        author: "John Smith",
        alreadyRead: true
    },
    {
        title: "Book 2",
        author: "Jill Turner",
        alreadyRead: false
    },
    {
        title: "Book 3",
        author: "Mike Lewis",
        alreadyRead: true
    }
]

// Sanity check 
// console.log(books);

// Trusty for loop
for (i = 0; i < books.length; i++) {
    console.log(books[i].title);
    console.log(books[i].author);
}

// syntactical sugar  
books.forEach(book => {
    console.log(book.title);
    console.log(book.author);
})



// 3. Move Database

const movie = {
    title: "Jurassic Park",
    duration: 180,
    stars: ["Sam Neil", "Laura Dern", "Jeff Goldblum"]
}

const movieInfo = m => `${m.title} lasts for ${m.duration} minutes. Stars: ${m.stars.join(', ')}.`;
console.log(movieInfo(movie));
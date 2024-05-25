// // fetch ('923960c711974ca5a3fa71427a8f905c')
// // .then(function(response){
// //     return response.json()
// // })
// // .then(function(data){
// //     console.log(data);
// // })

const api_key = '923960c711974ca5a3fa71427a8f905c'
const button = document.querySelector(".button")
console.log(button);
button.addEventListener("click", search)

const selectCountries = document.querySelector("#selectCountries")
console.log(selectCountries.value);

function search(){
    const userCountry = selectCountries.value

    const countriesUrl = `https://newsapi.org/v2/top-headlines?country=${userCountry}&apiKey=${api_key}`

    fetch(countriesUrl)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        displayUserDate(data)
    })
}

function displayUserDate(obj){
    const displayDate = document.querySelector(".displayDate")

    obj.articles.forEach(element => {
        const card = document.createElement("div")
        card.classList.add("card")

        const author = document.createElement("h2")
        author.classList.add("author")

        const publishedAt = document.createElement("p")
        publishedAt.classList.add("publishedAt")

        const title = document.createElement("p")
        title.classList.add("title")

        const url = document.createElement("a")
        url.classList.add("url")
        url.href = element.url
        url.target = "_blank"

        const source = document.createElement("p")
        source.classList.add("source")

        author.innerText = "Author name: " + element.author
        publishedAt.innerText = "Publish: " + element.publishedAt
        title.innerText = element.title
        url.innerText = "Read more" 
        source.innerText = element.source.name

        displayDate.appendChild(card)
        card.appendChild(author)
        card.appendChild(publishedAt)
        card.appendChild(title)
        card.appendChild(url)
        card.appendChild(source)
    });
    
}


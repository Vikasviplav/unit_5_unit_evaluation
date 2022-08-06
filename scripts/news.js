
var user_obj = JSON.parse(localStorage.getItem("userData"));




var getNews = async () => {
    try {
        let country_code = user_obj.country;
        let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country_code}`
        let res = await fetch(url)
        res = await res.json()
        console.log(res.articles)
        showData(res.articles)
    } catch (error) {
        console.log(error)
    }
}
getNews()

var showData = (data) => {
    data.forEach(ele => {
        let news = document.querySelector("#news")
        let newsCard = document.createElement("div")
        let img = document.createElement("img")
        img.src = ele.urlToImage
        let titleElement = document.createElement("h3")
        titleElement.textContent = ele.title
        let descriptionElement = document.createElement("h4")
        descriptionElement.textContent = ele.description
        newsCard.append(img,titleElement,descriptionElement)
        news.append(newsCard)

    });


}


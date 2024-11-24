const postsMain = document.querySelector(".posts__main");
console.log(postsMain);
const zarina = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        data.forEach((item) => {
            const card = document.createElement("div");
            card.classList.add("card")
            card.innerHTML = `
                <img src="data:image/jpeg;base64,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" alt="">
                <h2>${item.title}</h2>
                <p>${item.body}</p>
            `
            postsMain.append(card)
        })

    }catch(e){
        console.log(e)
    }
}
zarina();
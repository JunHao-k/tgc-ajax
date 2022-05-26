let buttonClick = document.querySelector("#load-image-btn")
buttonClick.addEventListener("click" ,  async () => {
    let response = await axios.get("artwork.json")
    let divElement = document.createElement('div');
    let header1 = document.createElement('h1');
    header1.innerHTML = `${response.data.title}`
    let image = document.createElement('img');
    image.src = response.data.image_url

    divElement.appendChild(header1)
    divElement.appendChild(image)

    document.querySelector("#artwork").appendChild(divElement)
})

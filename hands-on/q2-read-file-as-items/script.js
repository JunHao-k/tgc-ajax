async function getFruits(){
    let response = await axios.get('items.txt')
    let getList = response.data.split(",")
    let ulElement = document.createElement('ul');
    for(let item of getList){
        let listedItems = document.createElement('li')
        console.log(listedItems)
        listedItems.innerHTML = `${item}`
        ulElement.appendChild(listedItems)
    }
    document.querySelector('#list').appendChild(ulElement);
}
getFruits()


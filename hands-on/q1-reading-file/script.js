async function getContact(){
    let response = await axios.get('contact.txt')
    document.querySelector('#content').innerHTML = response.data
}

let buttonClick = document.querySelector('#load-btn')
buttonClick.addEventListener('click' ,  getContact)
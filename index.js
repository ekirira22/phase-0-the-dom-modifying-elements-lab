//remove mainelement
const mainElement = document.querySelector('main')
mainElement.remove()

const bodyElement = document.querySelector('body')
bodyElement.innerHTML = '<h1 id="victory"> </h1>'

const newHeader = document.querySelector('h1')

newHeader.textContent = 'Eric Maranga is the champion'


// const element = document.createElement("div");
// document.body.append(element)

// const ul = document.createElement('ul')


// for(let i=0; i<3; i++){
//     const li = document.createElement('li')
//     li.textContent = (i+1).toString()
//     li.style.color = "#ffffff"
//     ul.append(li)
// }

// element.append(ul)

// const secondChild = ul.querySelector("li:nth-child(2)");
// ul.removeChild(secondChild);

// const getbody = document.querySelector('div')

// getbody.style.backgroundColor = "#1010ff"


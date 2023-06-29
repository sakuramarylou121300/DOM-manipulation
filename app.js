//DOM manipulation

//1. GetElementById()
const titleId = document.getElementById('main-heading');
console.log(`This is document getElementById`)
console.log(titleId)

//2. GetElementByClassName()
const listItemClassName = document.getElementsByClassName('list-items');
console.log(`This is document getElementByClassName`)
console.log(listItemClassName)

//3. GetElementByTagName()
const listItemTagName = document.getElementsByTagName('li');
console.log(`This is document getElementByTagName`)
console.log(listItemTagName)

//4. querySelector
const containerQuerySelect = document.querySelector('div');
console.log(`This is document querySelector`)
console.log(containerQuerySelect)

//querySelectorAll()
const containerQuerySelectAll = document.querySelectorAll('div');
console.log(`This is document querySelectorAll`)
console.log(containerQuerySelectAll)
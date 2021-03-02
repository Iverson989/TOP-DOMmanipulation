// REFERENCE NOTES:
// const div = document.createElement('div');

// div.textContent = 'Hello World!' --creates a text node containing "Hello 
// World!" and inserts it in div

// const container = document.querySelector('#container');

// div.setAttribute('id', 'theDiv'); --if id exists update it to 'theDiv' else
// create an id with value "theDiv"

// div.classList.add('new'); --adds class "new" to your new div
// class.style.cssText = 'color: blue; background: white'; --adds several style
// rules

// parentNode.appendChild(childNode) --appends childNode as the last child of
// parentNode

// ADD THESE TO container:
const container = document.querySelector('#container');

// EXAMPLE
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

// a <p> with red text that says “Hey I’m red!”
const p = document.createElement('p');
p.classList.add('p')
p.textContent = `Hey I'm red!`
p.style.cssText = 'color: red;';
container.appendChild(p);

// an <h3> with blue text that says “I’m a blue h3!”
const h3 = document.createElement('h3');
h3.classList.add('h3')
h3.textContent = `I'm a blue h3!`;
h3.style.cssText = 'color: blue;';
container.appendChild(h3)

// a <div> with a black border and pink background color
const div = document.createElement('div');
div.setAttribute('id', 'newContainer');
div.style.cssText = 'border: solid black; background: pink;';
container.appendChild(div);

// with the following elements inside of it:
// another <h1> that says “I’m in a div”
const h1 = document.createElement('h1');
h1.classList.add('h1')
h1.textContent = `I'm in a div`;
newContainer.appendChild(h1);

// a <p> that says “ME TOO! 
const p2 = document.createElement('p');
p2.classList.add('p2')
p2.textContent = `ME TOO!`
newContainer.appendChild(p2)
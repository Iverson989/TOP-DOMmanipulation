<!-- html
<body>
  <h1>
    THE TITLE OF YOUR WEBPAGE
  </h1>
  <div id="container"></div>
</body>
-->
<!-- js example
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);
-->
Copy the code above out of the comment tags and place them into files on your own computer. To make it work you’ll need to supply the rest of the HTML skeleton and either link your javascript file, or put the javascript into a script tag on the page. Make sure everything is working before moving on!

Add the following elements to the container using ONLY javascript - do not add any HTML or CSS code.

a p element with red text that says “Hey I’m red!”
an h3 element with blue text that says “I’m a blue h3!”
a div element with a black border and pink background color with the following elements inside of it:
an h1 element that says “I’m in a div”
another p element that says “ME TOO!”
Hint for this one: after creating the div with createElement, append the h1 and p to it before adding it to the container.
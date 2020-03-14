
/**
*
*	Inject a link too the search bar that takes you too google search.
*
**/

var menu = document.getElementById('masthead');

if (menu.hasChildNodes()) {
	var input = menu.querySelector("#search-input").children[0];

	var node = document.createElement("A");         
	var textNode = document.createTextNode("On the Web"); 
	
	node.appendChild(textNode);
	
	node.href = "https://www.google.com/search?q=" + input.value.replace(/ /g, '+');
	node.title = "Search on the web";    
	node.id = "youtube-search-google-299";

	input.parentNode.parentNode.appendChild(node);
	
	input.addEventListener('input', (event) => {
		document.getElementById("youtube-search-google-299").href = "https://www.google.com/search?q=" + input.value.replace(/ /g, '+');
	});
}
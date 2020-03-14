/**
*
*	change the href of the Video search on google.com too take you directly too youtube with the parameters used.
*
**/

var menu = document.getElementById('hdtb-msb-vis');

if (menu.hasChildNodes()) {

	let nodeList = menu.childNodes;

	for (var i=0; i < nodeList.length; i++) {
		let item = nodeList[i].getElementsByTagName('A');

		if (item.length > 0) {

			var searchForm = document.getElementById('searchform');
			var input = searchForm.getElementsByClassName('gLFyf')[0];

			if (item[0].innerText === "Videos") {
				item[0].href = "https://www.youtube.com/results?search_query=" + input.value.replace(/ /g, '+');
		
				input.addEventListener('input', (event) => {
					item[0].href = "https://www.google.com/search?q=" + input.value.replace(/ /g, '+');
				});	
			}

		}
	  
	}
}
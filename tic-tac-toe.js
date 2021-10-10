"use strict"
window.onload = function(){
	var body = document.getElementsByTagName("body");
	//console.log(body);

	var mydiv = document.getElementById("board");
	//console.log(mydiv);
	//console.log(mydiv.children);
	let boardlist = mydiv.children;
	//console.log(boardloc);

	/*function divclassIntitialize(){
		for(var i=0;i<boardlist.length;i++)
			//console.log(i);
			console.log(boardlist[i]);
	};*/
	boardlist[0].setAttribute("class","square");
	boardlist[1].setAttribute("class","square");
	boardlist[2].setAttribute("class","square");
	boardlist[3].setAttribute("class","square");
	boardlist[4].setAttribute("class","square");
	boardlist[5].setAttribute("class","square");
	boardlist[6].setAttribute("class","square");
	boardlist[7].setAttribute("class","square");
	boardlist[8].setAttribute("class","square");
	
	//console.log(boardlist[0].getAttribute("class"));
	divclassIntitialize();
	console.log(boardlist[0].className);
}


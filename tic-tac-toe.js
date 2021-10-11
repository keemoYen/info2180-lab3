"use strict"
window.onload = function(){
	var body = document.getElementsByTagName("body");
	//console.log(body);
	
	console.log(button);
	var mydiv = document.getElementById("board").children;
	console.log(mydiv);
	//console.log(mydiv.children);
	let boardlist = mydiv;
	//console.log(typeof(boardlist[0]));
	console.log(boardlist.length);


	function divclassIntitialize(){
		for(var i=0;i<boardlist.length;i++){
			boardlist[i].appendChild(document.createElement("p"));
			boardlist[i].setAttribute("class","square");
			boardlist[i].setAttribute("id",[i]);
			boardlist[i].addEventListener('click',clickEventHandler);
			}
	}
	divclassIntitialize();


	let firstPlayer = "X";
	let secondPlayer = "O";
	let flag = true;
	let BoardState = Array.from(Array(9).keys());
	console.log(BoardState);
	const winCombos =[
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[6,4,2],
	];
	highlight(flag);

	function clickEventHandler(square){
		if (flag){
			turn(square.target.id,firstPlayer);
			flag = false;
			console.log(flag);
			boardlist[square.target.id].style.color="red";
		}
		else{
			turn(square.target.id,secondPlayer);
			flag = true;
			//console.log(flag);
			console.log(square.target.id);
			boardlist[square.target.id].style.color="blue";
		}
		//console.log(square.target.id);
	}

	function turn(squareId,player){
		BoardState[squareId] =player;
		document.getElementById(squareId).innerText=player;
		
	}

	function newGame (){
		console.log("print success 1");
		for(var i=0; i<boardlist.length;i++){
		boardlist[i].innerText='';
		console.log("print success");
		let BoardState = Array.from(Array(9).keys());
		}
	}
	var button = document.querySelector("button");
	button.addEventListener('click',newGame);
	
	function highlight(flag){
		if (flag){
			boardlist[0].addEventListener("mouseover",function(e){e.target.classList.add('hover')});
			boardlist[0].addEventListener("mouseout",function(e){e.target.classList.remove('hover')});
			boardlist[1].addEventListener("mouseover",function(e){e.target.classList.add('hover')});
			boardlist[1].addEventListener("mouseout",function(e){e.target.classList.remove('hover')});
			boardlist[2].addEventListener("mouseover",function(e){e.target.classList.add('hover')});
			boardlist[2].addEventListener("mouseout",function(e){e.target.classList.remove('hover')});
			boardlist[3].addEventListener("mouseover",function(e){e.target.classList.add('hover')});
			boardlist[3].addEventListener("mouseout",function(e){e.target.classList.remove('hover')});
			boardlist[4].addEventListener("mouseover",function(e){e.target.classList.add('hover')});
			boardlist[4].addEventListener("mouseout",function(e){e.target.classList.remove('hover')});
			boardlist[5].addEventListener("mouseover",function(e){e.target.classList.add('hover')});
			boardlist[5].addEventListener("mouseout",function(e){e.target.classList.remove('hover')});
			boardlist[6].addEventListener("mouseover",function(e){e.target.classList.add('hover')});
			boardlist[6].addEventListener("mouseout",function(e){e.target.classList.remove('hover')});
			boardlist[7].addEventListener("mouseover",function(e){e.target.classList.add('hover')});
			boardlist[7].addEventListener("mouseout",function(e){e.target.classList.remove('hover')});
			boardlist[8].addEventListener("mouseover",function(e){e.target.classList.add('hover')});
			boardlist[8].addEventListener("mouseout",function(e){e.target.classList.remove('hover')});
		}
		else{

		}
	}
	/*

	var divItem = document.createElement("p");
	divItem.setAttribute("class",".square.X");
	var divItemTextFP= document.createTextNode("X");
	var divItemTextSP= document.createTextNode("O");
	divItem.appendChild(divItemTextFP)
	*/
	//console.log(boardlist[0].innerText="X");
	//console.log("mission Complete");
	
	//console.log(boardlist[8]);

	
	//console.log(boardlist[0].children);


}


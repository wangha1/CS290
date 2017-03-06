var up = document.createElement("button");
up.textContent = "up";
var down = document.createElement("button");
down.textContent = "down";
var left = document.createElement("button");
left.textContent = "left";
var right = document.createElement("button");
right.textContent = "right"
var mark = document.createElement("button");
mark.textContent = "Mark Cell";
document.getElementById("up").appendChild(up);
document.getElementById("down").appendChild(down);
document.getElementById("left").appendChild(left);
document.getElementById("right").appendChild(right);
document.getElementById("mark").appendChild(mark);

var newTable = document.createElement("table");
var tableHead = document.createElement("thead");
var tableBody = document.createElement("tbody");
newTable.appendChild(tableHead);
newTable.appendChild(tableBody);
newTable.style.border = "solid";
for(var row = 0 ; row < 4; row++){
		for(var col = 1; col < 5; col++){
    		if(row == 0){
            var Header = document.createElement("th");
            Header.textContent = "Header" + col;
            Header.style.border = "solid";
            tableHead.appendChild(Header);
        }
        else{
        		if(col == 1){
            		var Row = document.createElement("tr");
                tableBody.appendChild(Row);
            }
        		var Body = document.createElement("td");
            Body.textContent = row + ", " + col;
            Body.style.border = "solid";
            Row.appendChild(Body);
        }
    }
    
}
document.getElementById("tableContainer").appendChild(newTable);
var selectedCell = tableBody.children[0].children[0];
selectedCell.style.borderWidth = "thick";

function moveUp(){
		var toUpdate = document.getElementById("tableContainer")
    var body = toUpdate.children[0].children[1];
    var bodyChild = body.children;
    for(var j = 0; j < 3; j++){
    		for(var i = 0; i < 4; i++){
        		if(body.children[j].children[i].style.borderWidth == "thick"){
            		var row = j;
                var col = i;
            }
        }
    }
    if(row != 0){
    		body.children[row].children[col].style.borderWidth = "initial";
        body.children[row-1].children[col].style.borderWidth = "thick";
    }
}

function moveDown(){
		var toUpdate = document.getElementById("tableContainer")
    var body = toUpdate.children[0].children[1];
    var bodyChild = body.children;
    for(var j = 0; j < 3; j++){
    		for(var i = 0; i < 4; i++){
        		if(body.children[j].children[i].style.borderWidth == "thick"){
            		var row = j;
                var col = i;
            }
        }
    }
    if(row != 2){
    		body.children[row].children[col].style.borderWidth = "initial";
        body.children[row+1].children[col].style.borderWidth = "thick";
    }
}

function moveLeft(){
		var toUpdate = document.getElementById("tableContainer")
    var body = toUpdate.children[0].children[1];
    var bodyChild = body.children;
    for(var j = 0; j < 3; j++){
    		for(var i = 0; i < 4; i++){
        		if(body.children[j].children[i].style.borderWidth == "thick"){
            		var row = j;
                var col = i;
            }
        }
    }
    if(col != 0){
    		body.children[row].children[col].style.borderWidth = "initial";
        body.children[row].children[col-1].style.borderWidth = "thick";
    }
}

function moveRight(){
		var toUpdate = document.getElementById("tableContainer")
    var body = toUpdate.children[0].children[1];
    var bodyChild = body.children;
    for(var j = 0; j < 3; j++){
    		for(var i = 0; i < 4; i++){
        		if(body.children[j].children[i].style.borderWidth == "thick"){
            		var row = j;
                var col = i;
            }
        }
    }
    if(col != 3){
    		body.children[row].children[col].style.borderWidth = "initial";
        body.children[row].children[col+1].style.borderWidth = "thick";
    }
}

function Mark(){
		var toUpdate = document.getElementById("tableContainer")
    var body = toUpdate.children[0].children[1];
    var bodyChild = body.children;
    for(var j = 0; j < 3; j++){
    		for(var i = 0; i < 4; i++){
        		if(body.children[j].children[i].style.borderWidth == "thick"){
            		var row = j;
                var col = i;
            }
        }
    }
    body.children[row].children[col].style.backgroundColor = "yellow";
}


document.getElementById("up").addEventListener("click",moveUp);
document.getElementById("down").addEventListener("click",moveDown);
document.getElementById("left").addEventListener("click",moveLeft);
document.getElementById("right").addEventListener("click",moveRight);
document.getElementById("mark").addEventListener("click",Mark);


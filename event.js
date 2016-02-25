document.getElementById('color').addEventListener('input',change,false);

function change(){
	document.body.style.backgroundColor=this.value;
}

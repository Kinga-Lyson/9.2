
var womensNames = ['Ola', 'Kasia', 'Basia', 'Kinga', 'Magda', 'Agnieszka', 'Wiktoria', 'Weronika'];
var mensNames = ['Mateusz', 'Bartosz', 'Paweł', 'Adaś', 'Tomek', 'Grzesiek'];
var allNames = womensNames.concat(mensNames);



var newName = prompt('Podaj imie: ');

function addNewName(newName) { 
	if (allNames.indexOf(newName) === -1) {
		var x = allNames.splice(0,0,newName);
		return "imie zostalo dodane";
	}
	else {
		return "imie wystepuje w tabeli";
	}
}
console.log(addNewName(newName));
console.log(allNames.length);
console.log(allNames);


let obj1 = {
	firstName: 'Vasya',
	lastName: 'Pupkin',
	father: {
		firstName: 'Ivan',
		lastName: 'Pupkin'
	}
};

let obj2 = {
	firstName: 'Vasya',
	lastName: 'Pupkin',
	father: {
		firstName: 'Ivan',
		lastName: 'Pupkin'
	}
};

//Простое сравнение

console.log(objIsEqual(obj1, obj2));

function objIsEqual(obj1, obj2) {
	let counter = 0;
	for (let key in obj1) {
		if (obj1[key] == obj2[key]) {
			counter++;
		}
		if (typeof(obj1[key]) == typeof(obj1)) {
			counter++;
		}
	}
	if (counter == Object.keys(obj1).length) {
		return true;
	} else {
		return false;
	}
} 

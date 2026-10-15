function sum1() {
	return 2 + 3;
}

console.log(sum1());

let num1 = 6;
let num2 = 9;

function sum2() {
	return num1 + num2;
}

console.log(sum2());

function sum3() {
	let intNum1 = 9;
	let intNum2 = 15;
	return intNum1 + intNum2;
}

console.log(sum3());

function sum4(num1, num2) {
	return num1 * num2;
}

console.log(`Prima chiamata: ${sum4(4, 8)}`);
console.log(`Seconda chiamata: ${sum4(9, 5)}`);
console.log(`Terza chiamata: ${sum4(7, 6)}`);
console.log(`Quarta chiamata: ${sum4(num1, num2)}`);
console.log(`Quinta chiamata: ${sum4(sum3(), sum2())}`); // Passo le due funzioni sum3 e sum2 come argomenti per la funziione sum4

function greeting(name = 'Amico') {
	return `Ciao ${name}`;
}

console.log(greeting('Pippo'));
console.log(greeting('Alessandro'));
console.log(greeting(15));
console.log(greeting());

function division(num1, num2) {
	if (num1 === 0 || num2 === 0) {
		console.log('ERRORE! Divisione per zero');
		return;
	}
	return num1 / num2;
}

console.log(division(9, 3));
console.log(division(0, 3));

function creaContatore() {
	let count = 0;
	return function () {
		count++;
		return count;
	};
}

const contatore = creaContatore();

for (let i = 0; i < 50; i++) {
	console.log(contatore());
}

const myString = document.querySelector('#myString');
const upperString = document.querySelector('#upperString');
const lowerString = document.querySelector('#lowerString');

function modifyString() {
	let userName = 'Pippo';
	upperString.textContent = `${userName.toUpperCase()}`;
	lowerString.textContent = `${userName.toLowerCase()}`;
	myString.textContent = userName;
}

modifyString();

function verifyEmail(emailAddress = '') {
	if (emailAddress.includes('@')) {
		console.log('Email corretta');
	} else {
		console.log('Email non valida!');
	}
}

verifyEmail('pippo@pippo.com');
verifyEmail('Paperino');

const myWord = document.querySelector('#myWord');
const myPhrase = document.querySelector('#myPhrase');

function splitString() {
	let word = 'Epicode';
	let phrase = 'Ciao, Mondo, siamo FS0326';
	myWord.textContent = word.split('');
	myPhrase.textContent = phrase.split(',');
	console.log(word.split(''));
	console.log(phrase.split(','));
}

splitString();

const initialEmail = document.querySelector('#initialEmail');
const normalizedEmail = document.querySelector('#normalizedEmail');
let normalEmail;

function normalizeEmail(emailAddress = '') {
	initialEmail.textContent += emailAddress;
	emailAddress = emailAddress.trim();
	const myStringArray = emailAddress.split('');
	console.log(myStringArray);
	for (let i = 0; i < myStringArray.length; i++) {
		if (myStringArray[i] === ' ') {
			myStringArray.splice(i, 1);
		}
	}
	console.log(myStringArray);
	emailAddress = myStringArray.join('');
	normalEmail = emailAddress;
	normalizedEmail.textContent += normalEmail;
}

normalizeEmail('   p i ppo @ email . com   ');
console.log(normalEmail);

const myDateArray = [20, 10, 1967];

let myBirthDate = myDateArray.join('/');
console.log(myBirthDate);

const today = new Date();
console.log(today);

const thisDay = today.getDay();

switch (thisDay) {
	case 0:
		console.log('Oggi è domenica');
		break;

	case 1:
		console.log('Oggi è lunedì');
		break;

	case 2:
		console.log('Oggi è martedì');
		break;

	case 3:
		console.log('Oggi è mercoledì');
		break;

	case 4:
		console.log('Oggi è giovedì');
		break;

	case 5:
		console.log('Oggi è venerdì');
		break;

	case 6:
		console.log('Oggi è sabato');
		break;
}

const initialDate = new Date(2026, 9, 5);
console.log(initialDate);

const birthDate = document.querySelector('#birthDate');
let newBirthDate = new Date(1967, 9, 20);
newBirthDate = newBirthDate.toLocaleDateString('it-IT', {
	weekday: 'long',
	day: 'numeric',
	month: 'long',
	year: 'numeric',
});

birthDate.textContent += newBirthDate;

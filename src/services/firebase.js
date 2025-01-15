import firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyA-_mnUQ4kNNi61f71pe2gDONwYaqqzDKA',
	authDomain: 'lab6-prueba.firebaseapp.com',
	projectId: 'lab6-prueba',
	storageBucket: 'lab6-prueba.firebasestorage.app',
	messagingSenderId: '794296916530',
	appId: '1:794296916530:web:3ca7713fdbd351e267ba2b',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const saveUser = (user) => {
	db.collection('users')
		.add({
			user,
		})
		.then((docRef) => {
			confirmMessage();
		})
		.catch((error) => {
			errorMessage();
		});
};

const confirmMessage = () => {
	Swal.fire({
		title: 'Good job!',
		text: 'Tus datos se han guardado correctamente, recibiriás información a tu correo electrónico',
		icon: 'success',
	});
};

const errorMessage = () => {
	Swal.fire({
		icon: 'error',
		title: 'Oops...',
		text: 'El correo ya existe',
	});
};

document.addEventListener('DOMContentLoaded', () => {
	const button = document.getElementById('btnsave');

	if (button) {
		button.addEventListener('click', (event) => {
			event.preventDefault(); // Evita que la página se recargue
			alert('Hola, ¡el botón funciona!');
		});
	} else {
		console.error('Botón no encontrado');
	}
});

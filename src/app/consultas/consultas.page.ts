import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
})
export class ConsultasPage implements OnInit {

	preguntaFecha: string;
	situacionVivienda: string;
	situacionTrabajo: string;
	rangoEdad: string;
	fuma: string;
	viaje: string;
	viajeFecha:string;
	contactoConfirmado: string;
	contactoSospechoso: string;
	contactoFecha: string;
	fiebreAyer: string;
	fiebreAnterior: string;
	temperatura: string;
	escalosfrios: string;
	cansado: string;
	dolor: string;
	tos: string;
	moqueo: string;
	diarrea: string;
	garganta: string;
	cabeza: string;
	aliento: string;
	olfato: string;
	enfermedadPulmonar: string;
	diabetes: string;
	cardiaca: string;
	obesidad: string;
	embarazada: string;
	esteroides: string;
	inmunosupresores: string;
	contador : string = 'fecha de nacimiento';
	clase: string;
	edad = 0;
	factorDeRiesgo = 0;
	agravantes = 0;
	probabilidad = 0;

  constructor() {}

  ngOnInit() {
  	
  	const btnSiguiente = document.querySelector('#siguiente');
  	const preguntasItem = document.querySelector('#preguntas');
  	const chatList = document.querySelector('#chat-list');
  	const btnPreguntas = document.querySelector('#btn-preguntas');

/*  	const curday = function(){
  	let today = new Date();
  	let dd = today.getDate();
  	let mm = today.getMonth()+1; //As January is 0.
  	let yyyy = today.getFullYear();

  	if(+dd<10) dd='0'+dd;
  	if(+mm<10) mm='0'+mm;
  	return (yyyy+'-'+mm+'-'+dd);
  	};

  	console.log(curday());*/

  	const dataConsulta:JSON = <JSON><unknown>{
  		'viaje_fecha': '',
  		'contacto_sospechoso': '1',
  		'contacto_fecha': '',
  		'temperatura': ''
  	}

  	btnSiguiente.addEventListener('click', () => {

		if (this.contador == 'fecha de nacimiento') {
		  	if (this.preguntaFecha == undefined) {
		  		return;
		  	}
			if (this.preguntaFecha.trim().length <= 0) {
				return;
			}
				console.log('Pregunta: ' + this.contador);
				console.log('Edad: ' + this.preguntaFecha.substr(0,4));
				this.edad = 2020 - +this.preguntaFecha.substr(0,4);
				dataConsulta['edad'] = this.preguntaFecha;


				if (this.edad > 0 && this.edad < 40) {
					this.rangoEdad = 'Menor de 40 años';
				} else if (this.edad >= 40 && this.edad <51){
					this.rangoEdad = 'De 40 a 50 años';
					this.agravantes += 1;
				} else if (this.edad >=51 && this.edad < 61){
					this.rangoEdad = 'De 51 a 60 años';
					this.agravantes += 1;
				} else if (this.edad >=61 && this.edad < 81){
					this.rangoEdad = 'De 61 a 80 años';
					this.agravantes += 2;
				} else {
					this.rangoEdad = 'Mayor de 80 años';
					this.agravantes += 2;
				}
				console.log(dataConsulta);
				console.log('Factor de Riesgo: ' + this.factorDeRiesgo);
				console.log('Agravantes: ' + this.agravantes);
				console.log('Probabilidad: ' + this.probabilidad);

				//preguntasItem.innerHTML = '';
				//btnPreguntas.innerHTML = '';
				const newPregunta = document.createElement('ion-item');
				newPregunta.innerHTML = `<ion-item><p class="ion-text-start"><strong>¿Qué edad tiene?</strong></p></ion-item>`;
				chatList.appendChild(newPregunta);
				const newRespuesta = document.createElement('ion-item');
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">${this.rangoEdad}</p></ion-item>`;
				chatList.appendChild(newRespuesta);
				this.contador = 'situacion de vivienda';
		}

		if (this.contador == 'situacion de vivienda') {
	  		if (this.situacionVivienda == undefined) {
		  		return;
		  	}
			console.log(this.situacionVivienda);
			dataConsulta['situacion_vivienda'] = this.situacionVivienda;

			console.log(dataConsulta);

			const newPregunta = document.createElement('ion-item');
			newPregunta.innerHTML = `<ion-item><p class="ion-text-start"><strong>¿Cuál es su situación actual de vivienda?</strong></p></ion-item>`;
			chatList.appendChild(newPregunta);
			const newRespuesta = document.createElement('ion-item');
			if (+this.situacionVivienda == 0) {
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">Vivo solo</p></ion-item>`;
			} else {
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">Vivo con mi familia</p></ion-item>`;
				this.agravantes += 1;
			}
			chatList.appendChild(newRespuesta);
			console.log('Factor de Riesgo: ' + this.factorDeRiesgo);
			console.log('Agravantes: ' + this.agravantes);
			console.log('Probabilidad: ' + this.probabilidad);

			this.contador = 'situacion de trabajo';
		}
		if (this.contador == 'situacion de trabajo') {
	  		if (this.situacionTrabajo == undefined) {
		  		return;
		  	}
			console.log(this.situacionTrabajo);
			dataConsulta['trabajo'] = this.situacionTrabajo;

			console.log(dataConsulta);

			const newPregunta = document.createElement('ion-item');
			newPregunta.innerHTML = `<ion-item><p class="ion-text-start"><strong>¿Dónde trabaja?</strong></p></ion-item>`;
			chatList.appendChild(newPregunta);
			const newRespuesta = document.createElement('ion-item');
			if (+this.situacionTrabajo == 0) {
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">En el campo médico</p></ion-item>`;
				this.agravantes += 2;
			} else if (+this.situacionTrabajo == 1) {
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">En un área comunitaria</p></ion-item>`;
				this.agravantes += 1;
			} else {
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">Independiente</p></ion-item>`;
			} 
			chatList.appendChild(newRespuesta);
			console.log('Factor de Riesgo: ' + this.factorDeRiesgo);
			console.log('Agravantes: ' + this.agravantes);
			console.log('Probabilidad: ' + this.probabilidad);

			this.contador ='fuma';
		}
		if (this.contador == 'fuma') {
	  		if (this.fuma == undefined) {
		  		return;
		  	}
			console.log(this.fuma);
			dataConsulta['fuma'] = this.fuma;

			console.log(dataConsulta);

			const newPregunta = document.createElement('ion-item');
			newPregunta.innerHTML = `<ion-item><p class="ion-text-start"><strong>¿Usted fuma?</strong></p></ion-item>`;
			chatList.appendChild(newPregunta);
			const newRespuesta = document.createElement('ion-item');
			if (+this.fuma == 0) {
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">Si</p></ion-item>`;
				this.agravantes += 1;
			} else {
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">No</p></ion-item>`;
			} 
			chatList.appendChild(newRespuesta);
			console.log('Factor de Riesgo: ' + this.factorDeRiesgo);
			console.log('Agravantes: ' + this.agravantes);
			console.log('Probabilidad: ' + this.probabilidad);

			this.contador = 'viaje';
		}
		if (this.contador == 'viaje') {
	  		if (this.viaje == undefined) {
		  		return;
		  	}
			console.log(this.viaje);
			dataConsulta['viaje'] = this.viaje;

			console.log(dataConsulta);

			const newPregunta = document.createElement('ion-item');
			newPregunta.innerHTML = `<ion-item><p class="ion-text-start"><strong>¿Ha viajado?</strong></p></ion-item>`;
			chatList.appendChild(newPregunta);
			const newRespuesta = document.createElement('ion-item');
			if (+this.viaje == 0) {
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">Si</p></ion-item>`;
				this.contador = 'fecha de viaje';
				this.agravantes += 2;
				this.probabilidad += 1;
			} else {
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">No</p></ion-item>`;
				this.contador = 'contacto confimado';
			} 
			chatList.appendChild(newRespuesta);
			console.log('Factor de Riesgo: ' + this.factorDeRiesgo);
			console.log('Agravantes: ' + this.agravantes);
			console.log('Probabilidad: ' + this.probabilidad);

		}
		if (this.contador == 'fecha de viaje') {
	  		if (this.viajeFecha == undefined) {
		  		return;
		  	}
		  	if (this.viajeFecha.trim().length <= 0) {
		  		return;
		  	}
			console.log(this.viajeFecha);
			dataConsulta['viaje_fecha'] = this.viajeFecha;

			console.log(dataConsulta);

			const newPregunta = document.createElement('ion-item');
			newPregunta.innerHTML = `<ion-item><p class="ion-text-start"><strong>¿Cuándo regresó de su viaje?</strong></p></ion-item>`;
			chatList.appendChild(newPregunta);
			const newRespuesta = document.createElement('ion-item');
			newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">${this.viajeFecha.substr(5,5)}</p></ion-item>`;
			chatList.appendChild(newRespuesta);
			this.contador = 'contacto confimado';
		}
		if (this.contador == 'contacto confimado') {
	  		if (this.contactoConfirmado == undefined) {
		  		return;
		  	}
			console.log(this.contactoConfirmado);
			dataConsulta['contacto_confirmado'] = this.contactoConfirmado;

			console.log(dataConsulta);

			if (+this.contactoConfirmado == 0) {
				this.contador = 'fecha de contacto';
				const newPregunta = document.createElement('ion-item');
				newPregunta.innerHTML = `<ion-item><p class="ion-text-start"><strong>¿Ha estado en contacto con algún caso confirmado?</strong></p></ion-item>`;
				chatList.appendChild(newPregunta);
				const newRespuesta = document.createElement('ion-item');
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">Si</p></ion-item>`;
				chatList.appendChild(newRespuesta);
				this.probabilidad += 1;
				this.agravantes += 2;
			} else {
				this.contador = 'contacto sospechoso';
			}
			console.log('Factor de Riesgo: ' + this.factorDeRiesgo);
			console.log('Agravantes: ' + this.agravantes);
			console.log('Probabilidad: ' + this.probabilidad);


		}
		if (this.contador == 'contacto sospechoso') {
	  		if (this.contactoSospechoso == undefined) {
		  		return;
		  	}
			console.log(this.contactoSospechoso);
			dataConsulta['contacto_confirmado'] = this.contactoSospechoso;

			console.log(dataConsulta);

			if (+this.contactoSospechoso == 0) {
				this.contador = 'fecha de contacto';
				const newPregunta = document.createElement('ion-item');
				newPregunta.innerHTML = `<ion-item><p class="ion-text-start"><strong>¿Ha estado en contacto con algún caso confirmado?</strong></p></ion-item>`;
				chatList.appendChild(newPregunta);
				const newRespuesta = document.createElement('ion-item');
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">Si</p></ion-item>`;
				this.probabilidad += 1;
				this.agravantes += 2;
				chatList.appendChild(newRespuesta);
			} else {
				this.contador = 'fiebre ayer';
				const newPregunta = document.createElement('ion-item');
				newPregunta.innerHTML = `<ion-item><p class="ion-text-start"><strong>¿Ha estado en contacto con algún caso confirmado o sospechoso?</strong></p></ion-item>`;
				chatList.appendChild(newPregunta);
				const newRespuesta = document.createElement('ion-item');
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">No</p></ion-item>`;
				chatList.appendChild(newRespuesta);
			}
				console.log('Factor de Riesgo: ' + this.factorDeRiesgo);
				console.log('Agravantes: ' + this.agravantes);
				console.log('Probabilidad: ' + this.probabilidad);

		}
		if (this.contador == 'fecha de contacto') {
	  		if (this.contactoFecha == undefined) {
		  		return;
		  	}
		  	if (this.contactoFecha.trim().length <= 0) {
		  		return;
		  	}
			console.log(this.contactoFecha);
			dataConsulta['contacto_fecha'] = this.contactoFecha;

			console.log(dataConsulta);

			const newPregunta = document.createElement('ion-item');
			newPregunta.innerHTML = `<ion-item><p class="ion-text-start"><strong>¿Cuándo tuvo su último contacto?</strong></p></ion-item>`;
			chatList.appendChild(newPregunta);
			const newRespuesta = document.createElement('ion-item');
			newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">${this.contactoFecha.substr(5,5)}</p></ion-item>`;
			chatList.appendChild(newRespuesta);
			this.contador = 'fiebre ayer';
		}
		if (this.contador == 'fiebre ayer') {
	  		if (this.fiebreAyer == undefined) {
		  		return;
		  	}
			console.log(this.fiebreAyer);
			dataConsulta['fiebre_ayer'] = this.fiebreAyer;

			console.log(dataConsulta);

			if (+this.fiebreAyer == 0) {
				this.contador = 'temperatura';
				const newPregunta = document.createElement('ion-item');
				newPregunta.innerHTML = `<ion-item><p class="ion-text-start"><strong>¿Ha tenido fiebre el día de ayer?</strong></p></ion-item>`;
				chatList.appendChild(newPregunta);
				const newRespuesta = document.createElement('ion-item');
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">Si</p></ion-item>`;
				this.probabilidad += 1;
				chatList.appendChild(newRespuesta);
			} else {
				this.contador = 'fiebre anterior';
			}
				console.log('Factor de Riesgo: ' + this.factorDeRiesgo);
				console.log('Agravantes: ' + this.agravantes);
				console.log('Probabilidad: ' + this.probabilidad);

		}
		if (this.contador == 'fiebre anterior') {
	  		if (this.fiebreAnterior == undefined) {
		  		return;
		  	}
			console.log(this.fiebreAnterior);
			dataConsulta['fiebre_anterior'] = this.fiebreAnterior;

			console.log(dataConsulta);

			if (+this.fiebreAnterior == 0) {
				this.contador = 'temperatura';
				const newPregunta = document.createElement('ion-item');
				newPregunta.innerHTML = `<ion-item><p class="ion-text-start"><strong>¿Ha tenido fiebre en los últimos 4 días?</strong></p></ion-item>`;
				chatList.appendChild(newPregunta);
				const newRespuesta = document.createElement('ion-item');
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">Si</p></ion-item>`;
				this.probabilidad += 1;
				chatList.appendChild(newRespuesta);
			} else {
				this.contador = 'escalosfrios';
				const newPregunta = document.createElement('ion-item');
				newPregunta.innerHTML = `<ion-item><p class="ion-text-start"><strong>¿Ha tenido fiebre?</strong></p></ion-item>`;
				chatList.appendChild(newPregunta);
				const newRespuesta = document.createElement('ion-item');
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">No</p></ion-item>`;
				chatList.appendChild(newRespuesta);
			}
				console.log('Factor de Riesgo: ' + this.factorDeRiesgo);
				console.log('Agravantes: ' + this.agravantes);
				console.log('Probabilidad: ' + this.probabilidad);

		}
		if (this.contador == 'temperatura') {
	  		if (this.temperatura == undefined) {
		  		return;
		  	}
		  	
			console.log(this.temperatura);
			dataConsulta['temperatura'] = this.temperatura;

			console.log(dataConsulta);

			const newPregunta = document.createElement('ion-item');
			newPregunta.innerHTML = `<ion-item><p class="ion-text-start"><strong>¿Cuál ha sido la temperatura más alta?</strong></p></ion-item>`;
			chatList.appendChild(newPregunta);
			const newRespuesta = document.createElement('ion-item');
			if (+this.temperatura == 0) {
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">Menos de 38 &deg; C</p></ion-item>`;
			} else if (+this.temperatura == 1) {
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">38 &deg; C</p></ion-item>`;
			} else if (+this.temperatura == 2) {
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">39 &deg; C</p></ion-item>`;
				this.factorDeRiesgo += 1;
			} else if (+this.temperatura == 3) {
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">40 &deg; C</p></ion-item>`;
				this.factorDeRiesgo += 2;
			} else if (+this.temperatura == 4) {
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">41 &deg; C</p></ion-item>`;
				this.factorDeRiesgo += 2;
			} else if (+this.temperatura == 5) {
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">42 &deg; C</p></ion-item>`;
				this.factorDeRiesgo += 2;
			} else if (+this.temperatura == 6) {
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">Más de 42 &deg; C</p></ion-item>`;
				this.factorDeRiesgo += 2;
			} else {
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">No lo sé</p></ion-item>`;
				this.factorDeRiesgo += 1;
			}	
			chatList.appendChild(newRespuesta);
				console.log('Factor de Riesgo: ' + this.factorDeRiesgo);
				console.log('Agravantes: ' + this.agravantes);
				console.log('Probabilidad: ' + this.probabilidad);
			this.contador = 'escalosfrios';
		}
		if (this.contador == 'escalosfrios') {
	  		if (this.escalosfrios == undefined) {
		  		return;
		  	}
			console.log(this.escalosfrios);
			dataConsulta['escalosfrios'] = this.escalosfrios;

			console.log(dataConsulta);

			const newPregunta = document.createElement('ion-item');
			newPregunta.innerHTML = `<ion-item><p class="ion-text-start"><strong>Síntomas</strong></p></ion-item>`;
			chatList.appendChild(newPregunta);
			if (+this.escalosfrios == 0) {
				const newRespuesta = document.createElement('ion-item');
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">Escalosfrios</p></ion-item>`;
				this.factorDeRiesgo += 1;
				chatList.appendChild(newRespuesta);
			}
				console.log('Factor de Riesgo: ' + this.factorDeRiesgo);
				console.log('Agravantes: ' + this.agravantes);
				console.log('Probabilidad: ' + this.probabilidad);

			this.contador = 'cansado';
		}
		if (this.contador == 'cansado') {
	  		if (this.cansado == undefined) {
		  		return;
		  	}
			console.log(this.cansado);
			dataConsulta['cansado'] = this.cansado;

			console.log(dataConsulta);

			if (+this.cansado == 0) {
				const newRespuesta = document.createElement('ion-item');
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">Cansancio</p></ion-item>`;
				this.factorDeRiesgo += 2;
				chatList.appendChild(newRespuesta);
			}
				console.log('Factor de Riesgo: ' + this.factorDeRiesgo);
				console.log('Agravantes: ' + this.agravantes);
				console.log('Probabilidad: ' + this.probabilidad);

			this.contador = 'dolor';
		}
		if (this.contador == 'dolor') {
	  		if (this.dolor == undefined) {
		  		return;
		  	}
			console.log(this.dolor);
			dataConsulta['dolor'] = this.dolor;

			console.log(dataConsulta);

			if (+this.dolor == 0) {
				const newRespuesta = document.createElement('ion-item');
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">Dolor en las extremidades</p></ion-item>`;
				this.factorDeRiesgo += 2;
				chatList.appendChild(newRespuesta);
			}
				console.log('Factor de Riesgo: ' + this.factorDeRiesgo);
				console.log('Agravantes: ' + this.agravantes);
				console.log('Probabilidad: ' + this.probabilidad);

			this.contador = 'tos';
		}
		if (this.contador == 'tos') {
	  		if (this.tos == undefined) {
		  		return;
		  	}
			console.log(this.tos);
			dataConsulta['tos'] = this.tos;

			console.log(dataConsulta);

			if (+this.tos == 0) {
				const newRespuesta = document.createElement('ion-item');
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">Tos persistente</p></ion-item>`;
				this.factorDeRiesgo += 3;
				chatList.appendChild(newRespuesta);
			}
				console.log('Factor de Riesgo: ' + this.factorDeRiesgo);
				console.log('Agravantes: ' + this.agravantes);
				console.log('Probabilidad: ' + this.probabilidad);

			this.contador = 'moqueo';
		}
		if (this.contador == 'moqueo') {
	  		if (this.moqueo == undefined) {
		  		return;
		  	}
			console.log(this.moqueo);
			dataConsulta['moqueo'] = this.moqueo;

			console.log(dataConsulta);

			if (+this.moqueo == 0) {
				const newRespuesta = document.createElement('ion-item');
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">Moqueo</p></ion-item>`;
				this.factorDeRiesgo += 1;
				chatList.appendChild(newRespuesta);
			}
				console.log('Factor de Riesgo: ' + this.factorDeRiesgo);
				console.log('Agravantes: ' + this.agravantes);
				console.log('Probabilidad: ' + this.probabilidad);

			this.contador = 'diarrea';
		}
		if (this.contador == 'diarrea') {
	  		if (this.diarrea == undefined) {
		  		return;
		  	}
			console.log(this.diarrea);
			dataConsulta['diarrea'] = this.diarrea;

			console.log(dataConsulta);

			if (+this.diarrea == 0) {
				const newRespuesta = document.createElement('ion-item');
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">Diarrea</p></ion-item>`;
				this.factorDeRiesgo += 1;
				chatList.appendChild(newRespuesta);
			}
				console.log('Factor de Riesgo: ' + this.factorDeRiesgo);
				console.log('Agravantes: ' + this.agravantes);
				console.log('Probabilidad: ' + this.probabilidad);

			this.contador = 'garganta';
		}
		if (this.contador == 'garganta') {
	  		if (this.garganta == undefined) {
		  		return;
		  	}
			console.log(this.garganta);
			dataConsulta['garganta'] = this.garganta;

			console.log(dataConsulta);

			if (+this.garganta == 0) {
				const newRespuesta = document.createElement('ion-item');
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">Dolor de Garganta</p></ion-item>`;
				this.factorDeRiesgo += 2;
				chatList.appendChild(newRespuesta);
			}
				console.log('Factor de Riesgo: ' + this.factorDeRiesgo);
				console.log('Agravantes: ' + this.agravantes);
				console.log('Probabilidad: ' + this.probabilidad);

			this.contador = 'cabeza';
		}
		if (this.contador == 'cabeza') {
	  		if (this.cabeza == undefined) {
		  		return;
		  	}
			console.log(this.cabeza);
			dataConsulta['cabeza'] = this.cabeza;

			console.log(dataConsulta);

			if (+this.cabeza == 0) {
				const newRespuesta = document.createElement('ion-item');
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">Dolor de Cabeza</p></ion-item>`;
				this.factorDeRiesgo += 2;
				chatList.appendChild(newRespuesta);
			}
				console.log('Factor de Riesgo: ' + this.factorDeRiesgo);
				console.log('Agravantes: ' + this.agravantes);
				console.log('Probabilidad: ' + this.probabilidad);

			this.contador = 'aliento';
		}
		if (this.contador == 'aliento') {
	  		if (this.aliento == undefined) {
		  		return;
		  	}
			console.log(this.aliento);
			dataConsulta['aliento'] = this.aliento;

			console.log(dataConsulta);

			if (+this.aliento == 0) {
				const newRespuesta = document.createElement('ion-item');
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">Pérdida del aliento</p></ion-item>`;
				this.factorDeRiesgo += 2;
				chatList.appendChild(newRespuesta);
			}
				console.log('Factor de Riesgo: ' + this.factorDeRiesgo);
				console.log('Agravantes: ' + this.agravantes);
				console.log('Probabilidad: ' + this.probabilidad);

			this.contador = 'olfato';
		}
		if (this.contador == 'olfato') {
	  		if (this.olfato == undefined) {
		  		return;
		  	}
			console.log(this.olfato);
			dataConsulta['olfato'] = this.olfato;

			console.log(dataConsulta);

			if (+this.olfato == 0) {
				const newRespuesta = document.createElement('ion-item');
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">Pérdida del olfato o del gusto</p></ion-item>`;
				this.factorDeRiesgo += 3;
				chatList.appendChild(newRespuesta);
			} else if (
				this.escalosfrios == '1' && 
				this.cansado == '1' && 
				this.dolor == '1' && 
				this.tos == '1' && 
				this.moqueo == '1' && 
				this.diarrea == '1' && 
				this.garganta == '1' && 
				this.cabeza == '1' && 
				this.aliento == '1' && 
				this.olfato == '1'
				) {
				const newRespuesta = document.createElement('ion-item');
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">No hay síntomas</p></ion-item>`;
				chatList.appendChild(newRespuesta);
			}
				console.log('Factor de Riesgo: ' + this.factorDeRiesgo);
				console.log('Agravantes: ' + this.agravantes);
				console.log('Probabilidad: ' + this.probabilidad);

			this.contador = 'enfermedad pulmonar';
		}
		if (this.contador == 'enfermedad pulmonar') {
	  		if (this.enfermedadPulmonar == undefined) {
		  		return;
		  	}
			console.log(this.enfermedadPulmonar);
			dataConsulta['enfermedad_pulmonar'] = this.enfermedadPulmonar;

			console.log(dataConsulta);

			const newPregunta = document.createElement('ion-item');
			newPregunta.innerHTML = `<ion-item><p class="ion-text-start"><strong>Otras enfermedades o agravantes</strong></p></ion-item>`;
			chatList.appendChild(newPregunta);
			if (+this.enfermedadPulmonar == 0) {
				const newRespuesta = document.createElement('ion-item');
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">Enfermedad pulmonar</p></ion-item>`;
				this.agravantes += 2;
				chatList.appendChild(newRespuesta);
			}
			if (+this.enfermedadPulmonar == 2) {
				this.agravantes += 1;
			}
				console.log('Factor de Riesgo: ' + this.factorDeRiesgo);
				console.log('Agravantes: ' + this.agravantes);
				console.log('Probabilidad: ' + this.probabilidad);

			this.contador = 'diabetes';
		}
		if (this.contador == 'diabetes') {
	  		if (this.diabetes == undefined) {
		  		return;
		  	}
			console.log(this.diabetes);
			dataConsulta['diabetes'] = this.diabetes;

			console.log(dataConsulta);

			if (+this.diabetes == 0) {
				const newRespuesta = document.createElement('ion-item');
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">Diabetes</p></ion-item>`;
				this.agravantes += 2;
				chatList.appendChild(newRespuesta);
			}
			if (+this.diabetes == 2) {
				this.agravantes += 1;
			}
				console.log('Factor de Riesgo: ' + this.factorDeRiesgo);
				console.log('Agravantes: ' + this.agravantes);
				console.log('Probabilidad: ' + this.probabilidad);

			this.contador = 'cardiaca';
		}
		if (this.contador == 'cardiaca') {
	  		if (this.cardiaca == undefined) {
		  		return;
		  	}
			console.log(this.cardiaca);
			dataConsulta['cardiaca'] = this.cardiaca;

			console.log(dataConsulta);

			if (+this.cardiaca == 0) {
				const newRespuesta = document.createElement('ion-item');
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">Enfermedades cardiacas</p></ion-item>`;
				this.agravantes += 2;
				chatList.appendChild(newRespuesta);
			}
			if (+this.cardiaca == 2) {
				this.agravantes += 1;
			}
				console.log('Factor de Riesgo: ' + this.factorDeRiesgo);
				console.log('Agravantes: ' + this.agravantes);
				console.log('Probabilidad: ' + this.probabilidad);

			this.contador = 'obesidad';
		}
		if (this.contador == 'obesidad') {
	  		if (this.obesidad == undefined) {
		  		return;
		  	}
			console.log(this.obesidad);
			dataConsulta['obesidad'] = this.obesidad;

			console.log(dataConsulta);

			if (+this.obesidad == 0) {
				const newRespuesta = document.createElement('ion-item');
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">Obesidad</p></ion-item>`;
				this.agravantes += 2;
				chatList.appendChild(newRespuesta);
			}
			if (+this.obesidad == 2) {
				this.agravantes += 1;
			}
				console.log('Factor de Riesgo: ' + this.factorDeRiesgo);
				console.log('Agravantes: ' + this.agravantes);
				console.log('Probabilidad: ' + this.probabilidad);

			this.contador = 'embarazada';
		}
		if (this.contador == 'embarazada') {
	  		if (this.embarazada == undefined) {
		  		return;
		  	}
			console.log(this.embarazada);
			dataConsulta['embarazada'] = this.embarazada;

			console.log(dataConsulta);

			if (+this.embarazada == 0) {
				const newRespuesta = document.createElement('ion-item');
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">Embarazo</p></ion-item>`;
				this.agravantes += 2;
				chatList.appendChild(newRespuesta);
			}
			if (+this.embarazada == 2) {
				this.agravantes += 1;
			}
				console.log('Factor de Riesgo: ' + this.factorDeRiesgo);
				console.log('Agravantes: ' + this.agravantes);
				console.log('Probabilidad: ' + this.probabilidad);

			this.contador = 'esteroides';
		}
		if (this.contador == 'esteroides') {
	  		if (this.esteroides == undefined) {
		  		return;
		  	}
			console.log(this.esteroides);
			dataConsulta['esteroides'] = this.esteroides;

			console.log(dataConsulta);

			if (+this.esteroides == 0) {
				const newRespuesta = document.createElement('ion-item');
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">Consume esteroides</p></ion-item>`;
				this.agravantes += 2;
				chatList.appendChild(newRespuesta);
			}
			if (+this.esteroides == 2) {
				this.agravantes += 1;
			}
				console.log('Factor de Riesgo: ' + this.factorDeRiesgo);
				console.log('Agravantes: ' + this.agravantes);
				console.log('Probabilidad: ' + this.probabilidad);

			this.contador = 'inmunosupresores';
		}
		if (this.contador == 'inmunosupresores') {
	  		if (this.inmunosupresores == undefined) {
		  		return;
		  	}
			console.log(this.inmunosupresores);
			dataConsulta['inmunosupresores'] = this.inmunosupresores;

			console.log(dataConsulta);

			if (+this.inmunosupresores == 0) {
				const newRespuesta = document.createElement('ion-item');
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">Consume inmunosupresores</p></ion-item>`;
				this.agravantes += 2;
				chatList.appendChild(newRespuesta);
			} else if (
				+this.enfermedadPulmonar > 0 && 
				+this.diabetes > 0 && 
				+this.cardiaca > 0 && 
				+this.obesidad > 0 && 
				+this.embarazada > 0 && 
				+this.esteroides > 0 && 
				+this.inmunosupresores > 0
				) {
				const newRespuesta = document.createElement('ion-item');
				newRespuesta.innerHTML = `<ion-item><p class="ion-text-right">No existen.</p></ion-item>`;
				chatList.appendChild(newRespuesta);
			}
			if (+this.inmunosupresores == 2) {
				this.agravantes += 1;
			}
				console.log('Factor de Riesgo: ' + this.factorDeRiesgo);
				console.log('Agravantes: ' + this.agravantes);
				console.log('Probabilidad: ' + this.probabilidad);


			this.contador = 'resultados';
		}
		if (this.contador == 'resultados') {
			const colResultados = document.querySelector('#col-resultados');

		if (this.probabilidad > 1) {
			this.clase = 'danger';
		} else if (this.probabilidad >0) {
			this.clase = 'warning';
		} else {
			this.clase = 'primary';
		}

			colResultados.innerHTML = `
				<ion-card>
					<ion-card-header>
						<ion-title color="${this.clase}">
							Resultados
						</ion-title>
					</ion-card-header>
					<ion-card-content>
						<ion-item>
							<p class"ion-text-start">Factor de risgo: ${this.factorDeRiesgo}</p>
						</ion-item>
						<ion-item>
							<p class"ion-text-start">Agravantes: ${this.agravantes}</p>
						</ion-item>
						<ion-item>
							<p class"ion-text-start">Probabilidad: ${this.probabilidad}</p>
						</ion-item>
					</ion-card-content>
				</ion-card>`;
		}
  	});
  }

}

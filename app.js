var num1 = 0;
var num2 = 0;
var boton_1 = 0;
var boton_2 = 0;
var boton_3 = 0;
var boton_4 = 0;
var boton_5 = 0;
var boton_6 = 0;
var boton_7 = 0;
var boton_8 = 0;
var boton_9 = 0;
var boton_0 = 0;
var suma = false;



const contenedor = document.getElementById("contenedor");
const calculo = document.getElementById("calculo");
const respuesta = document.getElementById("respuesta");
const boton1 = document.getElementById("1");
const boton2 = document.getElementById("2");
const boton3 = document.getElementById("3");
const boton4 = document.getElementById("4");
const boton5 = document.getElementById("5");
const boton6 = document.getElementById("6");
const boton7 = document.getElementById("7");
const boton8 = document.getElementById("8");
const boton9 = document.getElementById("9");
const boton0 = document.getElementById("0");
const botSuma = document.getElementById("suma");
const botIgual = document.getElementById("igual");



boton1.addEventListener("click",function(){

	boton_1 += 1;

	if (suma == true) {
		num2 += 1;
	}else{
		num1 += 1;
	}

	if (boton_1 == 2 && suma==false) {
		num1 = 11;
	}else if (boton_1 == 3 && suma==false){
		num1 = 111;
	}else if (boton_1 == 4 && suma==false){
		num1 = 1111;
	}


	if (boton_1 == 2 && suma==true) {
		num2 = 11;
	}else if (boton_1 == 3 && suma==true){
		num2 = 111;
	}else if (boton_1 == 4 && suma==true){
		num2 = 1111;
	}

	if (boton_2 == 1 && boton_1 == 1  && suma==false) {
		num1 = 21;
	}


	const item1 = document.createElement("span");
	const textoItem1 = document.createTextNode("1");
	item1.appendChild(textoItem1);
	calculo.appendChild(item1);
	
})
boton2.addEventListener("click",function(){
	
	boton_2 += 1;

	if (suma == true) {
		num2 += 2;
	}else{
		num1 += 2;
	}

	if (boton_2 == 2 && suma==false) {
		num1 = 22;
	}else if (boton_2 == 3 && suma==false){
		num1 = 222;
	}else if (boton_2 == 4 && suma==false){
		num1 = 2222;
	}


	if (boton_2 == 2 && suma==true) {
		num2 = 22;
	}else if (boton_2 == 3 && suma==true){
		num2 = 222;
	}else if (boton_2 == 4 && suma==true){
		num2 = 2222;
	}

	const item2 = document.createElement("span");
	const textoItem2 = document.createTextNode("2");
	item2.appendChild(textoItem2);
	calculo.appendChild(item2);
})
boton3.addEventListener("click",function(){
	boton_3 += 1;

	if (suma == true) {
		num2 += 3;
	}else{
		num1 += 3;
	}

	if (boton_3 == 2 && suma==false) {
		num1 = 33;
	}else if (boton_3 == 3 && suma==false){
		num1 = 333;
	}else if (boton_3 == 4 && suma==false){
		num1 = 3333;
	}


	if (boton_3 == 2 && suma==true) {
		num2 = 33;
	}else if (boton_3 == 3 && suma==true){
		num2 = 333;
	}else if (boton_3 == 4 && suma==true){
		num2 = 3333;
	}


	const item3 = document.createElement("span");
	const textoItem3 = document.createTextNode("3");
	item3.appendChild(textoItem3);
	calculo.appendChild(item3);
})
boton4.addEventListener("click",function(){
	boton_4 += 1;

	if (suma == true) {
		num2 += 4;
	}else{
		num1 += 4;
	}

	if (boton_4 == 2 && suma==false) {
		num1 = 44;
	}else if (boton_4== 3 && suma==false){
		num1 = 444;
	}else if (boton_4 == 4 && suma==false){
		num1 = 4444;
	}


	if (boton_4 == 2 && suma==true) {
		num2 = 44;
	}else if (boton_4 == 3 && suma==true){
		num2 = 444;
	}else if (boton_4 == 4 && suma==true){
		num2 = 4444;
	}



	const item4 = document.createElement("span");
	const textoItem4 = document.createTextNode("4");
	item4.appendChild(textoItem4);
	calculo.appendChild(item4);

})
boton5.addEventListener("click",function(){
	boton_5 += 1;

	if (suma == true) {
		num2 += 5;
	}else{
		num1 += 5;
	}

	if (boton_5 == 2 && suma==false) {
		num1 = 55;
	}else if (boton_5 == 3 && suma==false){
		num1 = 555;
	}else if (boton_5 == 4 && suma==false){
		num1 = 5555;
	}


	if (boton_5 == 2 && suma==true) {
		num2 = 55;
	}else if (boton_5 == 3 && suma==true){
		num2 = 555;
	}else if (boton_5 == 4 && suma==true){
		num2 = 5555;
	}


	const item5 = document.createElement("span");
	const textoItem5 = document.createTextNode("5");
	item5.appendChild(textoItem5);
	calculo.appendChild(item5);

})
boton6.addEventListener("click",function(){
	boton_6 += 1;

	if (suma == true) {
		num2 += 6;
	}else{
		num1 += 6;
	}

	if (boton_6 == 2 && suma==false) {
		num1 = 66;
	}else if (boton_6 == 3 && suma==false){
		num1 = 666;
	}else if (boton_6 == 4 && suma==false){
		num1 = 6666;
	}


	if (boton_6 == 2 && suma==true) {
		num2 = 66;
	}else if (boton_6 == 3 && suma==true){
		num2 = 666;
	}else if (boton_6 == 4 && suma==true){
		num2 = 6666;
	}


	const item6 = document.createElement("span");
	const textoItem6 = document.createTextNode("6");
	item6.appendChild(textoItem6);
	calculo.appendChild(item6);
})
boton7.addEventListener("click",function(){
	boton_7 += 1;

	if (suma == true) {
		num2 += 7;
	}else{
		num1 += 7;
	}

	if (boton_7 == 2 && suma==false) {
		num1 = 77;
	}else if (boton_7 == 3 && suma==false){
		num1 = 777;
	}else if (boton_7 == 4 && suma==false){
		num1 = 7777;
	}


	if (boton_7 == 2 && suma==true) {
		num2 = 77;
	}else if (boton_7 == 3 && suma==true){
		num2 = 777;
	}else if (boton_7 == 4 && suma==true){
		num2 = 7777;
	}


	const item7 = document.createElement("span");
	const textoItem7 = document.createTextNode("7");
	item7.appendChild(textoItem7);
	calculo.appendChild(item7);
})
boton8.addEventListener("click",function(){
	boton_8 += 1;

	if (suma == true) {
		num2 += 8;
	}else{
		num1 += 8;
	}

	if (boton_8 == 2 && suma==false) {
		num1 = 88;
	}else if (boton_8 == 3 && suma==false){
		num1 = 888;
	}else if (boton_8 == 4 && suma==false){
		num1 = 8888;
	}


	if (boton_8 == 2 && suma==true) {
		num2 = 88;
	}else if (boton_8 == 3 && suma==true){
		num2 = 888;
	}else if (boton_8 == 4 && suma==true){
		num2 = 8888;
	}


	const item8 = document.createElement("span");
	const textoItem8 = document.createTextNode("8");
	item8.appendChild(textoItem8);
	calculo.appendChild(item8);
})
boton9.addEventListener("click",function(){
	boton_9 += 1;

	if (suma == true) {
		num2 += 9;
	}else{
		num1 += 9;
	}

	if (boton_9 == 2 && suma==false) {
		num1 = 99;
	}else if (boton_9 == 3 && suma==false){
		num1 = 999;
	}else if (boton_9 == 4 && suma==false){
		num1 = 9999;
	}


	if (boton_9 == 2 && suma==true) {
		num2 = 99;
	}else if (boton_9 == 3 && suma==true){
		num2 = 999;
	}else if (boton_9 == 4 && suma==true){
		num2 = 9999;
	}


	const item9 = document.createElement("span");
	const textoItem9 = document.createTextNode("9");
	item9.appendChild(textoItem9);
	calculo.appendChild(item9);
})
boton0.addEventListener("click",function(){
	boton_0 += 1;

	if (suma == true) {
		num2 += 0;
	}else{
		num1 += 0;
	}

	if (boton_0 == 2 && suma==false) {
		num1 = 0;
	}else if (boton_0 == 3 && suma==false){
		num1 = 0;
	}else if (boton_0 == 4 && suma==false){
		num1 = 0;
	}


	if (boton_0 == 2 && suma==true) {
		num2 = 0;
	}else if (boton_0 == 3 && suma==true){
		num2 = 0;
	}else if (boton_0 == 4 && suma==true){
		num2 = 0;
	}


	const item0 = document.createElement("span");
	const textoItem0 = document.createTextNode("0");
	item0.appendChild(textoItem0);
	calculo.appendChild(item0);
})
botSuma.addEventListener("click",function(){
	const itemSuma = document.createElement("span");
	const textoItemSuma = document.createTextNode("+");
	itemSuma.appendChild(textoItemSuma);
	calculo.appendChild(itemSuma);

	suma = true;
	boton_1 = 0;
	boton_2 = 0;
	boton_3 = 0;
	boton_4 = 0;
	boton_5 = 0;
	boton_6 = 0;
	boton_7 = 0;
	boton_8 = 0;
	boton_9 = 0;
	boton_0 = 0;
	
})
botIgual.addEventListener("click",function(){
	

	let res = num1+num2;
	const itemRes = document.createElement("h1");
	const textoItemRes = document.createTextNode(res);
	itemRes.appendChild(textoItemRes);
	respuesta.appendChild(itemRes);
})



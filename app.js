const one = document.querySelector(".btn_n1");
const two = document.querySelector(".btn_n2");
const three = document.querySelector(".btn_n3");
const four = document.querySelector(".btn_n4");
const five = document.querySelector(".btn_n5");
const six = document.querySelector(".btn_n6");
const seven = document.querySelector(".btn_n7");
const eigth = document.querySelector(".btn_n8");
const nine = document.querySelector(".btn_n9");
const zero = document.querySelector(".btn_n0");
const comma = document.querySelector(".btn_comma");
const suma = document.querySelector(".btn_suma");
const resta = document.querySelector(".btn_resta");
const multi = document.querySelector(".btn_multi");
const divi = document.querySelector(".btn_div");
const btnResult = document.querySelector(".btn_result");
const prompt = document.querySelector(".prompt");
const result = document.querySelector(".result");
const clear = document.querySelector(".btn_clear");

let first = [];
let second = [];
let add = false;
let substract = false;
let multiply = false;
let divide = false;
let float = [];

clear.addEventListener("click",()=>{
	prompt.innerHTML = "";
	result.innerHTML = "=0";
	first = [];
	second = [];
	add = false;
	substract = false;
	multiply = false;
	divide = false;
	float = [];
})

const calculo = (num)=>{
	if (add||substract||multiply||divide){
		second.push(num);
	}else{
		first.push(num);
	}
}

const show = (symbol)=>{
	
	let item = document.createElement("span");
	let textItem = document.createTextNode(symbol);
	item.appendChild(textItem);
	prompt.appendChild(item);
}

suma.addEventListener("click",()=>{
	add =!add;

	show("+");
	
});

resta.addEventListener("click",()=>{
	substract =!substract;

	show("-");
});

multi.addEventListener("click",()=>{
	multiply =!multiply;

	show("*");
});

divi.addEventListener("click",()=>{
	divide =!divide;

	show("/");
});

comma.addEventListener("click",()=>{
	float.push(1);
});

const buttons = (variable,number)=>{
	prompt.innerHTML = "";

	
	variable.addEventListener("click",()=>{
		
		calculo(number);

		show(number);
	})
}


buttons(one,1);
buttons(two,2);
buttons(three,3);
buttons(four,4);
buttons(five,5);
buttons(six,6);
buttons(seven,7);
buttons(eigth,8);
buttons(nine,9);
buttons(zero,0);
buttons(comma,".");

const realTime = ()=>{
	console.log(first);
	console.log(second);
	console.log(first.join(""));
	console.log(second.join(""));
	let number1 = first.join("");
	let number2 = second.join("");

	number1 = parseFloat(number1);
	number2 = parseFloat(number2);

	console.log(number1);
	console.log(number2);
	console.log(number1+number2);
}

const showResult = (res)=>{
	let item = document.createElement("span");
	let textItem = document.createTextNode("="+res);
	item.appendChild(textItem);
	result.innerHTML = "";
	result.appendChild(item);

	realTime();
}

btnResult.addEventListener("click",()=>{
	let num1 = first.join("")
	let num2 = second.join("")

	if (float.length){
		num1 = parseFloat(num1);
		num2 = parseFloat(num2);
	}else{
		num1 = parseInt(num1);
		num2 = parseInt(num2);
	}


	if (add){
		let res = num1+num2;
		showResult(res);
	} else if (substract){
		let res = num1-num2;
		showResult(res);
	}else if (multiply){
		let res = num1*num2;
		showResult(res);
	}else if (divide){
		let res = num1/num2;
		showResult(res);
	}else{
		let res = num1;
		if(res){
			showResult(res);
		}else{
			res = 0;
			showResult(res);
		}
	}

	
})
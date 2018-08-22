			/*Denne function finder nummeret*/
			function insert(num){
				var exp = document.form.textview.value;
				if(exp === "0"){
					document.form.textview.value = "";
				}
				document.form.textview.value = document.form.textview.value+num;
			}

			function insert2(num){
				document.form.textview.value = document.form.textview.value+num;
			}
			/*Denne function sætte nummerne sammen*/
			function equal(){
				var exp = document.form.textview.value;
				if(exp){
					document.form.viewtext.value = eval(exp);
					/*Hvis det bliver Infinity så vil den udskrive Fejl! istedet for*/
					if(eval(exp) === Infinity){
					document.form.viewtext.value="Fejl!";
					}

					if(eval(exp) === NaN){
					document.form.viewtext.value="Fejl!";
					}


					}

			}




			/*Fjerner alt fra Input og sætter 0 på den øverste*/
			function clean(){
				document.form.viewtext.value = "";
				document.form.textview.value = "0";
			}
			/*Back function er til når man trykker på en knap med onclick="back()" så vil den slette et nummer men hvis der et nummer tilbage vil den gøre
			det til nummeret 0*/
			function back(){
				var exp = document.form.textview.value;
				if(exp === "0"){


				}else{
				document.form.textview.value = exp.substring(0,exp.length-1)
				}
				while(true){
					var exp = document.form.textview.value;
					if(exp === ""){
						document.form.textview.value = "0";
					}break;
				}

			}
			/*Disse functioner er til at gøre man ikke kan trykke på plus, minus, divi og gange flere gange end en*/
			function DisableBtn() {
				document.getElementById("Plus").disabled = true;
				document.getElementById("Minus").disabled = true;
				document.getElementById("Divi").disabled = true;
				document.getElementById("Gange").disabled = true;
			}

			function EnableBtn() {
				document.getElementById("Plus").disabled = false;
				document.getElementById("Minus").disabled = false;
				document.getElementById("Divi").disabled = false;
				document.getElementById("Gange").disabled = false;
			}

			
			

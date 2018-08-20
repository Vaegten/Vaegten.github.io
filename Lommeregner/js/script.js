			function insert(num){
				var exp = document.form.textview.value;
				if(exp === "0"){
					document.form.textview.value = "";
				}
				document.form.textview.value = document.form.textview.value+num 
			}

			function insert2(num){
				document.form.textview.value = document.form.textview.value+num 
			}
			
			function equal(){
				var exp = document.form.textview.value;
				if(exp){
					document.form.viewtext.value = eval(exp);
					document.form.textview.value="";
					
					if(eval(exp) === Infinity){
					document.form.viewtext.value="Fejl!";
					}
					
				}
				
			}
	
			function clean(){
				document.form.viewtext.value = "";
				document.form.textview.value = "0";
			}

			function back(){
				var exp = document.form.textview.value;
				if(exp === "0"){
					
				}else{
				document.form.textview.value = exp.substring(0,exp.length-1)
				}
				if(exp === ""){
					document.form.textview.value = "0";
				}
			}
			

			
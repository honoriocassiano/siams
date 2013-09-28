function Aritmetica() {
	
	this.lista = [/*{
		funct: 8,								//jr
		funcao: function(r1, r2, r3) {
			r1.valor = r2.valor + r3.valor;
			return r1;
		}
	},{
		funct: 16,
		funcao: function(r1, r2, r3) {			//mfhi
			r1.valor = r2.valor + r3.valor;
			return r1;
		}
	},{
		funct: 18,								//mflo
		funcao: function(r1, r2, r3) {
			r1.valor = r2.valor + r3.valor;
			return r1;
		}
	},{
		funct: 24,								//mult
		funcao: function(r1, r2, r3) {
			r1.valor = r2.valor + r3.valor;
			return r1;
		}
	},{
		funct: 26,								//div
		funcao: function(r1, r2, r3) {
			r1.valor = r2.valor + r3;
			return r1;
		}
	},*/{
		funct: 32,
		funcao: function(r1, r2, r3) {
			r1.valor = r2.valor + r3.valor;
			return r1;
		}
	},{
		funct: 34,
		funcao: function(r1, r2, r3) {
			r1.valor = r2.valor - r3.valor;
			return r1;
		}
	},{
		funct: 36,
		funcao: function(r1, r2, r3) {
			r1.valor = r2.valor & r3;
			return r1;
		}
	}		,{
		funct: 37,
		funcao: function(r1, r2, r3) {
			r1.valor = r2.valor | r3.valor;
			return r1;
		}
	},{
		funct: 38,
		funcao: function(r1, r2, r3) {
			r1.valor = r2.valor ^ r3.valor;
			return r1;
		}
	},{
		funct: 39,
		funcao: function(r1, r2, r3) {
			r1.valor = r2.valor | r3.valor;
			r1.valor = ~r1.valor;
			return r1;
		}
	},{
		funct: 42,
		funcao: function(r1, r2, r3) {
			r2.valor < r3.valor? r1.valor = 1 : r1.valor = 0;
			return r1;
		}
	}];
}

function NaoAritmetica(){

	this.lista = [{
		
		op: 4
		funcao: function(r1, r2) {	
	    	if(r1.valor == r2.valor){
	        	return true;
			}else{
				return false;
	 	}
       }

     },{

           op: 5,          
           funcao: function(r1,r2){
           if(r1.valor != r2.valor){
	          return true;
		}else{
			return false;
	 	}

      },{
          //blez
           op: 6,          
           funcao: function(r1){
           if(r1.valor <= 0){
	          return true;
		}else{
			return false;
	 	}
       
       },{
           //bgtz
           op: 7,          
           funcao: function(r1){
           if(r1.valor > 0){
	          return true;
		}else{
			return false;
	 	}
            
	},{
           //addi
           op: 8,          
           funcao: function(r1,r2,num){
           r1.valor = r2.valor + num;
           return r1;
           } 

     },{

          //stli
           op: 10,          
           funcao: function(r2,num){
           if(r2.valor < num){
              return true;
           }else{
		   return false;           
           }  
           }

      },{

           //andi
           op: 12,
           funcao: function(r2,num){
           if ((r2.valor == 1) && (num == 1)){
			return true;
           }else{
                return false;
           }
           }


        },{

           //ori
           op: 13,
           funcao: function(r2,num){
           if ((r2.valor == 1) || (num == 1)){
			return true;
           }else{
                return false;
           }
           }

      },{

           //xori
           op: 14,
           funcao: function(r2,num){
           if ((r2.valor && !num) || (num && !r2.valor)){
			return true;
           }else{
                return false;
           }
           }

      },{

           //lui
           op: 15,
           funcao: function(r1,num){
           if ((r2.valor == 1) && (num == 1)){
			return true;
           }else{
                return false;
           }
           }

     },{

           //lb
           op: 32,
           funcao: function(r1,mem,off){
           
           }

];


	
	this.executar = function(funct, reg1, reg2, reg3) {
		for (var i = 0; i < this.lista.length; i++) {
			if (this.lista[i].funct == funct) {
				return this.lista[i].funcao(reg1,reg2,reg3);
			}
		}
	}	
}


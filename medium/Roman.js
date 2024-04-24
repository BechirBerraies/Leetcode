









var intToRoman = function(num) {

    let arrnum = String(num).split("").map((num)=> {
        return Number(num)
    })
    letter = ""; 
    console.log(arrnum);

            for(let i = arrnum.length  ; i > 0 ; i--  ){
                if(i == 4){
                    for(let j = 0 ; j < arrnum[0]; j++){
                        letter += "M" 
                    }
                }
                if(i == 3){
                    
                    if( 4 < arrnum[1] < 9){

                    }
                    if(arrnum[1] == 4){
                        letter += "CD"
                    }
                    if(arrnum[1] == 9){
                        letter += "CM"
                    }
                    
                }
                if(i == 2 ){
                    if(  0 < arrnum[2]  <4 || 4 < arrnum[1] < 9  ){

                    }
                    if(arrnum[2] == 4){
                        letter += "XL"
                    }
                    if(arrnum[2] == 9){
                        letter += "XC"
                    }
                }
                if(i == 1 ){
                    if(  0 < arrnum[3]  <4 || 4 < arrnum[3] < 9  ){

                    }
                    if(arrnum[3] == 4){
                        letter += "IV"
                    }
                    if(arrnum[3] == 9){
                        letter += "IX"
                    }
                }
        }

            console.log(letter);
            return
};

num = 194
console.log(intToRoman(num));

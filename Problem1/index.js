//Q - 

function char(str){
    
    let newStr = str.replace(" ","")
 
    let count = {}

    for(let i = 0 ; i<newStr.length;i++){
        let char = newStr[i] 
        if(!count[char] && newStr[i]){
            count[char] = 1
           
        }else{
            count[char]++
        }

    }

    return count

}

console.log(char("shubham sagar"))
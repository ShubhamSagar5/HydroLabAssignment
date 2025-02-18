//Q - 

function char(str){
    
    let ans = [] 
    let count = 1

    for(let i = 0 ; i< str.length;i++){
        if(str[i] === str[i-1] && str[i] !== " "){
            count = count + 1
        }else if (str[i-1] !==" "){
            ans.push([str[i-1],count])
            count = 1
        }

    }

    return ans

}

console.log(char("shubham sagar"))
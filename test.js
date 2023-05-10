let res='';
const len = 9;

for(let i = 1; i < len; i++){
    for(let j = 0; j < i; j++){
        res += '*'
    }

    res += '\n';
        
}

console.log(res);
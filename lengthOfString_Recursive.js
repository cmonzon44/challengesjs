
//Recursive
//function which returns the length of string
//count char by char

function contar(txt , cnt){
    cnt = cnt ? cnt : 0;
    if(txt.substring(0)){
        return contar(txt.substring(1),cnt+1);
    }
    return cnt;
}


contar('apple')






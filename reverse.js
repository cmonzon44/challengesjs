

//reverse string char by char

function reverse(el){
    
    let o = el.length;
    for(let i=0; i<o/2 ; i++){
        let aux = el[i];
        el[i] = el[ o -(i+1) ]
        el[ o -(i+1) ] = aux;
    }
    return el;
}

reverse([1,3,5,9]);

//push elems in ar2 to ar2 elem by elem

function concatenar(ar1, ar2){

    ar2.forEach(e => {
        ar1.push(e);
    });
    return ar1;
}

concatenar([1,3,5,9],[4,7,10])


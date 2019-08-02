
//instagram carl.monz
//Javascript Challenge #24
function repli(txt, ind,  s1 , s2){
    txt=Array.from(txt);
    let o=1;
    txt.map((e,i)=>{
        if(e==s1){
            if(o==ind) txt[i]=s2;
            o++;    
        }         
    })
    txt=txt.join('');
    return txt;
}

repli('Hello World',2,'o','i'); // "Hello Wirld"
repli('Hello World',1,'o','i'); // "Helli World"
repli('Hello World',2,'i','o'); // "Hello World"
repli('Hello World',2,'l','X'); // "HelXo World"

repli('Next Gen Coder',2,'e','i'); // "Next Gin Coder"
repli('Next Gen Coder',2,'d','i'); // "Next Gen Coder"
repli('Next Gen Coder',1,'d','O'); // "Next Gen CoOer"
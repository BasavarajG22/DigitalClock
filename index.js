function digit(i){
    if(i<10){
        return "0"+i;
    }
    else{
        return i;
    }
}

setInterval(()=>{
    let t=new Date();
    let h=t.getHours();
    let m=t.getMinutes();
    let s=t.getSeconds();


    if(h<12){
        document.getElementById("p").innerHTML="AM";
    }
    else{
        document.getElementById("p").innerHTML="PM";
    }

    if(h==0){
        h=12;
    }
    else if(h>12){
        h=h-12;
    }

    document.getElementById("hrs").innerHTML=digit(h);
    document.getElementById("min").innerHTML=digit(m);
    document.getElementById("sec").innerHTML=digit(s);
},1000)

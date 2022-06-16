const Scelta= document.getElementById("scelta");
const Sasso= document.getElementById("img3");
const ContenitoreSupremo=document.getElementById("contenitore-simboli");
const SectionChoise=document.getElementById("section");
const Cpu=document.getElementById("vuoto");
const PlayAgain=document.getElementById("rigioca");
const Regole=document.getElementById("regole");
const CloseRegole=document.getElementById("close-rules");
const PaginaRegole=document.getElementById("impos");
const Sfondo=document.getElementById("container");
const Esito=document.getElementById("esito");

let Punti=0;


Regole.addEventListener("click",()=>{
    PaginaRegole.style.display="flex";
    Sfondo.classList.add("sfondo");
    SectionChoise.classList.add("sfondo-scelta");
})

CloseRegole.addEventListener("click",()=>{
    PaginaRegole.style.display="none";
    Sfondo.classList.remove("sfondo");
    SectionChoise.classList.remove("sfondo-scelta");
})

const ComputerChoise= ()=>{
    const arr= ["sasso" ,"carta" ,"forbici"];
    const CpuChoise=arr[Math.floor(Math.random()*3)];
console.log(CpuChoise);

if(CpuChoise==="sasso"){
    Cpu.classList.add("NewSasso");
    Cpu.classList.remove("vuoto");
}else if(CpuChoise==="forbici"){
    Cpu.classList.add("NewForbici");
    Cpu.classList.remove("vuoto");
}else if(CpuChoise==="carta"){
    Cpu.classList.add("NewCarta");
    Cpu.classList.remove("vuoto");
}
return CpuChoise;
} 


const UserChoise = (hand)=> {
    if(hand ==="sasso")
    {
        Scelta.classList.remove("scelta");
        Scelta.classList.add("NewSasso");
        ContenitoreSupremo.classList.add("close");
        SectionChoise.style.display="flex";

    }else if(hand ==="carta"){
        Scelta.classList.remove("scelta");
        Scelta.classList.add("NewCarta");
        ContenitoreSupremo.classList.add("close");
        SectionChoise.style.display="flex";
        

    }else if(hand==="forbici"){
        Scelta.classList.remove("scelta");
        Scelta.classList.add("NewForbici");
        ContenitoreSupremo.classList.add("close");
        SectionChoise.style.display="flex";  
       
        
    }

    console.log(hand);
   let CpuChoise= ComputerChoise();
    RisultatoFinale(hand, CpuChoise);
  


}






PlayAgain.addEventListener("click",()=>{
    SectionChoise.style.display="none";
    ContenitoreSupremo.classList.remove("close");
    Cpu.classList.remove("NewSasso");
    Cpu.classList.remove("NewCarta");
    Cpu.classList.remove("NewForbici");
    Cpu.classList.add("vuoto");
  

    Scelta.classList.remove("NewSasso");
    Scelta.classList.remove("NewCarta");
    Scelta.classList.remove("NewForbici");
    Scelta.classList.add("scelta");
});



const RisultatoFinale = (manoUtente, ManoCpu)=>
{
    if(manoUtente === ManoCpu){
        Esito.innerHTML="PAREGGIO";
        Scelta.style.transform= "none";
        Cpu.style.transform= "none";
        PlayAgain.style.color="black";
       Esito.style.color="white";
    } else if(manoUtente==="carta"&& ManoCpu==="sasso"||
    manoUtente==="sasso" && ManoCpu==="forbici"||
    manoUtente==="forbici" && ManoCpu==="carta"){
        Esito.innerHTML="HAI VINTO";
        PlayAgain.style.color= "#4d66dc";
        Cpu.style.transform= "none";
        Esito.style.color= "#4d66dc";
        
        Punteggio(+1);
        }else{
            Esito.innerHTML="HAI PERSO";
            Punteggio(-1);
            PlayAgain.style.color= "#C73A54";
            Scelta.style.transform= "none";
            Esito.style.color= "#C73A54";
            
        }
       
}

const Punteggio = (valore) => {
    Punti=Punti+valore;
    document.getElementById("score").innerText= Punti;
}

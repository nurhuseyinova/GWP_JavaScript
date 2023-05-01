let formEL=document.createElement("form");
let nameEL=document.createElement("label");
let inputNameEL=document.createElement("input");
let surnameEL=document.createElement("label");
let inputSurnameEL=document.createElement("input");
let dateEL=document.createElement("label");
let inputDateEL=document.createElement("input");
let radio1EL=document.createElement("input");
let radio2EL=document.createElement("input");
let buttonEL=document.createElement("button");
let startEL=document.createElement("button");
let pEL=document.createElement("p");
let time=25



document.body.append(startEL);
document.body.append(pEL);
document.body.append(formEL);
formEL.append(nameEL);
formEL.append(inputNameEL);
formEL.append(surnameEL);
formEL.append(inputSurnameEL);
formEL.append(dateEL);
formEL.append(inputDateEL);
formEL.append(radio1EL);
formEL.append(radio2EL);
formEL.append(buttonEL);

nameEL.innerHTML="<strong>Name:</strong>";
surnameEL.innerHTML="<strong>Surname:</strong>";
dateEL.innerHTML="<strong>Date:</strong>";
buttonEL.innerHTML="<strong>Submit</strong>";
startEL.innerHTML="<strong>Start:)</strong>";
pEL.innerHTML=`00:${time}`;


formEL.style.border="1px dashed brown";
formEL.style.display="flex";
formEL.style.alignItems="center";
formEL.style.justifyContent="center";
formEL.style.flexDirection="column";
formEL.style.height="80vh";
formEL.style.gap="10px";

nameEL.style.color="red";
surnameEL.style.color="red";
dateEL.style.color="red";

inputNameEL.style.borderRadius="5px";
inputSurnameEL.style.borderRadius="5px";
inputDateEL.style.borderRadius="5px";

inputNameEL.style.borderColor="blue";
inputSurnameEL.style.borderColor="blue";
inputDateEL.style.borderColor="blue";


radio1EL.style.accentColor="coral";
radio2EL.style.accentColor="coral";

buttonEL.style.backgroundColor="red";
buttonEL.style.color="white";
buttonEL.style.border="none";
buttonEL.style.padding="5px 10px";

startEL.style.backgroundColor="blue";
startEL.style.color="white";
startEL.style.border="none";
startEL.style.padding="5px 10px";


pEL.style.color="brown";
pEL.style.border="1px solid brown";
pEL.style.padding="5px";
pEL.style.width="40px";




inputNameEL.setAttribute("required","");
inputSurnameEL.setAttribute("required","");
inputDateEL.setAttribute("required","");
radio1EL.setAttribute("required","");
radio2EL.setAttribute("required","");

inputDateEL.setAttribute("type","date");
radio1EL.setAttribute("type","radio");
radio2EL.setAttribute("type","radio");
radio1EL.setAttribute("name","radio");
radio2EL.setAttribute("name","radio");

buttonEL.setAttribute("disabled","");


let interval
startEL.addEventListener("click",function () {
    interval=setInterval(()=>{
        time--
        pEL.innerText=`00:${time}`;
        pEL.style.color="blue";
        pEL.style.borderColor="blue";
        buttonEL.removeAttribute("disabled","");
        buttonEL.style.backgroundColor="blue";
        startEL.style.backgroundColor="red";
        startEL.setAttribute("disabled","")
       
        if(time>=0 && time<=5){
            pEL.style.color="red";
            pEL.style.borderColor="red";
        };
        if(time==0){
            clearInterval(interval);
            startEL.removeAttribute("disabled","");
            buttonEL.setAttribute("disabled","");
            buttonEL.style.backgroundColor="red";
            startEL.style.backgroundColor="blue";

        }
    },1000)
    

    
})

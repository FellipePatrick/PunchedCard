const inputAsk = document.getElementById('inputId');
const inputRes = document.getElementById('inputRes');
const divPai = document.getElementById('divPai');
const aHome = document.getElementById('aHome');
const aCrip = document.getElementById('aCrip');
const aDesCrip = document.getElementById('aDesCrip');
const articleCriptografia = document.getElementById('articleCriptografia');
const articleDesCriptografia = document.getElementById('articleDesCriptografia');
const articleHome = document.getElementById('articleHome');
articleDesCriptografia.classList.add("d-none");
articleCriptografia.classList.add("d-none");
//articleHome.classList.add('d-none');
let cont = 1;

const keyPress = (event) => {
    addColun();
}


const addColun = () => {
    if(cont < 41){
        const divCol = document.createElement('div');
        divCol.classList.add('col');
        for(let i = 1; i < 13; i++){
            const text = document.createElement('p');
            text.innerHTML = cont;
            divCol.appendChild(text);
        }
        divPai.appendChild(divCol);
        cont++;
    }else{
        alert('Numero de caracteres ultrapassou o limete para a versão beta!');
    }
} 





const btnActiveCriptofrafia = () => {
    aHome.classList.remove("active");
    aDesCrip.classList.remove("active");
    aCrip.classList.add("active");
    articleCriptografia.classList.remove("d-none");
    articleHome.classList.add("d-none");
    articleDesCriptografia.classList.add("d-none");
}

const btnActiveDesCriptofrafia = () => {
    aHome.classList.remove("active");
    aCrip.classList.remove("active");
    aDesCrip.classList.add("active");
    articleHome.classList.add("d-none");
    articleDesCriptografia.classList.remove("d-none");
    articleCriptografia.classList.add("d-none");
}

const btnActiveHome = () => {
    aCrip.classList.remove("active");
    aDesCrip.classList.remove("active");
    aHome.classList.add("active");
    articleHome.classList.remove("d-none");
    articleCriptografia.classList.add("d-none");
    articleDesCriptografia.classList.add("d-none");
}

document.addEventListener("keyup", keyPress );
const listItem = document.querySelector('#listItem');
const inputBox =document.querySelector('#inputBox')

function addItem() {
    if(inputBox.value === ''){
        alert('write something')
    }
    else{

        const x =document.createElement('li');
        const y=inputBox.value
        listItem.appendChild(x).innerHTML=y;


        const span =document.createElement('span');
        span.innerHTML = '\u00d7'
        x.appendChild(span)

        span.addEventListener('click' , (e)=>{
            e.target.parentElement.remove()

        })

        
        inputBox.value = ''; 
        saveData() 
    }
} 

function saveData (){
    localStorage.setItem('data' , listItem.innerHTML)
}
function showData (){
    listItem.innerHTML= localStorage.getItem('data')
}

// showData();

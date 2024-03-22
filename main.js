const name=document.getElementById('name')
const phone=document.getElementById('phone')
const language=document.getElementById('language')

const  handleSubmit = (e) =>{
    e.preventDefault()
console.log(name.value,phone.value,language.value);
}

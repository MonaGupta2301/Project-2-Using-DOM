var user=''
var pass =''

const text=document.getElementById('text-input')
text.addEventListener('keyup',(e)=>{
    user=e.target.value
})

const text1=document.getElementById('text-password')
text1.addEventListener('keyup',(e)=>{
    pass= e.target.value
})

const button2=document.getElementById('Log')
button2.addEventListener('click', (e)=>{
    e.preventDefault()
    if(user=='mona123@' && pass=='mona')
    {
       alert('Login Successfull')
       location.href="one.html"
    }
    else{
        alert('Incorrect user Name and Password')
    }
})

const btn=document.getElementById('Can')
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    text.value=''
    text1.value=''
})
const btn=document.getElementById('input2')
console.log(btn)
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    const cb= document.getElementById('c1')
    const cb1= document.getElementById('c2')
    const cb2= document.getElementById('c3')
    const cb3= document.getElementById('c4')
    if(cb.checked)
    {
        location.href="oop!.html"
    }
    if(cb1.checked)
    {
        location.href="14.html"
    }
    if(cb2.checked)
    {
        location.href="oop!.html"
    }
    if(cb3.checked)
    {
        location.href="oop!.html"
    }
    
})
const btn1=document.getElementById('input3')
btn1.addEventListener('click',(e)=>{
    e.preventDefault()
    location.href='12.html'
})
function greet(name){
    console.log('Hello'+name)
}
const greet2=function(name){
    console.log('Hello'+name)
}
greet('Lesha')
greet2('Lesha')

console.log(typeof greet)
console.dir(greet)

function greet3(name){
    console.log('Hello'+name)
}
const arrow=(name,age)=>{
    console.log('Hello'+name+age)
}

const arrow2=(name)=>console.log('Hello'+name)

console.log(new Date())

const start = new Date(1000*60*60*24*365)
console.log(start)
const datw=new Date(2023,0,1)


//___________________
let mode='time'
const output=document.getElementById('output')
const fullBtn=document.getElementById('full')
const dateBtn=document.getElementById('date')
const timeBtn=document.getElementById('time')
/*
fullBtn.onclick=function(){
    mode='full'
    update()
}
dateBtn.onclick=function(){
    mode='date'
    update()
}
timeBtn.onclick=function(){
    mode='time'
    update()
}
*/
function binMode(name){
    return function(){
        mode=name
        update()
    }
}
fullBtn.onclick=binMode('full')
dateBtn.onclick=binMode('date')
timeBtn.onclick=binMode('time')

update()
setInterval(update(),1000)

function update(){
    output.textContent=format(mode)
}

function format(formatMode){
    const now=new Date()
switch(formatMode){
    case 'time':
        return now.toLocaleTimeString()
    case 'date':
        return now.toLocaleDateString()
    case 'full':
        return now.toLocaleDateString()+' '+now.toLocaleTimeString()
}
}
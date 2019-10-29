// Your code goes here
const nav = document.querySelector('.main-navigation');
nav.addEventListener('mouseover', () =>{
anime({
    targets:'.main-navigation',
    backgroundColor:'#303030',
    easing:'linear',
    duration:500
}) 
anime({
    targets:'.main-navigation *',
    color:'#FFFFFF',
    easing:'linear',
    duration:500
})
})

nav.addEventListener('mouseout',() =>{
anime({
    targets:'.main-navigation',
    backgroundColor:'#FFFFFF',
    easing:'linear',
    duration:500
})
anime({
    targets:'.main-navigation *',
    color:'#000000',
    easing:'linear',
    duration:500
})
})

const body = document.querySelector('body');
    body.addEventListener('wheel',function(el) {
        let randomcolor = Math.random() * Math.floor(999)
        anime({
            targets:'body',
            backgroundColor:`#${randomcolor}`,
            duration:1
        }) 
    })
        
const banner = document.querySelector('.intro img')
banner.addEventListener('dblclick', ()=>{
    anime({
        targets:'.intro img',
        height:'50vh'
    })
})
banner.addEventListener('mouseout',() =>{
    banner.style.height = 'auto'
})
alert('Epilepsy Warning')
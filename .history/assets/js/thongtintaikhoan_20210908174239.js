function tabs(){
    const all=document.querySelectorAll.bind(document)
    const panes=all('.tab-pane')
    const allTtem=document.querySelectorAll('.tab-item')  
allTtem.forEach(function(tab,index){
    const pane=panes[index]
    tab.onclick=function(){   
        tab.parentElement.querySelector('.tab-item.active').classList.remove('active')
        pane.parentElement.querySelector('.tab-pane.active').classList.remove('active')
        tab.classList.add('active')      
        pane.classList.add('active')   
    }
})
}
tabs()
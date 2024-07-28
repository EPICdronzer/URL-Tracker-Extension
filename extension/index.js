const bt=document.getElementById("btn")
let myLeads=[]
const inp=document.getElementById("write")
const ulEl=document.getElementById("paste")

//  const myUrl=[
//     {url:"www.harsh.com"}
//  ]

//  get current tab address
const tabBtn=document.getElementById("tab")
tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("url",JSON.stringify(myLeads))
        render(myLeads)
    })
    
})

const myExtracteddLeads=JSON.parse(localStorage.getItem("url"))
// just to check is it working with console
console.log(myExtracteddLeads)
if(myExtracteddLeads)
{
    myLeads=myExtracteddLeads
    render(myLeads)
}

function render(leads){     
    let listItems=""
    for(let i=0;i<leads.length;i++){
    // listItems+="<li><a target='_blank' href='"+ myLeads[i] +"'>"+ myLeads[i]+"</a></li>"
    listItems+=`<li><a target=_blank href=${leads[i]}>${leads[i]}</a></li>`
    // const li=document.createElement("li")
    // li.textContent=leads[i]
    // ulEl.append(li)
    // console.log(listItems)
    }
ulEl.innerHTML=listItems
}

bt.addEventListener("click", function()
{
        myLeads.push(inp.value)
        inp.value=""
        localStorage.setItem("url",JSON.stringify(myLeads))
        console.log(myLeads)
        render(myLeads)      
})

const deleteBtn=document.getElementById("delete")
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
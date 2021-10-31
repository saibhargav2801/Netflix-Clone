var borders = document.querySelectorAll(".container .tab-item")
var content = document.querySelectorAll(".tab-content .container .tab-items-class")
function remove()
{
    borders.forEach(item=>{
        item.classList.remove("tab-bordered")
    })
}
function hide(ido)
{
    content.forEach(t=>{
        // console.log(t.id)
        var str1 = String(t.id)
        var str2 = String(ido)
        $("#"+str1).hide();
        if(t.classList.contains(ido)){
            $("."+str2).show();
        }
    })

}
borders.forEach(items =>{
    items.addEventListener("click",function()
    {
        var idname = this.id[3]
        hide(idname);
        remove();
        this.classList.add("tab-bordered");
    }) 
})

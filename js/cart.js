// 取得元素
const icon_parent=document.querySelectorAll(".select")
let add_icon = icon_parent[0].children[2]
let minus_icon = icon_parent[0].children[0]

// 新增事件
function add_number(event){
    let text = event.target.parentNode.children[1]
    let parsed = parseInt(text.value, 10)
    if (isNaN(parsed)) {    
        alert("輸入number 請") 
        return
    } 
    parsed++
    
    text.value = parsed
}

// 使用fuction寫法
for(var i=0; i<icon_parent.length; i++){
    icon_parent[i].children[2].addEventListener('click', function (event) {
        add_number(event)
    })    
} 

// 整個寫在裡面
for(var i=0; i<icon_parent.length; i++){
    
    // 用target 抓到被點的人(i)
    icon_parent[i].children[0].addEventListener('click', function (event) {
        
        let text = event.target.parentNode.children[1]
        let parsed = parseInt(text.value, 10)
        if (isNaN(parsed)) {    
            alert("輸入number 請") 
            return
        } 
        parsed--
        
        text.value = parsed
    })    
} 

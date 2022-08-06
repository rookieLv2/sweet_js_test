// 取得元素
const icon_parent = document.querySelectorAll(".select")
const price = document.querySelectorAll(".total_price")
const text_number = document.querySelectorAll("input")
const order_cash= document.querySelectorAll(".price")
// let add_icon = icon_parent[0].children[2]
// let minus_icon = icon_parent[0].children[0]

// 新增事件
function add_number(event){
    let test = event.target
    let text = event.target.parentNode.children[1]
    let parsed = parseInt(text.value, 10)
    if (isNaN(parsed)) {    
        alert("輸入number 請") 
        return
    } 
    parsed++

    if(parsed<0)
        parsed = 0
    
    text.value = parsed
    test.parentNode.parentNode.children[3].innerText = "NT$"+450 * text.value
    
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
        let test = event.target
        let text = event.target.parentNode.children[1]
        let parsed = parseInt(text.value, 10)
        if (isNaN(parsed)) {    
            alert("輸入number 請") 
            return
        } 
        parsed--

        if(parsed<0)
            parsed = 0
        
        text.value = parsed
        test.parentNode.parentNode.children[3].innerText = "NT$"+450 * text.value
    })    
} 

function updateValue(element) {
    element.parentNode.parentNode.children[3].innerText = "NT$"+450 * element.value
    if(element.value < 0)
        element.parentNode.parentNode.children[3].innerText = "NT$"+0
}

text_number.forEach(element => {
    element.addEventListener('input', event =>{
        updateValue(event.target)
    })
})

console.log(order_cash)

// 60-64行 == 66行
// text_number.forEach(element => element.addEventListener('input', event => updateValue(event.target)))

// 60-64行 == 66行 == 68-74行
// for(var i=0; i<text_number.length; i++){
//     text_number[i].addEventListener('input', function (event){
//         updateValue(event.target)
    
//     })
// }

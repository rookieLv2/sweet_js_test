// 取得元素
const icon_parent = document.querySelectorAll(".select")
const price = document.querySelectorAll(".total_price")
const text_number = document.querySelectorAll("input")
const order_cash= document.querySelectorAll(".order_info")
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
    //要改的是td下的p標籤 於是再加上children[0]
    // console.log(element)   ```    這是td標籤           ```
    // console.log(element.parentNode.parentNode.children[3].children[0])
    element.parentNode.parentNode.children[3].children[0].innerText = "NT$"+450 * element.value
    if(element.value < 0)
        element.parentNode.parentNode.children[3].children[0].innerText = "NT$"+0
}

text_number.forEach(element => {
    element.addEventListener('input', event =>{
        updateValue(event.target)
        // temp(element)
    })
})
```
//todo input有變動時 把三個價格加起來 
function temp(element){
    console.log('plz')
    let test_price = 0
    price.forEach(tp => {
        // 抓到每個元素的數值
        console.log(tp.children[0])
        // console.log(element.children[0].innerText.substring(3))
        // let parsed = parseInt(element.children[0].innerText.substring(3), 10)
        // test_price += parsed
    })
    console.log(test_price)
    order_cash[0].children[1].children[1].innerText = test_price
}

// price.forEach(element => {
//     element.addEventListener('input', event =>{
//         all_price(event.target)
//     })
// })





// 60-64行 == 66行
// text_number.forEach(element => element.addEventListener('input', event => updateValue(event.target)))

// 60-64行 == 66行 == 68-74行
// for(var i=0; i<text_number.length; i++){
//     text_number[i].addEventListener('input', function (event){
//         updateValue(event.target)
    
//     })
// }
```

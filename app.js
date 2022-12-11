const input = document.querySelector("#num")
const btn = document.querySelector("button")
const result = document.querySelector("#result")

// // const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/gi
// const regExp = /\d[0-31]\/\d{0-12}\/\d{4}/
// // const regExp = /^[1-2]\d{13}$/
// ([1-2][0-9]{3})

// const regExp = /(0?[1-9]|[12][0-9]|3[01])(0?[1-9]|1[012])[\/\.\-]$/
    const regExp = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)|0[1-9]{2}$/;

btn.addEventListener("click",()=>{
    console.log("yes");
    regExp.test(input.value)
    if(regExp.test(input.value)){
        result.innerText="success!"
        result.style.color = "green"
        console.log("yes")
    }else{
        console.log("nope")
        result.style.color = "red"
        result.innerText="failed!"
    }
})


// let num = 0;
// function recursion(){
//     num++;
//     if(num>100) return
//     console.log(num)
//     recursion()
// }

// recursion()

// let num = 0
// let filed = ''
//  function addnum (){
//     num ++;
//     filed+=`${num}`
//     console.log(filed);
//     if(num>=30)return
//     addnum()
// }
// addnum()

// const people = {
//     'John':{
//         age : 45,
//         parents:{
//             'Fred':{
//                 age:65
//             },'Marry':{
//                 age:64
//             }
//         }
//     },'Sam':{

//     }
// }
//  function personlist (obj){
//     for(let key in obj.parents){
//         console.log()
//         personlist[obj.parents[key]]
//     }
//  }



// for(let key in people){
//     personlist(people[key])
// }
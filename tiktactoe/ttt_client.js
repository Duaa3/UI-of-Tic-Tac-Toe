const getStudets = ()=>{
    let url=`https://thedynamicdoers.com/api/students`;
   
reqConfig ={
    method:"GET",
}
fetch(url,reqConfig)
.then((response)=>{return response.json();})
.then((parsedResponse)=> {console.log(parsedResponse);})
}
const createStudets = ()=>{
    let url=`https://thedynamicdoers.com/api/students`;
   
reqConfig2 ={
    method:"POST",
    headers: {"content-Type":"application/json;charset=UTF-8"},
    body:JSON.stringify({name: "Mr.Test",email:"tesr@gmail.com"})
}

fetch(url,reqConfig2)
.then((response)=>{return response.json();})
.then((parsedResponse)=> {console.log(parsedResponse);})
}
createStudets();
setTimeout(getStudets,3000);




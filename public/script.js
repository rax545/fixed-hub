
async function runCode(){

const code=document.getElementById("code").value;
const language=document.getElementById("language").value;

let version="3.10.0";

if(language==="javascript"){
version="18.15.0";
}

if(language==="php"){
version="8.2.3";
}

const response=await fetch(
"https://emkc.org/api/v2/piston/execute",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
language:language,
version:version,
files:[
{
content:code
}
]
})
}
);

const data=await response.json();

document.getElementById("output").innerText=
data.run.output;
}

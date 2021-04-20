exports.action = (data)=>{
var testphrase = require(path.resolve('%CD%', './plugins/test/testphrase').replace('\\%CD%', '')) ;

var reco=JarvisIA.reco

var reg = "/"+data.yoda+"(.+)/i" ; var rgxp=eval(reg) ; var temp = reco.match(rgxp); console.log(temp);var resultats =temp[1].trim()

var resultats=testphrase(resultats)
console.log("le résultat : "+resultats)

var parle=""
for(var j=0;j<resultats.length;j++){
  if(resultats[j].search('adverbe')>-1){ resultats[j]=resultats[j]+resultats[j+1];  resultats[j+1]=""}
}

for(var j=0;j<resultats.length;j++){
  if(resultats[j].search('pronom')>-1){ resultats[j]=resultats[j]+resultats[j+1];  resultats[j+1]=""}
}

var x=0
for(var i=resultats.length-1;i>=0;i-=1){

    if((resultats[i].search(new RegExp("\\b" + 'verbe' ,"gi"))>-1)&&(x==0)){
        var x=1
        var parle=parle+","+resultats[i]+","
    }

    else{ 

         if (x==0){
              var parle=resultats[i]+parle
         }
    
        else{
      
            for(var j=0;j<i+1;j++){
              if((j==i)&&(resultats[i].search(new RegExp("\\b" + 'pronom' ,"gi"))>-1)){
              var parle=parle+resultats[j]
              }
              else{var parle=parle+resultats[j]}
            }
      var i=resultats.length;break
        }
   }
}

var parle=parle.replace(new RegExp(" verbe","gi"),"")
var parle=parle.replace(new RegExp(" adverbe","gi"),"")
var parle=parle.replace(new RegExp(" nom","gi"),"")
var parle=parle.replace(new RegExp(" pronom","gi"),"")
var parle=parle.replace(new RegExp(" adjectif","gi"),"")
var parle=parle.replace(new RegExp(" préposition","gi"),"")
var parle=parle.replace(new RegExp(" article","gi"),"")
var parle=parle.replace(new RegExp(" conjonction","gi"),"")
var parle=parle.replace(new RegExp(" inconnuuuuu","gi"),"")
var parle=parle.replace(new RegExp("undefined","gi"),"")
console.log("*****"+parle)
JarvisIASpeech(parle)
return
}  
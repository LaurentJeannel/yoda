function dico1(queryphraser) {
	//console.log('le queryphraser '+queryphraser+queryphraser.length)
lecture=function(queryphraser){//console.log('le queryphraser '+queryphraser+queryphraser.length)
		//queryphraser=data.phrase.toLowerCase()
//queryphraser=queryphraser.toLowerCase()
//queryphraser=queryphraser.trim()
queryphraser=queryphraser.replace(new RegExp("\\b" + "'" + "\\b","gi")," ");
queryphraser=queryphraser.replace(new RegExp('[^a-z A-Z 0-9 êéèàçâäùïô]', 'ig')," ")
queryphraser=queryphraser.toLowerCase().split(" ")//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

fs = require('fs')
path = require('path')
request = require('request');cheerio = require('cheerio');



		queryphraser2=""
		//fs.readFile(filename, "utf8", function (err, data) {

	  filesnom = fs.readFileSync(path.resolve('%CD%','./plugins/yoda/mathildedico/memoire/nom.json' ).replace('\\%CD%', ''),'utf-8') .toLowerCase();
	//console.log(filesnom)
	  filesadverbe = fs.readFileSync(path.resolve('%CD%','./plugins/yoda/mathildedico/memoire/adverbe.json').replace('\\%CD%', ''),'utf-8').toLowerCase() 
        
      filesverbe = fs.readFileSync(path.resolve('%CD%','./plugins/yoda/mathildedico/memoire/verbe.json').replace('\\%CD%', ''),'utf-8').toLowerCase()
	
	  filesadjectif = fs.readFileSync(path.resolve('%CD%', './plugins/yoda/mathildedico/memoire/adjectif.json').replace('\\%CD%', ''),'utf-8').toLowerCase()
	
	  filespréposition = fs.readFileSync(path.resolve('%CD%','./plugins/yoda/mathildedico/memoire/préposition.json').replace('\\%CD%', ''),'utf-8').toLowerCase()
   
	  filesarticle = fs.readFileSync(path.resolve('%CD%','./plugins/yoda/mathildedico/memoire/article.json').replace('\\%CD%', ''),'utf-8').toLowerCase()  
    
      filespronom = fs.readFileSync(path.resolve('%CD%','./plugins/yoda/mathildedico/memoire/pronom.json' ).replace('\\%CD%', ''),'utf-8').toLowerCase()

      filesconjonction = fs.readFileSync(path.resolve('%CD%','./plugins/yoda/mathildedico/memoire/conjonction.json' ).replace('\\%CD%', ''),'utf-8').toLowerCase()

      filesinconnu = fs.readFileSync(path.resolve('%CD%','./plugins/yoda/mathildedico/memoire/inconnu.json' ).replace('\\%CD%', ''),'utf-8').toLowerCase()
////////////////////////////////////////////////////////
              jsonStrnom = JSON.parse(filesnom);
			  jsonStradverbe = JSON.parse(filesadverbe);
			  jsonStrverbe = JSON.parse(filesverbe);
			  jsonStradjectif = JSON.parse(filesadjectif);
			  jsonStrpréposition = JSON.parse(filespréposition);
			  jsonStrarticle = JSON.parse(filesarticle);
          	  jsonStrpronom = JSON.parse(filespronom);
          	  jsonStrinconnu = JSON.parse(filesinconnu);
          	  jsonStrconjonction = JSON.parse(filesconjonction);

				for(i=0;i<queryphraser.length;i++){//.search(new RegExp("\\b" + phrasetester[i] + "\\b","gi")) >-1)
					  queryphraser1=queryphraser[i];  queryphraser1=queryphraser1.trim()
					
						//.search(new RegExp("\\b" + "queryphraser1" + "\\b","gi"))>-1
						if ( (filesnom.search(" " + queryphraser1 + " ")>-1)||
							(filesadverbe.search(" " + queryphraser1 + " ") >-1)||
							(filesverbe.search(" "+queryphraser1+" ") >-1)||
							(filesadjectif.search(" " + queryphraser1 + " ") >-1)||
							(filespréposition.search(" " + queryphraser1 + " ") >-1)||
							(filesarticle.search(" " + queryphraser1 + " ") >-1)||
							(filespronom.search(" " + queryphraser1 + " ") >-1)||
							(filesinconnu.search(" " + queryphraser1 + " ") >-1)||
							(filesconjonction.search(" " + queryphraser1 + " ") >-1)||
							(queryphraser1=="à")||
							(queryphraser2.search(" " + queryphraser1 + " ") >-1) )
							{
								//console.log(' on connais' + queryphraser1);console.log( filesadjectif.search(new RegExp("\\b" + queryphraser1 + "\\b","gi")) )
							}
						

						else{//console.log('test : + '+queryphraser1)
							//console.log("connais pas donc on recherhce " +queryphraser1);
							  queryphraser2=queryphraser2+" "+queryphraser1
							}

				}
	  queryphraser=queryphraser2.split(" ");
	//console.log("le queryphraser 2"+queryphraser+queryphraser.length)
	depart(queryphraser)
}//fin fnct lecture


depart=function(queryphraser){
	i=0
	  queryphraser1=""
	compteur(i,queryphraser,queryphraser1)
}//fin fnct depart

compteur=function(i,queryphraser,queryphraser1){
//console.log(i)
		if(i==queryphraser.length){
			console.log("fin du dictionnaires");
		//sauvegarde(queryphraser,queryphraser1);
  new_jsonStr = JSON.stringify(jsonStrnom)
fs.writeFileSync(path.resolve('%CD%','./plugins/yoda/mathildedico/memoire/nom.json' ).replace('\\%CD%', ''),new_jsonStr,'utf-8')
  new_jsonStr = JSON.stringify(jsonStradjectif)
fs.writeFileSync(path.resolve('%CD%','./plugins/yoda/mathildedico/memoire/adjectif.json' ).replace('\\%CD%', ''),new_jsonStr,'utf-8')
  new_jsonStr = JSON.stringify(jsonStrverbe)
fs.writeFileSync(path.resolve('%CD%','./plugins/yoda/mathildedico/memoire/verbe.json' ).replace('\\%CD%', ''),new_jsonStr,'utf-8')
  new_jsonStr = JSON.stringify(jsonStradverbe)
fs.writeFileSync(path.resolve('%CD%','./plugins/yoda/mathildedico/memoire/adverbe.json' ).replace('\\%CD%', ''),new_jsonStr,'utf-8')
  new_jsonStr = JSON.stringify(jsonStrarticle)
fs.writeFileSync(path.resolve('%CD%','./plugins/yoda/mathildedico/memoire/article.json' ).replace('\\%CD%', ''),new_jsonStr,'utf-8')
  new_jsonStr = JSON.stringify(jsonStrpréposition)
fs.writeFileSync(path.resolve('%CD%','./plugins/yoda/mathildedico/memoire/préposition.json' ).replace('\\%CD%', ''),new_jsonStr,'utf-8')
  new_jsonStr = JSON.stringify(jsonStrpronom)
fs.writeFileSync(path.resolve('%CD%','./plugins/yoda/mathildedico/memoire/pronom.json' ).replace('\\%CD%', ''),new_jsonStr,'utf-8')
  new_jsonStr = JSON.stringify(jsonStrinconnu)
fs.writeFileSync(path.resolve('%CD%','./plugins/yoda/mathildedico/memoire/inconnu.json' ).replace('\\%CD%', ''),new_jsonStr,'utf-8')
 new_jsonStr = JSON.stringify(jsonStrconjonction)
fs.writeFileSync(path.resolve('%CD%','./plugins/yoda/mathildedico/memoire/conjonction.json' ).replace('\\%CD%', ''),new_jsonStr,'utf-8')
		//callback()
		//callback({'tts' : " "})	
		return false
		}
	queryphraser1=queryphraser[i]
	//queryphraser1=queryphraser1.replace(new RegExp('.', 'ig'),"")
	
	//SARAH.run('language', { 'phrasetester' : queryphraser});
	dico(i,queryphraser,queryphraser1)
	//callback()
	//callback({'tts' : " "})	
	return false
  
}//fin fnct compteur

dico=function(i,queryphraser,queryphraser1){
//console.log(queryphraser1[i]).CatgramDefinition > span:nth-child(2)
						//queryphraser2=queryphraser1[i]
//http://www.cnrtl.fr/synonymie/hier
//#vitemselected > a:nth-child(1)//#vitemselected > a:nth-child(1) > span:nth-child(1)
//request({ 'uri' : 'http://www.cnrtl.fr/synonymie/'+queryphraser1, 'headers':{'Accept-Charset': 'utf-8'} }
	
if(queryphraser1==""){i++;compteur(i,queryphraser,queryphraser1);//callback({'tts' : " "})
	;return false}//fin if §==


	try{		
						request({ 'uri' : 'http://www.larousse.fr/dictionnaires/francais/'+queryphraser1, 'headers':{'Accept-Charset': 'utf-8'} }
								, function(error, response, html){
				            			  $ = cheerio.load(html)
	try{			                        
  nom=$('.CatgramDefinition').text();//console.log(nom+" !!!!!!!!!!!!!!!!RECHERCHE!!!!!!!!!!!!!!!!!!!!!!!!! "  +queryphraser1 )
}catch(err){nom=""}
//console.log('nom '+nom)
	//nom=$('#vtoolbar > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)').text();console.log('aaa'+nom)
											//nom1=$('#vitemselected > a:nth-child(1)').text();console.log('rrrr'+nom1)
		

					                        if(nom==""){
					                        	jsonStrinconnu.nom.push(" "+queryphraser1+" ")
					                        	//console.log(queryphraser1 +" rien de rien on memorise")
					                        }
					                       
					                        else {
					                        	
					                        	//console.log(queryphraser1 +" "+nom)
						                        

						                        if(nom.search(new RegExp("\\b" + "nom" + "\\b","gi"))>-1){
												jsonStrnom.nom.push(" "+queryphraser1+" ");//console.log(jsonStrnom)
												queryphraser1="0"
												}
												if(nom.search(new RegExp("\\b" + "pronom" + "\\b","gi"))>-1){
												jsonStrpronom.nom.push(" "+queryphraser1+" ");//console.log(jsonStrpronom)
												queryphraser1="0"
												}
												 if(nom.search(new RegExp("\\b" + "verbe" + "\\b","gi"))>-1){
												jsonStrverbe.nom.push(" "+queryphraser1+" ");//console.log(jsonStrverbe)
												queryphraser1="0"
												}
												if(nom.search(new RegExp("\\b" + "article" + "\\b","gi"))>-1){
												jsonStrarticle.nom.push(" "+queryphraser1+" ");//console.log(jsonStrarticle)
												queryphraser1="0"
												}
												 if(nom.search(new RegExp("\\b" + "adjectif" + "\\b","gi"))>-1){
												jsonStradjectif.nom.push(" "+queryphraser1+" ");//console.log(jsonStradjectif)
												queryphraser1="0"
												}
												if(nom.search(new RegExp("\\b" + "préposition" + "\\b","gi"))>-1){
												jsonStrpréposition.nom.push(" "+queryphraser1+" ");//console.log(jsonStrpréposition)
												queryphraser1="0"
												}
												if(nom.search(new RegExp("\\b" + "adverbe" + "\\b","gi"))>-1){
												jsonStradverbe.nom.push(" "+queryphraser1+" ");//console.log(jsonStradverbe)
												queryphraser1="0"
												}
												if(nom.search(new RegExp("\\b" + "conjonction" + "\\b","gi"))>-1){
												jsonStrconjonction.nom.push(" "+queryphraser1+" ");//console.log(jsonStradverbe)
												queryphraser1="0"
												}
											}




				                        i++
				                       compteur(i,queryphraser,queryphraser1) 
				        		}
				        )

									//}

									}//fin try	

										                        
		catch(err){dico(i,queryphraser,queryphraser1);//callback()
//callback({'tts' : " "})			
	;return false};

}//fin fnct dico

//objet.courses.push({item: queryphraser}); new_jsonStr = JSON.stringify(objet);
  //    fs.writeFile(filePathe,new_jsonStr , function (err) {


//queryphraser=queryphraser.replace(new RegExp('&"(-_)=^$ù*,;:!~#{[|`^@]}¤?./§µ%£¨+°.', 'ig'),"").toLowerCase()



//console.log('les mots '+queryphraser)
//console.log('le split'+queryphraser.length)
//if (queryphraser=""){return false}
//console.log("envoie queryphraser"+queryphraser)
lecture(queryphraser)

}//findico1

module.exports = dico1;
//function dico1(queryphraser1) {
//reponsequery=queryphraser1.split(' ')
//console.log(reponsequery)
//}//findico1

//module.exports = dico1;
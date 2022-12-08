
    
    let part1 = "Hello ";
    let part2 = "there! ";
    let part3 = "This is your random verse in Spanish: ";
    let juanaI1= "Como una sola flor desesperada, de Juana de Ibarbourou:  el aliento con la frente que inclina el pensamiento, de este amor que me copa el sentimiento, desde la breve risa hasta el lamento, desde la herida bruja hasta su beso.";
    let juanaI2 = "Como una sola flor desesperada  de Juana de Ibarbourou:  Mi vida es de tu vida tributaria, ya te parezca tumulto, o solitaria, como una sola flor desesperada Depende de él como del leño duro la orquídea, o cual la hiedra sobre el muro, que solo en él respira levantada.";
    
    let gustavoA1 = "Volverán las oscuras golondrinas, de Gustavo Adolfo Bécquer:  Volverán las oscuras golondrinas en tu balcón sus nidos a colgar, y otra vez con el ala a sus cristales  jugando llamarán.   Pero aquellas que el vuelo refrenaban  tu hermosura y mi dicha a contemplar,  aquellas que aprendieron nuestros nombres… ¡esas… no volverán!.";
    let gustavoA2 = "Volverán las oscuras golondrinas, de Gustavo Adolfo Bécquer:  esas… no volverán...  Volverán del amor en tus oídos, las palabras ardientes a sonar, tu corazón de su profundo sueño tal vez despertará. Pero mudo y absorto y de rodillas..";
    let gustavoA3 = "Volverán las oscuras golondrinas, de Gustavo Adolfo Bécquer:  Pero aquellas, cuajadas de rocío, cuyas gotas mirábamos temblar, y caer como lágrimas del día.." ;
    let martinC = "La Duda, de Martín Costa:  Desde que empezó la duda A escarbarnos en el Ser, y que como un alfiler, nos pincha su punta aguda bajo su tragedia muda el hombre no vive en paz..";

    // message parts
    let messageParts = [juanaI1, juanaI2, gustavoA1, gustavoA2, gustavoA3, martinC];
    
   
   let randomMess
   
   function generateMessage(messageParts) {
  return (part1.toLocaleUpperCase() + part2.toUpperCase() + part3.toUpperCase() + messageParts[Math.floor(Math.random() * messageParts.length)]);

}


newFunction();

function newFunction() {
  console.log(generateMessage(messageParts));
}


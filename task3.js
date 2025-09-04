// Type your code below this line!
//Se te ha dado un constructor para un objeto Mail.
//  Modifica el código para que el usuario proporcione su propio asunto y mensaje como parámetros de ejecución en ese orden.
// Luego, extiende el constructor para incluir un método `printMail()` que imprima lo siguiente en la Consola:
//`<subj>: <msg>` Por ejemplo, si las dos entradas son `hello` y `world`, la salida debe ser `hello: world`.
// Type your code below this line!

function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
    this.printMail = function() {
    console.log(this.subject + ": " + this.message);
  }
  }
  
  const newMail = new Mail(process.argv[2],process.argv[3]);
  
  // Type your code above this line!
  
  newMail.printMail()
  
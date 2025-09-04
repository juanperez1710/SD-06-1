function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }
  
  // Type your code below this line!
  const subj=process.argv[2];
  const msg=process.argv[3];
  const newMail = new Mail(process.argv[2],process.argv[3] )
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)

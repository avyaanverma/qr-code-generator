import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
// change the type  to  module 
// in this code I have used a node library
inquirer
  .prompt([
    /* Pass your questions in here */
    // console.log("Provide a link");
    {
        message:"Type in the URL",
        name: "URL"
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL
    const qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_image.png"));

    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });



  





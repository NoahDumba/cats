const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {

    if (!error) functionToRunWhenThingsAreDone(data); //callback function
    else functionToRunWhenThingsAreDone();
  });
};

const printOutCatBreed = breed => {
  console.log('Return Value: ', breed) // => print out details correctly.
};

module.exports = breedDetailsFromFile;
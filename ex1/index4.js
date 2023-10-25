const fs = require('fs');

const data = {
    name: "Duc Duy",
    age: 21,
    city: "Ho Chi Minh"
};

fs.writeFile('data.json', JSON.stringify(data, null, 4), (err) => {
    if (err) {
        console.error('Error writing to file!', err);
    } else {
        console.log('Data saved to data.json');
    }
});

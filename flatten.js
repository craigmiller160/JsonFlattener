const fs = require('fs');
const path = require('path');

if (process.argv.length < 3) {
	throw new Error('Must provide filename as an argument');
}

const filename = process.argv[2];

const jsonTxt = fs.readFileSync(path.join(process.cwd(), filename));
const jsonTxtFlat = JSON.stringify(JSON.parse(jsonTxt));
console.log(jsonTxtFlat);
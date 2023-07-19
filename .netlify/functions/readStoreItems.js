const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
    const filePath = path.join(__dirname, 'store-items.json');
    const data = fs.readFileSync(filePath, 'utf8');
    return {
        statusCode: 200,
        body: data
    };
};
const { google }  = require('googleapis');
const Sheets = require("@googleapis/sheets");
const path = require('path');

const getSheetsService = () => {
  const KEYFILEPATH = path.join(__dirname, 'credentials.json');
  const SCOPES = ['https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive.file'];

  const auth = new google.auth.GoogleAuth({
    keyFile: KEYFILEPATH,
    scopes: SCOPES,
  });
  const sheetsService = google.sheets({ version: 'v4', auth });
  return sheetsService;
};
const sheets= getSheetsService();

sheets.spreadsheets.values.batchUpdate({
  
  "spreadsheetId": 'xxxxx',
  "resource": {
    "valueInputOption": "RAW",
    "data": [
      {
        "range": "Sheet1!A1:C3", //A1 Notation
        "values": [
            ["Hello", "Google", "Sheets"],
            ["Hey", "please", "update"],
            [1, 2, 3]
        ]
      }
    ]
  }
}, function(err, response){
  if (err) {
    console.log('The API returned an error: ' + err);
    return;
  }
  console.log(response);
});





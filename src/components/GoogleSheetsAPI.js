const SHEET_ID = process.env.REACT_APP_GOOGLE_SHEET_ID;
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const SHEET_NAME = "Sheet1";  // Change this if needed

export async function submitToGoogleSheets(data) {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}!A:D:append?valueInputOption=USER_ENTERED&key=${API_KEY}`;
//     `https://sheets.googleapis.com/v4/spreadsheets/1NU6_USQ_aEvXVlptsrB4NP0fCJOGuy9MXOBU_Q8v8K4/values/Sheet1!A:D:append?valueInputOption=USER_ENTERED&key=AIzaSyCYB9rp7s_ueHlKdgJLVAlupPyseBAe3k0`
    
//     REACT_APP_GOOGLE_SHEET_ID="1NU6_USQ_aEvXVlptsrB4NP0fCJOGuy9MXOBU_Q8v8K4"
// REACT_APP_GOOGLE_API_KEY="AIzaSyCYB9rp7s_ueHlKdgJLVAlupPyseBAe3k0"

    const values = [[data.name, data.email, data.message, data.subscribe ? "Yes" : "No"]];

    const body = JSON.stringify({ values });

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body
        });

        if (!response.ok) throw new Error("Error saving data to Google Sheets");

        return true;  // Success
    } catch (error) {
        console.error(error);
        return false;  // Failure
    }
}

console.log("Sheet ID:", process.env.REACT_APP_GOOGLE_SHEET_ID);
console.log("API Key:", process.env.REACT_APP_GOOGLE_API_KEY);


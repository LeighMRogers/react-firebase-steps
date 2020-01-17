import apiKeys from "./config";

const baseUrl = apiKeys.databaseURL;

const getBoardsByUid = (uid) => {
    return fetch(`${baseUrl}/boards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error("something wrong" + response.statusText)
        }
    }).then((parsedResponse) => {
        console.log("parsed", parsedResponse)
    })
}

export default { getBoardsByUid }
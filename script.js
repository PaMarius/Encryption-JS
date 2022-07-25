const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ",", "?", "!", "'", "_", "-", "&", "@", "#", "$", "%", "*", "(", ")", " "];
const encryptMessage = function (message, secretKey) {
    let indexOfSecretKeyInitial = [];
    let indexOfMessage = [];
    let indexOfSecretKey = []; 
    let finalIndex = [];
    let encryptedMessage = [];

    // Find index for message
    for (const letter of message){
    indexOfMessage.push(characters.indexOf(letter.toUpperCase()))
}

    // Find index for secretKey
    for (const key of secretKey){
        indexOfSecretKey.push(characters.indexOf(key.toUpperCase()))
        indexOfSecretKeyInitial.push(characters.indexOf(key.toUpperCase()))
    }

    console.log(indexOfMessage, indexOfSecretKey)

    // SUM of message's index and secretKey's index
    // 1) message.length = secretKey.length
    if (indexOfMessage.length === indexOfSecretKey.length) {
        for (let i=0; i <= indexOfMessage.length - 1; i++){
            finalIndex.push(indexOfMessage[i] + indexOfSecretKey[i])
         }
         for (let i=0; i<=finalIndex.length-1; i++) {
             encryptedMessage.push(characters[finalIndex[i]])
         }
    } 

    // 2) message.length < secretKey.length
    else if (indexOfMessage.length < indexOfSecretKey.length) {
        for (let i=0; i <= indexOfMessage.length - 1; i++){
            finalIndex.push(indexOfMessage[i] + indexOfSecretKey[i])
         }
         for (let i=0; i<=finalIndex.length-1; i++) {
            encryptedMessage.push(characters[finalIndex[i]])
         }
    } 
    
    // 3) message.length > secretKey.length
    else {
        while(indexOfMessage.length > indexOfSecretKey.length) {
            indexOfSecretKey.push(...indexOfSecretKeyInitial)
        }
        for (let i=0; i <= indexOfMessage.length - 1; i++){
            finalIndex.push(indexOfMessage[i] + indexOfSecretKey[i])
         }
         for (let i=0; i<=finalIndex.length-1; i++) {
            encryptedMessage.push(characters[finalIndex[i]])
         }
    }
    
    console.log(indexOfSecretKey)
    return encryptedMessage.join('');
}

console.log(encryptMessage('aafadasdasdasdasdzjoaisjudqi7893hnakjhdkjahdkjhaskjhkjac', 'gasdasda'));


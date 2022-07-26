const decryptMessage = function (toDecrypt, secretKey) {
  let indexOfSecretKeyInitial = [];
  let indexOfToDecrypt = [];
  let indexOfSecretKey = [];
  let finalIndex = [];

  // Find index for message
  for (const letter of toDecrypt) {
    indexOfToDecrypt.push(characters.indexOf(letter.toUpperCase()));
  }

  // Find index for secretKey
  for (const key of secretKey) {
    indexOfSecretKey.push(characters.indexOf(key.toUpperCase()));
    indexOfSecretKeyInitial.push(characters.indexOf(key.toUpperCase()));
  }

  // SUM of message's index and secretKey's index
  // --- 1) message.length = secretKey.length OR message.length < secretKey.length
  if (
    indexOfToDecrypt.length === indexOfSecretKey.length ||
    indexOfToDecrypt.length < indexOfSecretKey.length
  ) {
    for (let i = 0; i <= indexOfToDecrypt.length - 1; i++) {
      if (indexOfToDecrypt[i] - indexOfSecretKey[i] >= 0) {
        let diffOfIndex = indexOfToDecrypt[i] - indexOfSecretKey[i];
        finalIndex.push(diffOfIndex);
      } else {
        finalIndex.push(
          characters.length + indexOfToDecrypt[i] + 1 - indexOfSecretKey[i]
        );
      }
    }
    for (let i = 0; i <= finalIndex.length - 1; i++) {
      encryptedMessage.push(characters[finalIndex[i]]);
    }
  }

  // --- 2) message.length > secretKey.length
  else {
    while (indexOfToDecrypt.length > indexOfSecretKey.length) {
      indexOfSecretKey.push(...indexOfSecretKeyInitial);
    }
    for (let i = 0; i <= indexOfToDecrypt.length - 1; i++) {
      if (indexOfToDecrypt[i] - indexOfSecretKey[i] >= 0) {
        let diffOfIndex = indexOfToDecrypt[i] - indexOfSecretKey[i];
        finalIndex.push(diffOfIndex);
      } else {
        finalIndex.push(
          characters.length + indexOfToDecrypt[i] + 1 - indexOfSecretKey[i]
        );
      }
    }
    for (let i = 0; i <= finalIndex.length - 1; i++) {
      encryptedMessage.push(characters[finalIndex[i]]);
    }
  }
};

const encryptButton = document.querySelector(".encrypt-bttn");
const decryptButton = document.querySelector(".decrypt-bttn");
const message = document.getElementById("message");
const secretKey = document.getElementById("secretKey");
const decryptedMessage = document.querySelector(".decrypted-message");
const copyButton = document.querySelector(".copy-bttn");

let encryptedMessage = [];

// --- Encrypt button
encryptButton.addEventListener("click", () => {
  encryptedMessage = [];
  let textMessage = message.value;
  let textSecretCode = secretKey.value;
  if (message.value !== "" && secretKey.value !== "") {
    encryptMessage(textMessage, textSecretCode);
    decryptedMessage.textContent = encryptedMessage.join("");
  } else {
    alert("Please enter a value!");
  }
});

// --- Decrypt button
decryptButton.addEventListener("click", () => {
  encryptedMessage = [];
  let textMessage = message.value;
  let textSecretCode = secretKey.value;
  if (message.value !== "" && secretKey.value !== "") {
    decryptMessage(textMessage, textSecretCode);
    decryptedMessage.textContent = encryptedMessage.join("");
  } else {
    alert("Please enter a value!");
  }
});

// --- Copy button
function copyToClipboard() {
  var range = document.createRange();
  range.selectNode(document.querySelector(".decrypted-message"));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
}

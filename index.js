const firstPasswordInput = document.getElementById("first-clipboard");
const secondPasswordInput = document.getElementById("second-clipboard");
const generateBtn = document.getElementById("generate-btn");
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function generatePassword() {
    let password = "";
    let inputValue = document.getElementById("pass-length").value;
    let passLength = (inputValue > 4 && inputValue < 16) ? inputValue : 15;
    for (let i = 0; i < passLength; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }
    return password;
}

function addToDiv() {
    let password1 = generatePassword();
    let password2 = generatePassword();
    firstPasswordInput.textContent = password1;
    secondPasswordInput.textContent = password2;
}


function copyTextToClipboard(element) {
  let textArea = document.createElement("textarea");
  textArea.value = element.textContent;
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    let successful = document.execCommand('copy');
    if (successful) {
        alert('Copying text command was successful')   
    }
  } catch (err) {
    alert('Oops, unable to copy: ', err);
  }

  document.body.removeChild(textArea);
}

generateBtn.addEventListener("click", addToDiv)

firstPasswordInput.addEventListener("click", (e) => copyTextToClipboard(firstPasswordInput))
secondPasswordInput.addEventListener("click", (e) => copyTextToClipboard(secondPasswordInput))

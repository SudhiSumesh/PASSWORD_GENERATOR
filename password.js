const characterAmountRange = document.getElementById("characterAmountRange");
const characterAmountNumber = document.getElementById("characterAmountNumber");
const form = document.getElementById("passwordGeneratorForm");
const includeUperCase = document.getElementById("includeUppercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const UPPERCASE_CHAR_CODE = arrayFromLowertoHeigher(65, 90);
const LOWERCASE_CHAR_CODE = arrayFromLowertoHeigher(97, 122);
const NUMBER_CHAR_CODE = arrayFromLowertoHeigher(48, 57);
const SYMBOLS_CHAR_CODE = arrayFromLowertoHeigher(33, 47)
  .concat(arrayFromLowertoHeigher(58, 64))
  .concat(arrayFromLowertoHeigher(91, 96))
  .concat(arrayFromLowertoHeigher(123, 126));
const passwordDisplay = document.getElementById("passwordDisplay");
characterAmountRange.addEventListener("input", syncValues);
characterAmountNumber.addEventListener("input", syncValues);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const addUperCase = includeUperCase.checked;
  const addNumbers = includeNumbers.checked;
  const addSymbols = includeSymbols.checked;
  const characterAmount = characterAmountNumber.value;
  const password = generatePassword(
    addUperCase,
    addNumbers,
    addSymbols,
    characterAmount
  );
  passwordDisplay.innerText = password;
});
//generate password
function generatePassword(
  addUperCase,
  addNumbers,
  addSymbols,
  characterAmount
) {
  let charCodes = LOWERCASE_CHAR_CODE;
  if (addUperCase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODE);
  if (addNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODE);
  if (addSymbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODE);
  const passwordCharactors = [];
  for (let i = 0; i < characterAmount; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharactors.push(String.fromCharCode(characterCode));
  }
  return passwordCharactors.join("");
}

function arrayFromLowertoHeigher(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

function syncValues(e) {
  const value = e.target.value;
  characterAmountNumber.value = value;
  characterAmountRange.value = value;
}

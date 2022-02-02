function encodeAndDecodeMessages() {
    let textAreas = document.querySelectorAll('#main textarea');
    let inputTextArea = textAreas[0];
    let outputTextArea = textAreas[1];

    let buttons = document.querySelectorAll('#main button');
    let encodeButton = buttons[0];
    let decodeButton = buttons[1];

    encodeButton.addEventListener('click', encodeAndSendMessage);

    function encodeAndSendMessage(e) {
        let encodedMessageInASCII = [];
        let message = inputTextArea.value;
        for (let index = 0; index < message.length; index++) {
            let letterInASCI = message[index].charCodeAt(0);
            let encodedLetter = letterInASCI + 1;
            encodedMessageInASCII.push(encodedLetter);

        }
        let encodedMessageInLetters = '';
        for (let index = 0; index < encodedMessageInASCII.length; index++) {
        let encodedLetter = String.fromCharCode(encodedMessageInASCII[index]);
        encodedMessageInLetters+=encodedLetter;       
        }

        outputTextArea.value = encodedMessageInLetters;
        inputTextArea.value = '';
    }

    decodeButton.addEventListener('click', decodeMessage);

    function decodeMessage(e) {
        let decodedMessage = '';
        let message = outputTextArea.value;
        for (let index = 0; index < message.length; index++) {
            let letterInASCII = message[index].charCodeAt(0);
            let decodedLetterInASCII = letterInASCII -1;
            let decodedLetter = String.fromCharCode(decodedLetterInASCII);
            decodedMessage += decodedLetter;
        }
        outputTextArea.value = decodedMessage;
    } 
}

//А ето и едно доста по функционамно решение (за мое съжаление чуждо - не ми идва такъв императивен подход)
// function encodeAndDecodeMessages() {
//     const [sendButton, recieveButton] = Array.from(document.querySelectorAll('button'));
//     const [sendArea, recieveArea] = Array.from(document.querySelectorAll('textarea'))

//     sendButton.addEventListener('click', send);
//     recieveButton.addEventListener('click', recieve);

//     function send(){
//         recieveArea.value = sendArea.value.split('')
//         .map(x => x.charCodeAt(0)+1)
//         .map(x => String.fromCharCode(x))
//         .join('');
//         sendArea.value ='';
//     }
//     function recieve(){
//         recieveArea.value = recieveArea.value.split('')
//         .map(x => x.charCodeAt(0)-1)
//         .map(x => String.fromCharCode(x))
//         .join('');
//     } 
// }

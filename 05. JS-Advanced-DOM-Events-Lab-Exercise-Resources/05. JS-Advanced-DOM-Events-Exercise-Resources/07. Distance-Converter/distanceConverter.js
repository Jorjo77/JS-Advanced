function attachEventsListeners() {
    let inputTextElement = document.getElementById('inputDistance');

    let outTextElement = document.getElementById('outputDistance');

    let convertButton = document.getElementById('convert');
    convertButton.addEventListener('click', convertDistance);

    function convertDistance(e) {
        let inputValue = Number(inputTextElement.value);
        let inputUnits = document.getElementById('inputUnits').value;
        let outputUnits = document.getElementById('outputUnits').value;

        let inputInMeters = 0;
        let result = 0;

        switch (inputUnits) {
            case 'km':
                inputInMeters = inputValue * 1000;
                break;
            case 'm':
                inputInMeters = inputValue;
                break;
            case 'cm':
                inputInMeters = inputValue * 0.01;
                break;
            case 'mm':
                inputInMeters = inputValue * 0.001;
                break;
            case 'mi':
                inputInMeters = inputValue * 1609.34;
                break;
            case 'yrd':
                inputInMeters = inputValue * 0.9144;
                break;
            case 'ft':
                inputInMeters = inputValue * 0.3048;
                break;
            case 'in':
                inputInMeters = inputValue * 0.0254;
                break;
        }

        switch (outputUnits) {
            case 'km':
                result = inputInMeters / 1000;
                break;
            case 'm':
                result = inputInMeters;
                break;
            case 'cm':
                result = inputInMeters * 100;
                break;
            case 'mm':
                result = inputInMeters* 1000;
                break;
            case 'mi':
                result = inputInMeters * 1609.34;
                break;
            case 'yrd':
                result = inputInMeters * 0.9144;
                break;
            case 'ft':
                result = inputInMeters * 0.3048;
                break;
            case 'in':
                result = inputInMeters * 0.0254;
                break;
        }
        outTextElement.value = result;
    }

}


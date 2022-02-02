function solve(httpObj) {

    validateMethod(httpObj);
    validateUri(httpObj);
    validateVersion(httpObj);
    validateMessage(httpObj);

    return httpObj;

    function validateMethod(httpObj) {
        let validValues = ['GET', 'POST', 'DELETE', 'CONNECT'];
        let propName = 'method';
        if (httpObj[propName] === undefined || 
            !validValues.includes(httpObj[propName])) {
            throw new Error('Invalid request header: Invalid Method.');
        }
    }

    function validateUri(httpObj) {
        let propName = 'uri';
        let uriRegex = /^\*$|^[a-zA-Z0-9\.]+$/;
        if (httpObj[propName] === undefined || 
            !uriRegex.test(httpObj[propName])) {
            throw new Error('Invalid request header: Invalid URI.');
        }
    }

    function validateVersion(httpObj) {
        let validValues = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
        let propName = 'version';
        if (httpObj[propName] === undefined || 
            !validValues.includes(httpObj[propName])) {
            throw new Error('Invalid request header: Invalid Version.');
        }
    }

    function validateMessage(httpObj) {
        let propName = 'message';
        let messageRegex = /^[^<>\\&'"]*$/;
        if (httpObj[propName] === undefined || 
            !messageRegex.test(httpObj[propName])) {
            throw new Error('Invalid request header: Invalid Message.');
        }
    }
}

try {
    console.log(solve({
        method: 'POST',
        uri: 'home.bash',
        version: 'HTTP/2.0'
    }));
} catch (e) {
    console.log(e.message);
};
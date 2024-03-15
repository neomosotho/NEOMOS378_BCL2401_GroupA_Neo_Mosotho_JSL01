function validateSyntax() {
    let input = pet_2015Forrest;
    // Validation logic goes here
    // let  = document.getElementById('petInput').value; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
   
    let validator = /^pet_\d{4}/test(input);

    let isValid = validator.test(input);

    let result;
    if (isValid) {
         result = 'Valid Syntax';

    } else {

    result = 'Invalid Syntax';
    }
    console.log(result);

            document.getElementById('result').innerText = result;
}


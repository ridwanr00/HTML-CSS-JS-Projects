const output = document.getElementById('output')

const directCalculate = (event) => {
    if (event.key == "Enter") {
        event.preventDefault()
        let operation = output.value;
        operation = operation.replace("=", "");
        const result = math.evaluate(operation);
        output.value = result
    }
}

const removeAll = () => {
    output.value = ''
}

const operations = (value) => {
    output.value += value
}

const backspace = () => {
    let value = output.value.split('')
    value.splice(-1)
    output.value = value.join('')
}

const numbers = (value) => {
    output.value += value
}

const equals = () => {
    let operation = output.value;
    operation = operation.replace("=", "");
    const result = math.evaluate(operation);
    output.value = result;
}
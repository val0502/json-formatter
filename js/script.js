function formatJSON() {
    const input = document.getElementById('input').value;
    const output = document.getElementById('output');

    try {
        const jsonObject = JSON.parse(input);

        const formattedJSON = JSON.stringify(jsonObject, null, 4);

        output.textContent = formattedJSON;
        Prism.highlightElement(output);

        document.getElementById('copyBtn').style.display = 'inline-block';
    } catch (error) {
        output.textContent = `Invalid JSONJSON: ${error.message}`;
        document.getElementById('copyBtn').style.display = 'none';
    }
}

function copyToClipboard() {
    const formattedJSON = document.getElementById('output').textContent;
    
    navigator.clipboard.writeText(formattedJSON).then(() => {
        alert('Coppied to Clipboard!');
    }).catch(err => {
        console.error('ErrorError:', err);
    });
}

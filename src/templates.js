function greet(name) {
    console.log(`hello ${name}`.toUpperCase());
}
greet('bill');

function createEmail(to, from, subject, message) {
    console.log(`
        To: ${to}
        from: ${from}
        subject: ${subject}
        message: ${message}
    `);
}

createEmail('to', 'from', 'subject', 'message');

let name = 'bill';
console.log(upperName`Hello ${name}`);

function upperName(literals, ...values) {
    return literals[0] + value.toUpperCase();
}
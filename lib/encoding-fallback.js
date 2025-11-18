const { TextDecoder } = require("util");

function convert(value) {
    if (Buffer.isBuffer(value)) {
        return value;
    }

    if (value instanceof ArrayBuffer) {
        return Buffer.from(value);
    }

    if (typeof value === "string") {
        return Buffer.from(value);
    }

    try {
        const decoder = new TextDecoder();
        return Buffer.from(decoder.decode(value));
    } catch {
        return Buffer.from([]);
    }
}

module.exports = {
    convert,
};

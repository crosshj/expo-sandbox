export default dataURI = () => 'data:application/octet-stream;base64,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';
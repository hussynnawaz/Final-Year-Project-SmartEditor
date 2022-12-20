const fs = require('fs');
const pdf = require('pdf-parse');

// Read the PDF file into a buffer
const dataBuffer = fs.readFileSync('file.pdf');

// Parse the PDF buffer
pdf(dataBuffer).then(function(data) {
  // Extract the text from the PDF
  const text = data.text;

  // Create a new Word document
  const doc = new WordDocument();

  // Add the text to the document
  doc.addText(text);

  // Save the Word document
  doc.save('document.docx');
});
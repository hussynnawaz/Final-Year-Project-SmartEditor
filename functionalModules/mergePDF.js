const PDFMerge = require('pdf-merge');
 
const files = [
    `${__dirname}/1.pdf`,
    `${__dirname}/2.pdf`,
    {file: `${__dirname}/protected.pdf`, inputPw: '_SeCrEt_'}
];
 
//Buffer (Default)
PDFMerge(files)
.then((buffer) => {...});
 
//Stream
PDFMerge(files, {output: 'Stream'})
.then((stream) => {...});
 
//Save as new file
PDFMerge(files, {output: `${__dirname}/3.pdf`})
.then((buffer) => {...});
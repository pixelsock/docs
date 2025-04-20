// format-markdown.js
const fs = require('fs');
const { remark } = require('remark');
const remarkStringify = require('remark-stringify');

async function formatMarkdown() {
  try {
    // Process introduction.mdx specifically
    await processFile('./introduction.mdx');
    console.log('Successfully formatted introduction.mdx');
  } catch (error) {
    console.error('Error formatting markdown:', error);
    console.error(error.stack);
  }
}

async function processFile(filepath) {
  // Read the content of the file
  const content = fs.readFileSync(filepath, 'utf8');
  
  // Process with remark
  const result = await remark()
    .use(remarkStringify, {
      // Configure the ordered list style
      ordered: '.',
      incrementListMarker: true,
      listItemIndent: 'one',
      // Additional settings for consistency
      bullet: '*',
      emphasis: '_',
      strong: '**',
      rule: '-',
    })
    .process(content);
  
  // Write the processed content back to the file
  fs.writeFileSync(filepath, String(result));
}

formatMarkdown(); 
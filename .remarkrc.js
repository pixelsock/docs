module.exports = {
  settings: {
    // Control the ordered list marker style
    ordered: '.',         // Use period after numbers (1. instead of 1))
    incrementListMarker: true,  // Auto-increment list markers
    listItemIndent: 'one', // Use one space indent for list items
    // Additional settings for consistency
    bullet: '*',          // Use asterisks for bullet points
    emphasis: '_',        // Use underscores for emphasis
    strong: '**',         // Use double asterisks for strong emphasis
    rule: '-',            // Use hyphens for horizontal rules
  },
  plugins: [
    'remark-stringify', // For consistent Markdown formatting
  ]
}; 
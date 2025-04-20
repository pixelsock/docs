#!/usr/bin/env node

/**
 * This script finds all .mdx and .md files in the specified directories
 * and formats them using remark with the configuration from .remarkrc
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Directories to search for markdown files
const directories = ['.', 'essentials', 'api-reference'];

// Find all markdown files
function findMarkdownFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      
      if (entry.isDirectory()) {
        traverse(fullPath);
      } else if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Format all markdown files using remark
function formatMarkdownFiles() {
  for (const dir of directories) {
    if (fs.existsSync(dir)) {
      const files = findMarkdownFiles(dir);
      
      if (files.length > 0) {
        console.log(`Formatting ${files.length} markdown files in ${dir}...`);
        
        for (const file of files) {
          try {
            console.log(`Processing ${file}...`);
            execSync(`npx remark "${file}" --output`, { stdio: 'inherit' });
          } catch (error) {
            console.error(`Error processing ${file}:`, error.message);
          }
        }
      } else {
        console.log(`No markdown files found in ${dir}`);
      }
    } else {
      console.log(`Directory ${dir} does not exist, skipping...`);
    }
  }
}

formatMarkdownFiles(); 
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class HTMLBuilder {
  constructor(basePath = '.') {
    this.basePath = basePath;
  }

  async processIncludes(content) {
    const includeRegex = /<div\s+data-include="([^"]+)"><\/div>/g;
    let result = content;
    let match;

    while ((match = includeRegex.exec(content)) !== null) {
      const includePath = match[1];
      const fullPath = path.join(this.basePath, includePath);
      
      try {
        if (fs.existsSync(fullPath)) {
          console.log(`Loading component: ${includePath}`);
          let includeContent = fs.readFileSync(fullPath, 'utf8');
          
          // Recursively process includes in the loaded content
          includeContent = await this.processIncludes(includeContent);
          
          // Replace the include directive with the actual content
          result = result.replace(match[0], includeContent);
        } else {
          console.warn(`Warning: Component not found: ${includePath}`);
          result = result.replace(match[0], `<!-- Component not found: ${includePath} -->`);
        }
      } catch (error) {
        console.error(`Error loading component ${includePath}:`, error);
        result = result.replace(match[0], `<!-- Error loading: ${includePath} -->`);
      }
    }

    return result;
  }

  async build(inputFile, outputFile) {
    try {
      console.log(`Building ${inputFile} -> ${outputFile}`);
      
      // Read the main file
      const mainContent = fs.readFileSync(path.join(this.basePath, inputFile), 'utf8');
      
      // Process all includes
      const processedContent = await this.processIncludes(mainContent);
      
      // Remove include script since we don't need it anymore
      const finalContent = processedContent
        .replace('<script src="scripts/include.js"></script>', '')
        .replace(/data-included="[^"]+"/g, ''); // Clean up any leftover attributes
      
      // Write the output file
      fs.writeFileSync(path.join(this.basePath, outputFile), finalContent);
      
      console.log(`✅ Build complete! Generated ${outputFile}`);
      console.log(`📝 You can now deploy ${outputFile} as a single file`);
      
    } catch (error) {
      console.error('❌ Build failed:', error);
      process.exit(1);
    }
  }
}

// CLI usage
if (require.main === module) {
  const inputFile = process.argv[2] || 'index-new.html';
  const outputFile = process.argv[3] || 'index-built.html';
  
  console.log('🏗️  TacEval HTML Builder');
  console.log('========================');
  
  const builder = new HTMLBuilder();
  builder.build(inputFile, outputFile);
}

module.exports = HTMLBuilder; 
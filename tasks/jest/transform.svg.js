const fs = require('fs');

module.exports = {
  process: (_, filename) => {

    const vueCmp = {
      template: fs.readFileSync(filename)
    };

    return `module.exports = ${JSON.stringify(vueCmp)};`;
  }
};
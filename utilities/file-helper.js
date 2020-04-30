import fs from 'fs';
import path from 'path';

const getJsonFromFile = (filePath, fileName) => {
  const dir = path.join(process.cwd(), filePath);
  const file = fs.readFileSync(`${dir}/${fileName}`);

  const jsonData = JSON.parse(file);

  console.log('file:', jsonData);

  return jsonData;
};

export { getJsonFromFile };

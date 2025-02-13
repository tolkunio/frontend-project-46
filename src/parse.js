import fs from "fs";

const parseFile = (file) => {
    const data = fs.readFileSync(file, 'utf-8');
    return JSON.parse(data);
}
export default parseFile;

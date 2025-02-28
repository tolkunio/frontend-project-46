import setStylish from './stylish.js';
import setJson from './json.js';

const setFormatter = (data, format) => {
    switch (format) {
        case 'stylish':
            return setStylish(data);
        case 'json':
            return setJson(data);
        default:
            throw new Error(`Unknown format: '${format}'!`);
    }
};

export default setFormatter;

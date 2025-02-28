import _ from 'lodash';

const addMargin = (marginCount, marginSymbol = ' ') => _.repeat(marginSymbol, marginCount);

const getString = (item, depth) => {
    if (typeof item !== 'object' || item === null) {
        return `${item}`;
    }
    const str = Object.entries(item).map(([key, value]) => `${addMargin(depth * 4 - (-3))} ${key}: ${getString(value, depth + 1)}`);
    return `{\n${str.join('\n')}\n${addMargin(depth * 4)}}`;
};

const makeTree = (comparedData, depth = 1) => {
    const data = comparedData.map((item) => {
        if (item.status === 'nested') {
            return `${addMargin(depth * 4)}${item.name}: ${makeTree(item.children, depth + 1)}`;
        }
        if (item.status === 'deleted') {
            return `${addMargin(depth * 4 - 2)}- ${item.name}: ${getString(item.value1, depth)}`;
        }
        if (item.status === 'added') {
            return `${addMargin(depth * 4 - 2)}+ ${item.name}: ${getString(item.value2, depth)}`;
        }
        if (item.status === 'updated') {
            const str1 = `${addMargin(depth * 4 - 2)}- ${item.name}: ${getString(item.value1, depth)}`;
            const str2 = `${addMargin(depth * 4 - 2)}+ ${item.name}: ${getString(item.value2, depth)}`;
            return `${str1}\n${str2}`;
        }
        if (item.status === 'same') {
            return `${addMargin(depth * 4)}${item.name}: ${getString(item.value)}`;
        }
        return item;
    });
    return `{\n${data.join('\n')}\n${addMargin(depth * 4 - 4)}}`;
};

const setStylish = (comparedData) => makeTree(comparedData);
export default setStylish;

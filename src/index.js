import parser from './parser.js';
import _ from "lodash";
import setFormatter from "./formatters/index.js";

const compareData = (data1, data2) => {
  const uniqKeys = _.union(Object.keys(data1),Object.keys(data2));
  const sortedKeys = _.sortBy(uniqKeys);
  return sortedKeys.map((key)=>{
    if(!Object.hasOwn(data1,key)){
      return { key,type:'added',value:data2[key] }
    }
    if(!Object.hasOwn(data2,key)){
      return { key, type: 'deleted',value: data1[key] };
    }
    if(_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])){
      return { key, type: 'nested', children: compareData(data1[key],data2[key])};
    }
    if(_.isEqual(data1[key],data2[key])){
      return {key, type: 'same', value1:data1[key], value2: data2[key] };
    }
  })
}

const genDiff = (filepath1, filepath2,formatter = 'stylish') => {
  const data1 = parser(filepath1);
  const data2 = parser(filepath2);

  const comparedData = compareData(data1, data2);
  console.log('comparedData',comparedData);
  return setFormatter(comparedData, formatter);
};
export default genDiff;

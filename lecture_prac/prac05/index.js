/** 코드의 제목*/
const TITLE = 'JSDoc 사용하기';

/**
 * 원주율
 * @type {number}
 * @const
 */
const PI = '3.14';

/**
 * 
 * @param {*} x 
 * @param {*} y 
 * @returns 
 */
const add = (x, y) => x + y;

/**
 * @typedef {Object} PersonObj
 * @property {string} name
 * @property {number} age
 * @property {boolean} married
 */
/**
 * 
 * @param {string} name 
 * @param {number} age 
 * @param {boolean} married 
 * @returns {PersonObj}
 */
function getPersonObj(name,age,married){
  return {name,age,married};
}

const person1=getPersonObj("a","b","c");

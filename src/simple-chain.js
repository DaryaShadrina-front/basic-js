const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: '',

  getLength() {
    return this.result.split('~~').filter(Boolean).length;
  },

  addLink(value = '') {
    this.result += `( ${value} )~~`;
    return this;
  },

  removeLink(position) {
    const link = this.result.split('~~').filter(Boolean);
    if (position < 1 || typeof position !== 'number' || position > this.getLength()) {
      this.result = '';
      throw new Error('You can\'t remove incorrect link!');
    }
    link.splice(position - 1, 1);
    this.result = link.join('~~') + '~~';
    return this;
  },

  reverseChain() {
    const link = this.result.split('~~').filter(Boolean);
    this.result = link.reverse().join('~~') + '~~';
    return this;
  },

  finishChain() {
    const resultFinal = this.result.slice(0, -2);
    this.result = '';
    return resultFinal;
  }
};

module.exports = {
  chainMaker
};

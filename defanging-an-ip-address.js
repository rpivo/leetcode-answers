/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = (address) => {
  return address.replace(/\./g, '[.]');
};

const addr = '255.100.50.0';

console.log(defangIPaddr(addr));

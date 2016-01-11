import Calculator from '../src/Calculator';
import chai from 'chai';
let expect = chai.expect;
describe('Calculator', () => {
  it('should add two numbers', () => {
    const calculator = new Calculator();
    const sum = calculator.add(5, 2);
    expect(sum).to.be.equal(7);
  });

  it('should substract two numbers', () => {
    const calculator = new Calculator();
    const sub = calculator.sub(5, 2);
    expect(sub).to.be.equal(3);
  });
  it('should mul two numbers', () => {
    const calculator = new Calculator();
    const sub = calculator.mul(5, 2);
    expect(sub).to.be.equal(10);
  });
  it('should div two numbers', () => {
    const calculator = new Calculator();
    const sub = calculator.div(6, 2);
    expect(sub).to.be.equal(3);
  });
});

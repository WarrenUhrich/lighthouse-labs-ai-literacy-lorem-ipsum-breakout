

// const cart = [
//     {id: 1, name: 'SQL Book', price: 22.35},
//     {id: 2, name: 'JS Book', price: 18.99}
// ];

// calculateCartTotal(cart); // Expected: 41.34


const chai = require('chai');
const { calculateCartTotal } = require('./your-cart-total-file'); // Replace with the actual file path

const assert = chai.assert;

describe('calculateCartTotal', () => {
    it('should calculate the total for a basic scenario with two items in the cart', () => {
        const cart = [
            { id: 1, name: 'SQL Book', price: 22.35 },
            { id: 2, name: 'JS Book', price: 18.99 }
        ];

        const result = calculateCartTotal(cart);

        assert.equal(result, 41.34);
    });

    it('should return 0 for an empty cart', () => {
        const cart = [];

        const result = calculateCartTotal(cart);

        assert.equal(result, 0);
    });

    it('should calculate the total for a cart with a single item', () => {
        const cart = [{ id: 3, name: 'Python Book', price: 30.50 }];

        const result = calculateCartTotal(cart);

        assert.equal(result, 30.50);
    });

    it('should handle prices rounded to two decimal places', () => {
        const cart = [
            { id: 4, name: 'HTML Book', price: 15.75 },
            { id: 5, name: 'CSS Book', price: 27.89 }
        ];

        const result = calculateCartTotal(cart);

        assert.equal(result, 43.64);
    });

    it('should handle prices with more than two decimal places', () => {
        const cart = [
            { id: 6, name: 'React Book', price: 19.999 },
            { id: 7, name: 'Node.js Book', price: 25.123 }
        ];

        const result = calculateCartTotal(cart);

        assert.equal(result, 45.12);
    });
});


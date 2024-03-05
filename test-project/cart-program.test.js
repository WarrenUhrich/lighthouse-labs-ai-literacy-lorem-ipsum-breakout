const assert = require('chai').assert;

describe('calculateCartSubTotal', function() {
    it('should return 0 when the cart is empty', function() {
        const cart = [];
        assert.equal(calculateCartSubTotal(cart), 0);
    });

    it('should return the correct total when the cart has one item', function() {
        const cart = [{ id: 1, name: 'Item 1', price: 10.00 }];
        assert.equal(calculateCartSubTotal(cart), 10.00);
    });

    it('should return the correct total when the cart has multiple items', function() {
        const cart = [
            { id: 1, name: 'Item 1', price: 10.00 },
            { id: 2, name: 'Item 2', price: 20.00 },
            { id: 3, name: 'Item 3', price: 30.00 }
        ];
        assert.equal(calculateCartSubTotal(cart), 60.00);
    });

    it('should handle items with prices that have more than two decimal places', function() {
        const cart = [{ id: 1, name: 'Item 1', price: 10.1234 }];
        assert.equal(calculateCartSubTotal(cart), 10.12);
    });

    it('should handle large prices and totals', function() {
        const cart = [{ id: 1, name: 'Item 1', price: 999999999.99 }];
        assert.equal(calculateCartSubTotal(cart), 999999999.99);
    });

    it('should handle negative prices by treating them as zero', function() {
        const cart = [{ id: 1, name: 'Item 1', price: -10.00 }];
        assert.equal(calculateCartSubTotal(cart), 0);
    });
});

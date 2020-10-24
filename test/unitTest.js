const chai = require('chai');
const assert = chai.assert;
const functions = require('../functions')

describe('sum', function() {
    it('should return 8 when adding 4 and 4', function() {
        assert.equal(functions.sum(4,4), 8);
    });

    it('should return 0 when adding 8 and -8', function() {
        assert.equal(functions.sum(8,-8), 0);
    });

    it('should return 22.3 when adding 11 and 11.3', function() {
        assert.equal(functions.sum(11,11.3), 22.3);
    });

    it('should return -10 when adding 10 and -20', function() {
        assert.equal(functions.sum(10,-20), -10);
    });
});

describe('product', function() {
    it('should return 0 when multiplying 0 and 2', function() {
        assert.equal(functions.product(0,2), 0);
    });

    it('should return 4 when multiplying 2 and 2', function() {
        assert.equal(functions.product(2,2), 4);
    });

    it('should return 16.8 when multiplying 4.2 and 4', function() {
        assert.equal(functions.product(4.2,4), 16.8);
    });

    it('should return -4 when multiplying 2 and -2', function() {
        assert.equal(functions.product(2,-2), -4);
    });
});

describe('min', function() {
    it('should return 2 when two numbers are 2 and 2', function() {
        assert.equal(functions.min(2,2), 2);
    });

    it('should return 1 when two numbers are 2 and 1', function() {
        assert.equal(functions.min(2,1), 1);
    });

    it('should return -2 when two numbers are 1 and -2', function() {
        assert.equal(functions.min(1,-2), -2);
    });

    it('should return 0.1 when two numbers are 0.1 and 1.1', function() {
        assert.equal(functions.min(0.1,1.1), 0.1);
    });
});

describe('max', function() {
    it('should return 4 when two numbers are 4 and 4', function() {
        assert.equal(functions.max(4,4), 4);
    });

    it('should return 5.5 when two numbers are 4.5 and 5.5', function() {
        assert.equal(functions.max(4.5,5.5), 5.5);
    });

    it('should return -1 when two numbers are -1 and -5', function() {
        assert.equal(functions.max(-1,-5), -1);
    });
});

describe('head', function() {
    it('should return null if the array is empty []', function() {
        let arr = [];
        assert.isNull(functions.head(arr));
    });

    it('should return 4 if the array is [4,2,-8]', function() {
        let arr = [4,2,-8];
        assert.equal(functions.head(arr), 4);
    });

    it('should return World if the array is [World]', function() {
        let arr = ['World'];
        assert.equal(functions.head(arr), 'World');
    });

    it('should return -2 if the array is [-2,-1,5]', function() {
        let arr = [-2,-1,5];
        assert.equal(functions.head(arr), -2 );
    });
});

describe('tail', function() {
    it('should return null if the array is empty []', function() {
        let arr = [];
        assert.isNull(functions.tail(arr));
    });

    it('should return 8 if the array is [4,-2,8]', function() {
        let arr = [4,-2,8];
        assert.equal(functions.tail(arr), 8);
    });

    it('should return hello if the array is [hello]', function() {
        let arr = ['hello'];
        assert.equal(functions.tail(arr), 'hello');
    });

    it('should return -1 if the array is [7,-2,-1]', function() {
        let arr = [7,-2,-1];
        assert.equal(functions.tail(arr), -1 );
    });
});

describe('mid', function() {
    it('should return null if the array is empty []', function() {
        let arr = [];
        assert.isNull(functions.mid(arr));
    });

    it('should return 10 if the array is [5,10,15]', function() {
        let arr = [5,10,15];
        assert.equal(functions.mid(arr), 10);
    });

    it('should return ["Nag","San"] if the array is ["bob","Nag","San","Roy"]', function() {
        let arr = ["bob","Nag","San","Roy"];
        assert.deepEqual(functions.mid(arr), ["Nag","San"]);
    });
});

describe('total', function() {
    it('should return 0 if the array is empty []', function() {
        let arr = [];
        assert.equal(functions.total(arr), 0);
    });

    it('should return 10 if the array is [2,5,3]', function() {
        let arr = [2,5,3];
        assert.equal(functions.total(arr), 10);
    });

    it('should return -10 if the array is [-2,-5,-3]', function() {
        let arr = [-2,-5,-3];
        assert.equal(functions.total(arr), -10);
    });

    it('should return 11.5 if the array is [10,1.5]', function() {
        let arr = [10,1.5];
        assert.equal(functions.total(arr), 11.5 );
    });
});

describe('average', function() {
    it('should return null if the array is empty []', function() {
        let arr = [];
        assert.isNull(functions.average(arr));
    });

    it('should return 31.25 if the array is [5,15,45,60]', function() {
        let arr = [5,15,45,60];
        assert.equal(functions.average(arr), 31.25);
    });

    it('should return -6 if the array is [5,-10,-15]', function() {
        let arr = [5,-10,-15];
        assert.notDeepEqual(functions.average(arr), -6);
    });


    it('should return 0 if the array is [5,10,-15]', function() {
        let arr = [5,10,-15];
        assert.equal(functions.average(arr), 0 );
    });
});

describe('smallest', function() {
    it('should return null if the array is empty []', function() {
        let arr = [];
        assert.isNull(functions.smallest(arr));
    });

    it('should return 5 if the array is [100,5,15]', function() {
        let arr = [100,5,15];
        assert.equal(functions.smallest(arr), 5);
    });
    

    it('should return -15 if the array is [5,-2,-15]', function() {
        let arr = [5,-2,-15];
        assert.equal(functions.smallest(arr), -15 );
    });

    it('should return 1.5 if the array is [10.5,7,1.5]', function() {
        let arr = [10.5,7,1.5];
        assert.equal(functions.smallest(arr), 1.5 );
    });
});

describe('largest', function() {
    it('should return null if the array is empty []', function() {
        let arr = [];
        assert.isNull(functions.largest(arr));
    });

    it('should return 100 if the array is [-5,10,100]', function() {
        let arr = [-5,10,100];
        assert.equal(functions.largest(arr), 100);
    });
    

    it('should return -1 if the array is [-1,-100,-500]', function() {
        let arr = [-1,-100,-500];
        assert.equal(functions.largest(arr), -1 );
    });

    it('should return 1.2 if the array is [1.2,1.1,0]', function() {
        let arr = [1.2,1.1,0];
        assert.equal(functions.largest(arr), 1.2 );
    });
});

describe('merge', function() {
    it('should return null if the both arrays are empty []', function() {
        let arr1 = [];
        let arr2 = [];
        assert.isNull(functions.merge(arr1, arr2));
    });

    it('should return [2,-5,8,7] if the both arrays are empty []', function() {
        let arr1 = [];
        let arr2 = [];
        assert.isNull(functions.merge(arr1, arr2));
    });

    it('should return null if the both arrays are empty []', function() {
        let arr1 = [];
        let arr2 = [];
        assert.isNull(functions.merge(arr1, arr2));
    });

    it('should return [2,-5,8,7] if the both arrays are arr1[2,8] and arr2[-5,7]', function() {
        let arr1 = [2,8];
        let arr2 = [-5,7];
        assert.deepStrictEqual(functions.merge(arr1, arr2), [2,-5,8,7]);
    });

    it('should return [5,7] if the both arrays are arr1[] and arr2[-5,7]', function() {
        let arr1 = [];
        let arr2 = [5,7];
        assert.deepEqual(functions.merge(arr1, arr2), [5,7]);
    });

    it('should return [5,0,6] if the both arrays are arr1[5,6] and arr2[0]', function() {
        let arr1 = [5,6];
        let arr2 = [0];
        assert.notDeepEqual(functions.merge(arr1, arr2), [5,0,6]);
    });
});











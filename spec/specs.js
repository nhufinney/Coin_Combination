describe('coinCombination', function(){

    it("it gives one option for exact value of a coin", function(){
        expect(coinCombination(1)).to.eql([0,0,0,1]);
    });

    it("it gives one option for exact value of a coin", function(){
        expect(coinCombination(5)).to.eql([0,0,1,0]);
    });

    it("it gives at least one dime", function(){
        expect(coinCombination(12)).to.eql([0,1,0,2]);
    });

    it("it gives at least one nickle", function(){
        expect(coinCombination(18)).to.eql([0, 1, 1, 3]);
    });

    it("it gives at least one quarter", function(){
        expect(coinCombination(28)).to.eql([1,0, 0, 3]);
    });

    it("it gives quarter, dime, nickel, penny", function(){
        expect(coinCombination(42)).to.eql([1, 1, 1, 2]);
    });

});

describe("Mod4Exam", function() {
    before()
    it("GetSolution2691 must be a function",
        function() {
            assert.typeOf(GetSolution2691, "function");
        });
    it("GetSolution2691 must return a new array",
        function() {
            var res = GetSolution2691([]);
            assert.isArray(res);
        });
    it("GetSolution2691 must swaps min and max",
        function() {
            var res = GetSolution2691([1, 2, 3, 4, 5]);
            assert.equal(5, res[0]);
            assert.equal(1, res[4]);
        });
    it("GetSolution2692 must be a function",
        function() {
            assert.typeOf(GetSolution2691, "function");
        });
    it("GetSolution2692 must return a new array",
        function() {
            var res = GetSolution2691([]);
            assert.isArray(res);
        });
    it("GetSolution2692 must swaps max and last",
        function() {
            var res = GetSolution2691([1, 2, 3, 4, 5]);
            assert.equal(5, res[4]);
        });
});
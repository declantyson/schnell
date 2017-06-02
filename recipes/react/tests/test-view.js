/*
 *  React Schnell / Tests
 *  Declan Tyson
 *  v0.0.1
 *  02/06/2017
 */

var testViewSchema = [{
    "type" : "TestView",
    "data" : {
        "testItems" : [
            { "text" : "Test Item A"},
            { "text" : "Test Item B"},
        ]
    }
}];

describe('TestView', function() {

    it('should have two children', function () {
        renderViews(testViewSchema);
        var $component  = $('.component.testview'),
            testItem    = $component.find('p');

        assert(testItem.length === 2, "test items not found");
    });

});
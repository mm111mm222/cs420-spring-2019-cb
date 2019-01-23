var count = 0
exports.next = function() {count++; return count;}
exports.back = function() {count--; return count;}
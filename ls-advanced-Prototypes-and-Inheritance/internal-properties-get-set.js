let circle = {
    radius: 4
};

//Не можем при инициализиране на обект директно да сложим get и set, не е като при класовете, там може! 
Object.defineProperty(circle, 'diameter', {

    get: function(){
        return this.radius *2;
    },
    set: function(value) {
        this.radius = value/2;
    }
});

console.log(circle.diameter);
circle.diameter = 10;
console.log(circle.diameter);
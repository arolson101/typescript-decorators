var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function ClassDecorator(target) {
    console.log("ClassDecorator called on: ", target);
}
var ClassDecoratorExample = (function () {
    function ClassDecoratorExample() {
    }
    ClassDecoratorExample = __decorate([
        ClassDecorator, 
        __metadata('design:paramtypes', [])
    ], ClassDecoratorExample);
    return ClassDecoratorExample;
})();
function ClassDecoratorParams(param1, param2) {
    return function (target) {
        console.log("ClassDecoratorParams(" + param1 + ", '" + param2 + "') called on: ", target);
    };
}
var ClassDecoratorParamsExample = (function () {
    function ClassDecoratorParamsExample() {
    }
    ClassDecoratorParamsExample = __decorate([
        ClassDecoratorParams(1, "a"),
        ClassDecoratorParams(2, "b"), 
        __metadata('design:paramtypes', [])
    ], ClassDecoratorParamsExample);
    return ClassDecoratorParamsExample;
})();
function PropertyDecorator(target, propertyKey) {
    console.log("PropertyDecorator called on: ", target, propertyKey);
}
var PropertyDecoratorExample = (function () {
    function PropertyDecoratorExample() {
    }
    __decorate([
        PropertyDecorator, 
        __metadata('design:type', String)
    ], PropertyDecoratorExample.prototype, "name");
    return PropertyDecoratorExample;
})();
function MethodDecorator(target, propertyKey, descriptor) {
    console.log("MethodDecorator called on: ", target, propertyKey, descriptor);
}
var MethodDecoratorExample = (function () {
    function MethodDecoratorExample() {
    }
    MethodDecoratorExample.prototype.method = function () {
    };
    Object.defineProperty(MethodDecoratorExample.prototype, "method",
        __decorate([
            MethodDecorator, 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', []), 
            __metadata('design:returntype', void 0)
        ], MethodDecoratorExample.prototype, "method", Object.getOwnPropertyDescriptor(MethodDecoratorExample.prototype, "method")));
    return MethodDecoratorExample;
})();
function TypeRestrictedMethodDecorator(target, propertyKey, descriptor) {
    console.log("TypeRestrictedMethodDecorator called on: ", target, propertyKey, descriptor);
}
var TypeRestrictedMethodDecoratorExample = (function () {
    function TypeRestrictedMethodDecoratorExample() {
    }
    TypeRestrictedMethodDecoratorExample.prototype.method = function (num) {
        return 0;
    };
    Object.defineProperty(TypeRestrictedMethodDecoratorExample.prototype, "method",
        __decorate([
            TypeRestrictedMethodDecorator, 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', [Number]), 
            __metadata('design:returntype', Number)
        ], TypeRestrictedMethodDecoratorExample.prototype, "method", Object.getOwnPropertyDescriptor(TypeRestrictedMethodDecoratorExample.prototype, "method")));
    return TypeRestrictedMethodDecoratorExample;
})();
function StaticMethodDecorator(target, propertyKey, descriptor) {
    console.log("StaticMethodDecorator called on: ", target, propertyKey, descriptor);
}
var StaticMethodDecoratorExample = (function () {
    function StaticMethodDecoratorExample() {
    }
    StaticMethodDecoratorExample.staticMethod = function () {
    };
    Object.defineProperty(StaticMethodDecoratorExample, "staticMethod",
        __decorate([
            StaticMethodDecorator, 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', []), 
            __metadata('design:returntype', void 0)
        ], StaticMethodDecoratorExample, "staticMethod", Object.getOwnPropertyDescriptor(StaticMethodDecoratorExample, "staticMethod")));
    return StaticMethodDecoratorExample;
})();
function ParameterDecorator(target, propertyKey, parameterIndex) {
    console.log("ParameterDecorator called on: ", target, propertyKey, parameterIndex);
}
var ParameterDecoratorExample = (function () {
    function ParameterDecoratorExample() {
    }
    ParameterDecoratorExample.prototype.method = function (param1, param2) {
    };
    Object.defineProperty(ParameterDecoratorExample.prototype, "method",
        __decorate([
            __param(0, ParameterDecorator),
            __param(1, ParameterDecorator), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', [String, Number]), 
            __metadata('design:returntype', void 0)
        ], ParameterDecoratorExample.prototype, "method", Object.getOwnPropertyDescriptor(ParameterDecoratorExample.prototype, "method")));
    return ParameterDecoratorExample;
})();
//# sourceMappingURL=index.js.map
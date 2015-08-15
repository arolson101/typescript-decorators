
///////////////////////////////////////////////////////////////////////////////
// Class Decorator
function ClassDecorator(
    target: Function // The class the decorator is declared on
    ) {
    console.log("ClassDecorator called on: ", target);
}

@ClassDecorator
class ClassDecoratorExample {
}

// output:
// ClassDecorator called on:  function ClassDecoratorExample() {
//     }


///////////////////////////////////////////////////////////////////////////////
// Class Decorator with parameters
function ClassDecoratorParams(param1: number, param2: string) {
    return function(
        target: Function // The class the decorator is declared on
        ) {
        console.log("ClassDecoratorParams(" + param1 + ", '" + param2 + "') called on: ", target);
    }
}

@ClassDecoratorParams(1, "a")
@ClassDecoratorParams(2, "b")
class ClassDecoratorParamsExample {
}

// output:
// ClassDecoratorParams(2, 'b') called on:  function ClassDecoratorParamsExample() {
//     }
// ClassDecoratorParams(1, 'a') called on:  function ClassDecoratorParamsExample() {
//     }


///////////////////////////////////////////////////////////////////////////////
// Property Decorator
function PropertyDecorator(
    target: Object, // The prototype of the class
    propertyKey: string | symbol // The name of the property
    ) {
    console.log("PropertyDecorator called on: ", target, propertyKey);
}

class PropertyDecoratorExample {
    @PropertyDecorator
    name: string;
}

// output:
// PropertyDecorator called on:  {} name


///////////////////////////////////////////////////////////////////////////////
// Method Decorator
function MethodDecorator(
    target: Object, // The prototype of the class
    propertyKey: string, // The name of the method
    descriptor: TypedPropertyDescriptor<any>
    ) {
    console.log("MethodDecorator called on: ", target, propertyKey, descriptor);
}

class MethodDecoratorExample {
    @MethodDecorator
    method() {
    }
}

// output:
// MethodDecorator called on:  { method: [Function] } method { value: [Function],
//   writable: true,
//   enumerable: true,
//   configurable: true }


function TypeRestrictedMethodDecorator(
    target: Object, // The prototype of the class
    propertyKey: string, // The name of the method
    descriptor: TypedPropertyDescriptor<(num: number) => number>
    ) {
    console.log("TypeRestrictedMethodDecorator called on: ", target, propertyKey, descriptor);
}

class TypeRestrictedMethodDecoratorExample {
    @TypeRestrictedMethodDecorator
    method(num: number): number {
        return 0;
    }
}

// output:
// TypeRestrictedMethodDecorator called on:  { method: [Function] } method { value: [Function],
//   writable: true,
//   enumerable: true,
//   configurable: true }


///////////////////////////////////////////////////////////////////////////////
// Static Method Decorator
function StaticMethodDecorator(
    target: Function, // the function itself and not the prototype
    propertyKey: string | symbol, // The name of the static method
    descriptor: TypedPropertyDescriptor<any>
    ) {
    console.log("StaticMethodDecorator called on: ", target, propertyKey, descriptor);
}

class StaticMethodDecoratorExample {
    @StaticMethodDecorator
    static staticMethod() {
    }
}

// output:
// StaticMethodDecorator called on:  function StaticMethodDecoratorExample() {
//     } staticMethod { value: [Function],
//   writable: true,
//   enumerable: true,
//   configurable: true }


///////////////////////////////////////////////////////////////////////////////
// Parameter Decorator
function ParameterDecorator(
    target: Function, // The prototype of the class
    propertyKey: string | symbol, // The name of the method
    parameterIndex: number // The index of parameter in the list of the function's parameters
    ) {
    console.log("ParameterDecorator called on: ", target, propertyKey, parameterIndex);
}

class ParameterDecoratorExample {
    method(@ParameterDecorator param1: string, @ParameterDecorator param2: number) {
    }
}

// output:
// ParameterDecorator called on:  { method: [Function] } method 1
// ParameterDecorator called on:  { method: [Function] } method 0

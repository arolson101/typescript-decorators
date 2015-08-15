# Typescript Decorators Examples
Since there's no place that I've found to easily copy/paste function signatures whenever
I want to implement a decorator, I've composed this repo with code examples and links.
All credit goes to [this stackoverflow answer](http://stackoverflow.com/a/29837695/40877).

Note: decorators were implemented in typescript 1.5

#### Contents
- [Class Decorator](#class-decorator)
- [Property Decorator](#property-decorator)
- [Method Decorator](#method-decorator)
- [Static Method Decorator](#static-method-decorator)
- [Parameter Decorator](#parameter-decorator)


## Class Decorator
[Example use](http://blogs.msdn.com/b/typescript/archive/2015/04/30/announcing-typescript-1-5-beta.aspx): Using the metadata api to store information on a class.

No parameters:
```ts
function ClassDecorator(
    target: Function // The class the decorator is declared on
    ) {
    console.log("ClassDecorator called on: ", target);
}

@ClassDecorator
class ClassDecoratorExample {
}
```
    ClassDecorator called on:  function ClassDecoratorExample() {
     }
[[playground][1]]

With parameters:
```ts
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
```
    ClassDecoratorParams(2, 'b') called on:  function ClassDecoratorParamsExample() {
     }
    ClassDecoratorParams(1, 'a') called on:  function ClassDecoratorParamsExample() {
     }
[[playground][2]]


## Property Decorator
[Example use](http://stackoverflow.com/a/29706811/188246): Creating a @serialize("serializedName")
decorator and adding the property name the a list of properties to serialize.
```ts
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
```
    PropertyDecorator called on:  {} name
[[playground][3]]


## Method Decorator
```ts
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
```
    MethodDecorator called on:  { method: [Function] } method { value: [Function],
      writable: true,
      enumerable: true,
      configurable: true }
[[playground][4]]


Restrict to a certain function signature:
```ts
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
```
    TypeRestrictedMethodDecorator called on:  { method: [Function] } method { value: [Function],
      writable: true,
      enumerable: true,
      configurable: true }
[[playground][5]]


## Static Method Decorator
```ts
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
```
    StaticMethodDecorator called on:  function StaticMethodDecoratorExample() {
      }
[[playground][6]]


## Parameter Decorator
```ts
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
```
    ParameterDecorator called on:  { method: [Function] } method 1
    ParameterDecorator called on:  { method: [Function] } method 0
[[playground][7]]


  [1]:  http://www.typescriptlang.org/Playground/#src=function%20ClassDecorator(%0D%0A%20%20%20%20target%3A%20Function%20%2F%2F%20The%20class%20the%20decorator%20is%20declared%20on%0D%0A%20%20%20%20)%20%7B%0D%0A%20%20%20%20console.log(%22ClassDecorator%20called%20on%3A%20%22%2C%20target)%3B%0D%0A%7D%0D%0A%0D%0A%40ClassDecorator%0D%0Aclass%20ClassDecoratorExample%20%7B%0D%0A%7D
  [2]:  http://www.typescriptlang.org/Playground/#src=function%20ClassDecoratorParams(param1%3A%20number%2C%20param2%3A%20string)%20%7B%0D%0A%20%20%20%20return%20function(%0D%0A%20%20%20%20%20%20%20%20target%3A%20Function%20%2F%2F%20The%20class%20the%20decorator%20is%20declared%20on%0D%0A%20%20%20%20%20%20%20%20)%20%7B%0D%0A%20%20%20%20%20%20%20%20console.log(%22ClassDecoratorParams(%22%20%2B%20param1%20%2B%20%22%2C%20'%22%20%2B%20param2%20%2B%20%22')%20called%20on%3A%20%22%2C%20target)%3B%0D%0A%20%20%20%20%7D%0D%0A%7D%0D%0A%0D%0A%40ClassDecoratorParams(1%2C%20%22a%22)%0D%0A%40ClassDecoratorParams(2%2C%20%22b%22)%0D%0Aclass%20ClassDecoratorParamsExample%20%7B%0D%0A%7D
  [3]:  http://www.typescriptlang.org/Playground/#src=function%20PropertyDecorator(%0D%0A%20%20%20%20target%3A%20Object%2C%20%2F%2F%20The%20prototype%20of%20the%20class%0D%0A%20%20%20%20propertyKey%3A%20string%20%7C%20symbol%20%2F%2F%20The%20name%20of%20the%20property%0D%0A%20%20%20%20)%20%7B%0D%0A%20%20%20%20console.log(%22PropertyDecorator%20called%20on%3A%20%22%2C%20target%2C%20propertyKey)%3B%0D%0A%7D%0D%0A%0D%0Aclass%20PropertyDecoratorExample%20%7B%0D%0A%20%20%20%20%40PropertyDecorator%0D%0A%20%20%20%20name%3A%20string%3B%0D%0A%7D
  [4]:  http://www.typescriptlang.org/Playground/#src=function%20MethodDecorator(%0D%0A%20%20%20%20target%3A%20Object%2C%20%2F%2F%20The%20prototype%20of%20the%20class%0D%0A%20%20%20%20propertyKey%3A%20string%2C%20%2F%2F%20The%20name%20of%20the%20method%0D%0A%20%20%20%20descriptor%3A%20TypedPropertyDescriptor%3Cany%3E%0D%0A%20%20%20%20)%20%7B%0D%0A%20%20%20%20console.log(%22MethodDecorator%20called%20on%3A%20%22%2C%20target%2C%20propertyKey%2C%20descriptor)%3B%0D%0A%7D%0D%0A%0D%0Aclass%20MethodDecoratorExample%20%7B%0D%0A%20%20%20%20%40MethodDecorator%0D%0A%20%20%20%20method()%20%7B%0D%0A%20%20%20%20%7D%0D%0A%7D
  [5]:  http://www.typescriptlang.org/Playground/#src=function%20TypeRestrictedMethodDecorator(%0D%0A%20%20%20%20target%3A%20Object%2C%20%2F%2F%20The%20prototype%20of%20the%20class%0D%0A%20%20%20%20propertyKey%3A%20string%2C%20%2F%2F%20The%20name%20of%20the%20method%0D%0A%20%20%20%20descriptor%3A%20TypedPropertyDescriptor%3C(num%3A%20number)%20%3D%3E%20number%3E%0D%0A%20%20%20%20)%20%7B%0D%0A%20%20%20%20console.log(%22TypeRestrictedMethodDecorator%20called%20on%3A%20%22%2C%20target%2C%20propertyKey%2C%20descriptor)%3B%0D%0A%7D%0D%0A%0D%0Aclass%20TypeRestrictedMethodDecoratorExample%20%7B%0D%0A%20%20%20%20%40TypeRestrictedMethodDecorator%0D%0A%20%20%20%20method(num%3A%20number)%3A%20number%20%7B%0D%0A%20%20%20%20%20%20%20%20return%200%3B%0D%0A%20%20%20%20%7D%0D%0A%7D
  [6]:  http://www.typescriptlang.org/Playground/#src=function%20StaticMethodDecorator(%0D%0A%20%20%20%20target%3A%20Function%2C%20%2F%2F%20the%20function%20itself%20and%20not%20the%20prototype%0D%0A%20%20%20%20propertyKey%3A%20string%20%7C%20symbol%2C%20%2F%2F%20The%20name%20of%20the%20static%20method%0D%0A%20%20%20%20descriptor%3A%20TypedPropertyDescriptor%3Cany%3E%0D%0A%20%20%20%20)%20%7B%0D%0A%20%20%20%20console.log(%22StaticMethodDecorator%20called%20on%3A%20%22%2C%20target%2C%20propertyKey%2C%20descriptor)%3B%0D%0A%7D%0D%0A%0D%0Aclass%20StaticMethodDecoratorExample%20%7B%0D%0A%20%20%20%20%40StaticMethodDecorator%0D%0A%20%20%20%20static%20staticMethod()%20%7B%0D%0A%20%20%20%20%7D%0D%0A%7D
  [7]:  http://www.typescriptlang.org/Playground/#src=function%20ParameterDecorator(%0D%0A%20%20%20%20target%3A%20Function%2C%20%2F%2F%20The%20prototype%20of%20the%20class%0D%0A%20%20%20%20propertyKey%3A%20string%20%7C%20symbol%2C%20%2F%2F%20The%20name%20of%20the%20method%0D%0A%20%20%20%20parameterIndex%3A%20number%20%2F%2F%20The%20index%20of%20parameter%20in%20the%20list%20of%20the%20function's%20parameters%0D%0A%20%20%20%20)%20%7B%0D%0A%20%20%20%20console.log(%22ParameterDecorator%20called%20on%3A%20%22%2C%20target%2C%20propertyKey%2C%20parameterIndex)%3B%0D%0A%7D%0D%0A%0D%0Aclass%20ParameterDecoratorExample%20%7B%0D%0A%20%20%20%20method(%40ParameterDecorator%20param1%3A%20string%2C%20%40ParameterDecorator%20param2%3A%20number)%20%7B%0D%0A%20%20%20%20%7D%0D%0A%7D

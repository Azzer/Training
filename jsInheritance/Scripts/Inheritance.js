﻿function inherit_A( Child, Parent)
{
    var F = function () { };
    F.prototype = Parent.prototype;

    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.super = Parent.prototype;
}
function inherit_B(Child, Parent)
{
    var F = function () { };
    F.prototype = Parent.prototype;
    var f = new F();
    
    for (var prop in Child.prototype) f[prop] = Child.prototype[prop];
    Child.prototype = f;
    Child.prototype.super = Parent.prototype;
}

function inherit_C(Child, Parent)
{
    var F = function () { };
    F.prototype = Parent.prototype;
    var f = new F();

    for (var prop in Child.prototype) f[prop] = Child.prototype[prop];
    Child.prototype = f;
    Child.prototype[Parent.prototype.__class_name] = Parent.prototype;
}


function inhertit_multiple(child)
{
    
    for( var i = 1; i < arguments.length; ++i )
    {
       var parent = arguments[i]
       for (var prop in parent.prototype)
       {
           if (!child.prototype[prop]) child.prototype[prop] = parent.prototype[prop];
       }
       child.prototype[parent.prototype.__class_name] = parent.prototype;
    }
}
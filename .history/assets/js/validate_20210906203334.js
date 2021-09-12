
function Validator(options) {
    var formElement=document.querySelector(options.form)
    
    if (formElement){
        options.rules.forEach(function(rule){
            var inputElement=formElement.querySelector(rule.selector)
            if (inputElement){
                inputElement.onblur=function(){
                     console.log('blur')
                }
            }
        })
    }
}


Validator.isRequired=function(selector){
    return {
            selector:selector,
            test:function(value) {
                return value ? undefined : value.
            }
    }
}
Validator.isEmail=function(selector){
    return {
        selector:selector,
        test:function () {

        }
    }
}

function Validator(options) {
    var formElement=document.querySelector(options.form)
    
    if (formElement){
        options.rules.forEach(function(rule){
            var inputElement=formElement.querySelector(rule.selector)
            var errorElement=inputElement.parentElement.querySelector(rule.)
            if (inputElement){
                inputElement.onblur=function(){
                     var errorMessage=rule.test(inputElement.value)
                     if (errorMessage){

                     }
                }
            }
        })
    }
}


Validator.isRequired=function(selector){
    return {
            selector:selector,
            test:function(value) {
                return value.trim() ? undefined : 'Vui lòng nhập trường này'
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
var person = (function() {
    var pii = {
      name: "John Doe",
      ssn: "123-45-6789"
    };
    
    return {
      getName: function() {
        return pii.name;
      }
    };
  })();
  
  console.log(person.getName()); // prints "John Doe"
  console.log(person.pii); // prints "undefined"
  console.log(person.ssn); // prints "undefined"
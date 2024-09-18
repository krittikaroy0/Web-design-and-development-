// object
const person = {
    firstName: "krittika",
    lastName: "Roy",
    dob: "29-10-2001",
    occupation: "Student",

    fullName: function(){
        // console.log("I am a Expression Function. !");
        return `My name is: ${this.firstName} ${this.lastName}`;
    }
}
console.log(person.firstName);
console.log(person.fullName());

/* Demo purposes only */
$(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );


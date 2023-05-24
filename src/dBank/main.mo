import Debug "mo:base/Debug";
// actor {
//   public func greet(name : Text) : async Text {
//     return "Hello, " # name # "!";
//   };
// };

// import Debug
actor Dbank {
  var currentValue = 300;
  currentValue := 100;

  Debug.print("Hello");
  Debug.print(debug_show (currentValue));

};

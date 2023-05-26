import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Time "mo:base/Time";
import Float "mo:base/Float";





actor Dbank {
  stable var currentValue: Float = 300;
  currentValue := 100;
  stable var startTime = Time.now();

  Debug.print("Hello");
  Debug.print(debug_show (currentValue));

 public func topUp(amount : Float){
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public query func withdraw(amount: Float): async Float{
    currentValue -= amount;
    Debug.print(debug_show(currentValue));
    return currentValue;
  };

  public query func total (): async Float{
    return currentValue;
  };

  public func compound(){
    let currentTime = Time.now();
    let timeElapsedNS = currentTime - startTime;
    let timeElapsedS = timeElapsedNS / 1000000000;
    currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedS));
    startTime := Time.now();
  }
};

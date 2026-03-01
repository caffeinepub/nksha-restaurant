import Text "mo:core/Text";
import List "mo:core/List";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";

actor {
  type RestaurantInfo = {
    name : Text;
    address : Text;
    phone : Text;
    instagramUrl : Text;
  };

  type ContactInquiry = {
    name : Text;
    email : Text;
    message : Text;
  };

  let restaurantInfo : RestaurantInfo = {
    name = "Nksha Restaurant";
    address = "123 Luxury St, Uptown City";
    phone = "+1234567890";
    instagramUrl = "https://instagram.com/nkshadefine";
  };

  let contactInquiries = List.empty<(Principal, ContactInquiry)>();

  public query ({ caller }) func getRestaurantInfo() : async RestaurantInfo { restaurantInfo };

  public shared ({ caller }) func submitContactInquiry(name : Text, email : Text, message : Text) : async () {
    let inquiry : ContactInquiry = {
      name;
      email;
      message;
    };
    contactInquiries.add((caller, inquiry));
  };
};

import { Inventar } from '/imports/api/inventar/items.js';
import { Meteor } from 'meteor/meteor';
import "./inventar.html";
import RaisedButton from 'material-ui/RaisedButton';

// OKAY
// if(Meteor.isClient){
//   console.info("we are in the isClient");
// }

Template.inventar.onCreated(function(){
  Meteor.subscribe("inventar.all");
}); // on created

Template.inventar.helpers({
  inventar(){
    // console.log("User info: ", Meteor.userId());
    // console.log("User info: ", Meteor.user());
    // console.log("User info: ", Meteor.users);
    return Inventar.find({});
  },
}); // helpers

Template.inventar.events({
  "submit .inventar-add"(event){
    event.preventDefault();
    console.log("here is the info on form event: ", event);

    const target = event.target;
    const nume = target.inventarName;
    const qty = target.inventarQty;
    const locatia = target.inventarLocation;
    // const data = moment(target.dataCumparare.value).format('DD/MM/YYYY');
    const data = moment(target.dataCumparare.value).format('DD-MMM-YYYY');
    const warranty = target.warranty;
    const functionalityPoints = target.functionalityPoints;

    console.info("Obj: ", nume.value);
    console.info("Buc: ", qty.value);
    console.info("Locatia: ", locatia.value);
    console.info("Data: ", data);
    console.info("Garantie: ", warranty.value);
    console.info("functionalityPoints: ", functionalityPoints.value);

    Meteor.call("inventar.insert", nume.value, Number(qty.value), locatia.value, data, Number(warranty.value), function(error, result){
      if(error){
        console.log("error", error);
      } // if error
      if(result){
        //nume.value = "";
        //qty.value = "";
        //locatia.value = "";
      } // if result is OKAY
    });//Meteor.call function
  } //"submit .inventar-add(event)"
}); //Template.inventar.events

// Template.cautaInInventar.onCreated(function(){
//   Meteor.subscribe("inventar.all");
// });
//
// Template.cautaInInventar.helpers({
//   cautaInInventar: function(){
//     console.info("we are in HELPER-Ul inventar.search");
//     // return Inventar.findOne({inventarName:"biciclete"});
//     return Inventar.find({inventarName: numeCautat});
//
//   }
// });
//
// const numeCautat = "";
//
// Template.cautaInInventar.events({
//   "submit .inventar-cauta"(e){
//     e.preventDefault();
//     console.log("here is the info on SEARCH form event: ", event);
//
//     const target = e.target;
//     const numeCautat = target.inventarCauta;
//     console.info("Obj: ", numeCautat.value);
//
//     // Meteor.call("inventar.search", numeCautat.value, function(error, result){
//     //   if(error){
//     //     console.log("error", error);
//     //   } // if error
//     //   if(result){
//     //     //nume.value = "";
//     //     //qty.value = "";
//     //     //locatia.value = "";
//     //   } // if result is OKAY
//     // });//Meteor.call function
//
//   }
// });

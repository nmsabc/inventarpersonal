import { Inventar } from '/imports/api/inventar/items.js';
import { Meteor } from 'meteor/meteor';
import "./inventar.html";

Template.inventar.onCreated(function(){
  Meteor.subscribe("inventar.all");
}); // on created

Template.inventar.helpers({
  inventar(){
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

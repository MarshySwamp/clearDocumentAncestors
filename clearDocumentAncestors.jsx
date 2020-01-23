// https://forums.adobe.com/thread/290238
// https://forums.adobe.com/thread/1880847
#target bridge // let EntendScript know what app the script is for

clearDocumentAncestors = {};// create an object

clearDocumentAncestors.execute = function(){// create a method for that object

  var sels = app.document.selections;// store the array of selected files

  for (var i = 0; i < sels.length; i++){//loop though that array

    var md = sels[i].synchronousMetadata;// get the metadata for the file

     md.namespace = "http://ns.adobe.com/photoshop/1.0/";// set the namespace

     md.DocumentAncestors = " ";//set the porperty

  }

}

// this script only works in bridge

if (BridgeTalk.appName == "bridge"){

  //creage the munuItem

  var menu = MenuElement.create( "command", "Clear DocumentAncestors in metadata", "at the end of Tools");

  menu.onSelect = clearDocumentAncestors.execute;

}

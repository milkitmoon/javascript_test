
function displayInformation() {
    for(var i=0; i<library.length; i++) {
        if(library[i].readingStatus == true) {
            console.log(readBook(library[i]));
        } else {
            console.log(unreadBook(library[i]));
        }
    }
}

function readBook(libraryEle) {
    return "Already read '"+libraryEle.title+"' by "+libraryEle.author+".";
}

function unreadBook(libraryEle) {
    return "You still need to read '"+libraryEle.title+"' by "+libraryEle.author+".";
}

var library = [
   {
       title: 'Bill Gates',
       author: 'The Road Ahead',
       readingStatus: true
   },
   {
       title: 'Steve Jobs',
       author: 'Walter Isaacson',
       readingStatus: true
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       readingStatus: false
   }
];

displayInformation();

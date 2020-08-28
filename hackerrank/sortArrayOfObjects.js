function sortLibrary() {

/*
    library.sort(function(a, b) {
        return ((a.title < b.title) ? -1 : ((a.title > b.title) ? 1 : 0));
    })
*/
    console.log(library.sort(sorters.title));
}

var sorters = {
    author : function(a,b) {
        return ((a.author < b.author) ? -1 : ((a.author > b.author) ? 1 : 0));
    },
    title : function(a,b) {
        return ((a.title < b.title) ? -1 : ((a.title > b.title) ? 1 : 0));
    },
    libraryID : function(a,b) {
        return (a.libraryID - b.libraryID);
    }
}

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        libraryID: 1254
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        libraryID: 3245
    }
];

sortLibrary();

function generateNewFolderName(existingFolders) {
    existingFolders.push('New Folder');

    var changeResult = existingFolders.reduce(
        function(result, v) {
            if(result.includes(v)) {
                result.push('New Folder ('+(result.length+1)+')');
            } else {
                result.push('New Folder')
            }


            return result;
        }, []);

    return changeResult.pop();
}
  
console.log(generateNewFolderName(["New Folder", "New Folder (2)"]));
//console.log(generateNewFolderName(["New Folder"]));
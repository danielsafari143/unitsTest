function capital (arg){
    let newString = arg.replace('s',arg.charAt(0).toUpperCase());
    return newString;
}

module.exports = capital;
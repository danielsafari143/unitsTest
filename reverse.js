reverseString = (string) => {
    let tab = string.split("");
    tab.reverse();
    return tab.join("");
}
module.exports = reverseString;
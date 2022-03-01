/**
 * Changes the first letter of every word to an upper case character
 * @param str
 */
export const titlize = (str: string) => {
    let words = str.includes(" ") ? str.split(" ") : str.split("_");
    let cappedWords = words.map((w) => {
        return w[0].toUpperCase() + w.slice(1);
    });

    return cappedWords.join(" ");
}

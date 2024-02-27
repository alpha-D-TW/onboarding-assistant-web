export const indexToWord = (number: number) => {
    if (number < 0 || number > 25) {
        return "Invalid index";
    }
    return String.fromCharCode(65 + number);
}

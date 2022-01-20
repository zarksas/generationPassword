function passwordGenerator() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const array = letters.split('');
    array.sort(() => Math.random() - 0.5);
    return array.join('');


}
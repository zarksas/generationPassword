function passwordGenerator(number) {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (number < 5 || isNaN(number)) {
        console.log('Ошибка')
    } else {
    const array = letters.split('', number);
    array.sort(() => Math.random() - 0.5);
    
    return array.join('');
    }

}
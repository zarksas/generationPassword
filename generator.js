function passwordGenerator(number, complexity) {
    let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let num = '0123456789';
    let symbol = '!#$%&()*+,-./:;<=>?@[\]^_{|}~';
    
    if (complexity === 'easy') {
        letters;
    } else if (complexity === 'medium') {
    letters = num + letters;
    } else if (complexity === 'hard') {
    letters = symbol + letters + num;
    }

    if (number < 5 || isNaN(number)) {
        console.log('Ошибка'); 
    } else {
      
        const array = letters.split('', number);
        array.sort(() => Math.random() - 0.5);
        return array.join('');
    }
}
    
    
    

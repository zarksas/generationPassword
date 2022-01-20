function passwordGenerator(number, complexity, count = 1) {
    let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let num = '0123456789';
    let symbol = '!#$%&()*+,-./:;<=>?@[\]^_{|}~';
    let passwordArr = [];

    
    if (complexity === 'easy') {
        letters;

    } else if (complexity === 'medium') {
        letters = num + letters;
        
    } else if (complexity === 'hard') {
        letters = symbol + letters + num;
    }

    if (number < 5 || isNaN(number) || count < 1 || isNaN(count)) {
        console.log('Ошибка'); 
    
    } else {
      
        let array = letters.split('');
        
       for (let i = 0; i < count; i++) {
       
        array.sort(() => Math.random() - 0.5);

        passwordArr.push(array.join('').substr(0, number));
      }
    }
    const uniqueSet = new Set(passwordArr);

    const newPasswords = [...uniqueSet];

    return newPasswords;
}
    
    
    

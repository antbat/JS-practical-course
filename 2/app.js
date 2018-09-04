/**
 * string validator
 * string contains only two type of character '{' and '}'
 * "{{}}" valid ,
 * "{{}" invalid,
 * "{}{}{}" valid,
 * "}{}{" invalid,
 * "{{}{}{}}" valid;
 */

function validation(x){
    // последовательно просмотреть все символы один  за другим
    // 1, 2, 3, 4, ....
    //
    // если у нас длина строки нечетная, тогда сразу invalid
    // введем счетчик и если { тогда мы его увеличиваем, если } тогда уменьшаем

    return true;
}

const validatedData = '{{}';

const isValid = validation(validatedData);

console.log(`"${validatedData}" is Valid ? "${isValid}"`);

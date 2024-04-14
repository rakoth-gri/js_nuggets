// Комбинация дефолтного и именнованного экспорта через оператор ';'
import SUPERSTORE, {obj, obj1} from "../modules/index.js"
import {getMin} from "../modules/utils.js"

console.log(getMin("STR"))

console.log(SUPERSTORE, obj, obj1);


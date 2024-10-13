module.exports = function toReadable (number) {
  
//массив где от 0 до 19
    const meaning1 = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
    'eighteen', 'nineteen'
    ]

// массив с круглыми числами (десятками)
    const meaning2 = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ]
// console.log(meaning1[3]) // проверила правильность отображения по индексу

    if (number < 20) {
        return meaning1[number]
    } else if (number < 100) {
        let ten = Math.floor(number / 10)
        let unit = number % 10
        return unit === 0 ? meaning2[ten] : `${meaning2[ten]} ${meaning1[unit]}`
    } else {
        let hundred = Math.floor (number / 100)
        let remainder = number % 100
        if (remainder === 0) {
            return `${meaning1[hundred]} hundred`
        } else {
            return`${meaning1[hundred]} hundred ${toReadable(remainder)}`
        }
    }
}
// console.log(toReadable(15))

module.exports = function toReadable (number) {
    let textNumber = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let desent = [ 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let houdred = 'hundred'
    if(number.toString().length === 1 ) {

        for(let i = 0; i < textNumber.length; i++){
            if(i === number){
                return textNumber[i]
            }
        }
    }
    else if (number.toString().length === 2) {

        if (parseInt(number.toString()[0]) !== 1) {
            if (parseInt(number.toString()[0]) === 2) {
                for (let i = 0; i < textNumber.length; i++) {
                    if (i === parseInt(number.toString()[1])) {
                        return i === 0 ?  desent[0] : `${desent[0]} ${textNumber[i]}`
                    }
                }
            } else if (parseInt(number.toString()[0]) === 3) {
                for (let i = 0; i < textNumber.length; i++) {
                    if (i === parseInt(number.toString()[1])) {
                        return i === 0 ?  desent[1] : `${desent[1]} ${textNumber[i]}`
                    }
                }
            } else if (parseInt(number.toString()[0]) === 4) {
                for (let i = 0; i < textNumber.length; i++) {
                    if (i === parseInt(number.toString()[1])) {
                        return i === 0 ?  desent[2] : `${desent[2]} ${textNumber[i]}`
                    }
                }
            } else if (parseInt(number.toString()[0]) === 5) {
                for (let i = 0; i < textNumber.length; i++) {
                    if (i === parseInt(number.toString()[1])) {
                        return i === 0 ?  desent[3] : `${desent[3]} ${textNumber[i]}`
                    }
                }
            }
            else if (parseInt(number.toString()[0]) === 6) {
                for (let i = 0; i < textNumber.length; i++) {
                    if (i === parseInt(number.toString()[1])) {
                        return i === 0 ?  desent[4] : `${desent[4]} ${textNumber[i]}`
                    }
                }
            }
            else if (parseInt(number.toString()[0]) === 7){
                for (let i = 0; i < textNumber.length; i++) {
                    if (i === parseInt(number.toString()[1])) {
                        return i === 0 ?  desent[5] : `${desent[5]} ${textNumber[i]}`
                    }
                }
            }
            else if (parseInt(number.toString()[0]) === 8) {
                for (let i = 0; i < textNumber.length; i++) {
                    if (i === parseInt(number.toString()[1])) {
                        return i === 0 ?  desent[6] : `${desent[6]} ${textNumber[i]}`
                    }
                }
            }
            else if (parseInt(number.toString()[0]) === 9) {
                for (let i = 0; i < textNumber.length; i++) {
                    if (i === parseInt(number.toString()[1])) {
                        return i === 0 ?  desent[7] : `${desent[7]} ${textNumber[i]}`
                    }
                }
            }
        } else if (parseInt(number.toString()[0]) === 1) {
            for(let i = 0; i < textNumber.length; i++){
                if(i === number){
                    return textNumber[i]
                }
            }
        }



    } else if (number.toString().length === 3){

        if(parseInt(number.toString()[0]) !== 0){



            for( let i = 0; i < textNumber.length; i++){
                let sto =`${textNumber[i]} ${houdred}`
                if(i === parseInt(number.toString()[0])) {
                    debugger
                    let num = ''
                    for(let i = 0; i < textNumber.length; i++){
                        if( i === parseInt(number.toString()[2])){
                            if(parseInt(number.toString()[1]) === 1) {
                                i = number.toString()[1] + number.toString()[2]
                                return num = `${sto} ${textNumber[i]}`
                            }
                            else if (parseInt(number.toString()[1]) === 0){
                                return i === 0 ?  sto  : `${sto} ${textNumber[i]}`
                            }
                            else if (parseInt(number.toString()[1]) === 2) {
                                return i === 0 ?  `${sto} ${desent[0]}` : `${sto} ${desent[0]} ${textNumber[i]}`
                            }
                            else if (parseInt(number.toString()[1]) === 3){
                                return i === 0 ?  `${sto} ${desent[1]}` : `${sto} ${desent[1]} ${textNumber[i]}`
                            }
                            else if (parseInt(number.toString()[1]) === 4){
                                return i === 0 ?  `${sto} ${desent[2]}` : `${sto} ${desent[2]} ${textNumber[i]}`
                            }
                            else if (parseInt(number.toString()[1]) === 5){
                                return i === 0 ?  `${sto} ${desent[3]}` : `${sto} ${desent[3]} ${textNumber[i]}`
                            }
                            else if (parseInt(number.toString()[1]) === 6){
                                return i === 0 ?  `${sto} ${desent[4]}` : `${sto} ${desent[4]} ${textNumber[i]}`
                            }
                            else if (parseInt(number.toString()[1]) === 7){
                                return i === 0 ?  `${sto} ${desent[5]}` : `${sto} ${desent[5]} ${textNumber[i]}`
                            }
                            else if (parseInt(number.toString()[1]) === 8){
                                return i === 0 ?  `${sto} ${desent[6]}` : `${sto} ${desent[6]} ${textNumber[i]}`
                            }
                            else if (parseInt(number.toString()[1]) === 9){
                                return i === 0 ?  `${sto} ${desent[7]}` : `${sto} ${desent[7]} ${textNumber[i]}`
                            }


                        }

                    }

                    return i !== 0 ?  `${textNumber[i]} ${houdred} ` :  parseInt(`${number.toString()[1]}${number.toString()[2]}`)
                }

            }

        }

    }


}

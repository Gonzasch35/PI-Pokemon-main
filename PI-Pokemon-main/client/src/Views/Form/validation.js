export const validation = (property, value, errors, setErrors) => {
    console.log(value)

    switch (property) {
        case 'name':

            if(value.length  < 2){
                return setErrors({...errors, name:'El nombre debe tener al menos 2 caracteres'})
            }else if(/\d/.test(value)) {
                return setErrors({...errors, name: 'El nombre no puede contener numeros'})
            } else return setErrors({...errors, name: ''})

        case 'hp':

            if(value < 1 || value > 999) {
               return setErrors({...errors, hp: 'Debes colocar un numero entre 1 y 999'})
            } else return setErrors({...errors, hp: ''})

        case 'attack':

            if(value === 0 || value > 999) {
               return setErrors({...errors, attack: 'Debes colocar un numero entre 1 y 999'})
            } else return setErrors({...errors, attack: ''})

        case 'defense':

            if(value === 0 || value > 999) {
               return setErrors({...errors, defense: 'Debes colocar un numero entre 1 y 999'})
            } else return setErrors({...errors, defense: ''})


        case 'types': 
            if(!value.length) {
                setErrors({...errors, types: 'Debes seleccionar al menos un tipo'})
            } else setErrors({...errors, types: ''})
        default:
            break;
    }

/*     if(!newPokemon.hp || newPokemon.hp === 0) {
        setErrors({...errors, hp: 'Debes colocar un numero mayor a 0'})
    } else if(newPokemon.hp > 999) {
        setErrors({...errors, hp: 'Debe ser un valor menor a 1000'})
    } else setErrors({...errors, hp: ''})

    if(!newPokemon.attack || newPokemon.attack === 0) {
        setErrors({...errors, attack: 'Debes colocar un numero mayor a 0'})
    } else if(newPokemon.attack > 999) {
        setErrors({...errors, attack: 'Debe ser un valor menor a 1000'})
    } else setErrors({...errors, attack: ''}) */
}

/* export const isValid = (errors, setIsValidCreated) => {
    console.log(errors);
    if(errors.name === '' &&  errors.hp === '' && errors.attack === '' &&  errors.types === '') {
        setIsValidCreated(true)
    } else setIsValidCreated(false)
} */



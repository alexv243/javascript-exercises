const sumAll = function(intOne, intTwo) {
    let array = [];

    if (!Number.isInteger(intOne) || !Number.isInteger(intTwo))
    {
        return "ERROR";
    }

    else if ((intOne || intTwo) < 0)
    {
        return "ERROR";
    }
    
    else if (intOne > intTwo)
    {
        for (let i = intOne; i >= intTwo; i--)
        {
            array.push(i);
        }  

        let sum = 0;

        for (let i = 0; i < array.length; i++)
        {
            sum += array[i];
        }

        return sum;
    }

    else if (intOne < intTwo)
    {
        for(let i = intTwo; i >= intOne; i--)
        {
            array.push(i);
        }

        let sum = 0;

        for (let i = 0; i < array.length; i++)
        {
            sum += array[i];
        }

        return sum;
    }
    

};

// Do not edit below this line
module.exports = sumAll;

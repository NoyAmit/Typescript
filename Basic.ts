import { ListFormat } from "typescript";

function getAverage() : number 
 {
    let sum : number = 0;
    let numbersArray: Array<number> = [1, 2, 3, 4]; 
    numbersArray.forEach(element => 
    {
        sum = sum + element;
    });
    let length : number = numbersArray.length;
    let Average : number = sum / length;
    return Average;
}

function getAmountOfPositive() : number 
{
    let positives : number = 0;
    let numbersArray: Array<number> = [1, 2, 3, 4, -1, -2]; 
    for (let index = 0; index < numbersArray.length; index++) 
    {
        if(index.valueOf() > 0)
        {
            positives++;
        }        
    }
    return positives;
}

function sortList(numbers : number[]) : void
{
    for (let index = 0; index < numbers.length; index++) 
    {
        if(numbers[index] > numbers[index + 1])
        {
            let num : number = 0;
            num = numbers[index] ;
            numbers[index] = numbers[index + 1] ;
            numbers[index + 1] = num ;
        }
    }
} 

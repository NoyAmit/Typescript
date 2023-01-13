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

function getAmountOfPositive(numbers : number[]) : number 
{
    let positives : number = 0;
    numbers.forEach(element => {
        if(element.valueOf() > 0)
        {
            positives++;
        }             
    });
    return positives;
}

function sortList(numbers : number[]) : number[]
{
   return numbers.sort();
} 

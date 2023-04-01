var value = 8099295285;
sum = 0;

while(value)
{
    sum += value % 10;
    value = Math.floor(value / 10);
}
let s = "";
for(var i = 1; i <= sum; i++)
{
    if(i % 12 == 0)
    s += "FizzBuzz ";
    else if(i % 3 == 0)
    s += "Fizz ";
    else if(i % 4 == 0)
    s += "Buzz ";
    else s += i + " ";
}
console.log(s);


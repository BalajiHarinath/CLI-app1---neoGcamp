const readlineSync = require("readline-sync");
const chalk = require("chalk");

const userName = readlineSync.question("Hi! What's your name?")

console.log(chalk.cyan("Welcome "+chalk.blue.bold(userName)+ " ! to a quiz on how well you know "+chalk.blue.bold("Balaji")));

let score = 0;
let highScore = 0;
let tryAgain = "1";
let num = 1;                             
while(tryAgain=="1")
{
  //play fuction
  const play = (question, answer)=>
  {
    const userAnswer = readlineSync.question(question);
    if(userAnswer === answer)
    {
      console.log(chalk.green("You are right!"));
      score++;
    }
    else
    {
      console.log(chalk.red("You are wrong!"));
    }
    console.log("current score is "+score);
    console.log("\n");
  }

  const questionsL1 = [
    {question : "How old is balaji?",
    answer : "23" },
    {question : "Where does balaji stay?",
    answer : "bangalore"},
    {question : "What is balaji's favourite color?",
    answer : "blue"},
    {question : "What is balaji's favourite food?",
    answer : "masala dosa"}
    ];

  const questionsL2 = [
    {question : "Which is balaji's favourite destination?",
    answer : "switzerland" },
    {question : "Where does balaji work?",
    answer : "mitc"},
    {question : "Where did balaji do his schooling?",
    answer : "sudarshan"},
    {question : "Where did balaji do his undergraduation?",
    answer : "bit"}
    ];

  const questionsL3 = [
    {question : "What is balaji's Nick name?",
    answer : "vishruth" },
    {question : "Which is balaji's favourite sport?",
    answer : "cricket"}
    ];

  console.log("\n");
  console.log("Level 1");
  console.log("\n");
  for(let i=0; i<questionsL1.length; i++)
  {
    play(questionsL1[i].question, questionsL1[i].answer);
  }

  if(score === 4)
  {
    console.log("\n");
    console.log("Congrats! now you are eligible to take up level 2");
    console.log("\n");
    console.log("Level 2");
    console.log("\n");

      for(let i=0; i<questionsL2.length; i++)
      {
        play(questionsL2[i].question, questionsL2[i].answer);
      }
  }
  else
  {
    console.log("\n");
    const req = 4-score
    console.log("You require "+req+" more point/s to unlock level 2");
  }

  if(score === 8)
  {
    console.log("\n");
    console.log("Congrats! now you are eligible to take up the final Level");
    console.log("\n");
    console.log("Final level");
    console.log("\n");23

      for(let i=0; i<questionsL3.length; i++)
      {
        play(questionsL3[i].question, questionsL3[i].answer);
      }
  }
  else if(score>=4 && score<8)
  {
    console.log("\n");
    const req = 8-score
    console.log("You require "+req+" more point/s to unlock the final level");
  }

  if(score === 10)
  {
    console.log("\n");
    console.log("You seem to be balaji's best friend!!! You have answered all the questions correctly \n");
  }

  console.log(chalk.blue.bgWhite("Your final score is "+chalk.bold(score)));
  console.log("\n");
  if(score>=highScore)
  {
    if(score === highScore)
    {
      console.log(chalk.yellow("Congrats! You have equalled your previous high score."));
    }
    else
    {
      console.log(chalk.yellow("Congrats! You have set a new high score."));
    }
    console.log("\n");
    highScore = score;
  }
  tryAgain = readlineSync.question(chalk.blue("Do you want to try again? \n If yes press else "+chalk.red("1") +"\n If you want to exit press "+ chalk.red("0")));
  console.log("\n");
  if(tryAgain=="1")
  {
    num++;
    console.log("------------------------------------------");
    console.log("attempt "+(num));
    console.log("\n");
    score=0;
  }
  else
  {
    console.log("Thank you for taking the quiz");
  }
}









//ex01 to ex04
// var readlineSync = require('readline-sync');
// var username = readlineSync.question('what is your name?');
// console.log('hi '+ username +' !'+' Welcome');

// //ex05 and ex06
// var score=0;
// var age = readlineSync.question('Is balaji older than 25 years?');
// if(age==='yes')
// {
//   console.log('You are wrong!');
// }
// else
// {
//   console.log('You are right!');
//   score++;
// }
// console.log('your score is '+score);

// //ex07
// function add(first,second)
// {
//   var sum = a+b;
//   return sum;
// }
// var a=3;
// var b=6;
// var ans=add(a,b);
// console.log('The sum is '+ans);

// //ex08
// function check(question, answer)
// {
//   var out = readlineSync.question(question);
//   if(out===answer)
//   {
//     console.log('You are right!');
//     score++;
//   }
//   console.log('your score is '+score);
// }
// var question=('Who is balajis favourite super hero?');
// var answer='superman';
// check(question, answer);

// //ex09
// for(var i=0; i<5; i++)
// {
//   console.log('Balaji');
// }

// //homework
// var string='';
// for(var i=0; i<5; i++)
// {
//   for(var j=0; j<=i; j++)
//   {
//     string+='*';
//   }
//   string+='\n';
// }
// console.log(string);

// //Bonus
// var string1='';
// for(var i=0; i<5; i++)
// {
//   for(var j=0; j<5-i; j++)
//   {
//     string1+='*';
//   }
//   string1+='\n';
// }
// console.log(string1);

// //ex10
// var items=['bread','milk','chocolate','biscuit','eggs'];
// var n=items.length;
// console.log(items[0]);
// console.log(items[2]);
// console.log(items[n-1]);
// console.log('\n');

// //ex11
// for(var i=0; i<items.length; i++)
// {
//   console.log(items[i]);
// }
// console.log('\n');

// //ex12
// var superman = {
//   name : 'superman',
//   power :'flight',
//   costumeColor : 'blue',
//   strength : 1000,
//   intelligence : 100,
// }

// var batman = {
//   name : 'batman',
//   power :'martial arts',
//   costumeColor : 'black',
//   strength : 100,
//   intelligence : 1000,
// }

// console.log(superman.power);
// console.log(batman.strength);
// console.log('\n');

// var superHeroes = [superman,batman];
// for(var i=0; i<superHeroes.length; i++)
// {
//   var currentSuperHero = superHeroes[i];
//   console.log(currentSuperHero.name);
//   console.log(currentSuperHero.power);
//   console.log(currentSuperHero.costumeColor);
//   console.log(currentSuperHero.strength);
//   console.log(currentSuperHero.intelligence);
//   console.log('\n');
// }
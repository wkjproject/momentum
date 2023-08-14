const quotes = [
  {
    quote:"실패는 성공의 어머니이다." ,
    author:"토마스 에디슨",
  },
  {
    quote:"컴퓨터 과학은 모든 것을 가능하게 하는 마법이 아니라, 모든 것을 가능하게 만드는 과정이다." ,
    author:"그레이스 호퍼",
  },
  {
    quote:"우리의 가장 큰 공헌은 기술 자체보다는 그 기술을 통해 사회를 어떻게 변화시키는지에 달려있다." ,
    author:"린더 앤더슨",
  },
  {
    quote:"코드는 언어이며, 우리는 그 언어를 사용하여 컴퓨터와 대화한다." ,
    author:"크리스토퍼 스트래치",
  },
  {
    quote:"당신이 얼마나 좋은 개발자가 되느냐보다는 얼마나 좋은 문제 해결자가 되느냐가 중요하다." ,
    author:"스티브 맥코넬",
  },
  {
    quote:"느리게 시작하더라도 멈추지 말라. 멈추지 않으면 빠르게 성장한다." ,
    author:"마트라스 자코브슨",
  },
  {
    quote:"좋은 코드는 문제를 해결하는 것뿐만 아니라, 누군가가 읽고 유지보수할 수 있는 코드이다." ,
    author:"더글라스 크락포드",
  },
  {
    quote:"만약 당신이 두려움을 느낀다면, 그것은 당신이成장하고 있다는 증거다." ,
    author:"스티븐 호킨",
  },
  {
    quote:"최고의 프로그래머는 언제나 더 나은 방법을 찾는 사람이다." ,
    author:"리누스 토르발스",
  },
  {
    quote:"코드를 작성할 때 마치 다른 사람이 이해하려고 노력하는 것처럼 작성하라. 실제로 그 사람은 당신이 몇 달 후의 당신일 수 있다." ,
    author:"월터 볼",
  },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random()* quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;
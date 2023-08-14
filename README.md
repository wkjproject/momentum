# momentum practice coding
+ 구글 크롬 확장기능 모멘텀 Javascript 연습 코딩
  <details>
    <summary>결과미리보기</summary>
      <img src="https://github.com/wkjproject/momentum/assets/139529566/ae33ee21-2369-4d22-a67b-5b160ca47524">
  </details>
# 개발기간
+ 2023.8.14
# 개발환경
+ VSCODE 1.80.1
+ GOOGLE CHROME 115.0.5790.110
# 사용된 기술 스택
+ HTML
+ CSS
+ JAVASCRIPT
# 주요기능
+ 날씨API를 활용한 사용자 위치 기준 날씨 표기
  <details>
    <summary>Javascript Code : weather.js</summary>
    
      const API_KEY = '7bf4a53e516602f25fcc32fde60ca283';
      function onGeoOk(position){
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        fetch(url).then(response => response.json()).then(data =>
          {
          const weather = document.querySelector('#weather span:nth-child(1)');
          const city = document.querySelector('#weather span:nth-child(2)');
          city.innerText = data.name;
          weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
        });
      }
      
      function onGeoError(){
        alert('cant find you')
      }
      
      navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)
  </details>
+ To Do List 와 Login 정보를 localstorage에 기록
  <details>
    <summary>Javascript Code : todo.js</summary>
    
      const toDoForm = document.querySelector("#todo-form");
      const toDoInput = toDoForm.querySelector('input');
      const toDoList = document.querySelector("#todo-list");
      
      const TODOS_KEY = "todos"
      
      let toDos = [];
      
      
      function saveTodos(){
        localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
      }
      
      function deleteTodo(event){
        const li = event.target.parentElement;
        toDos = toDos.filter((item) => item.id !== parseInt(li.id));
        li.remove();
        saveTodos();
      }
      
      function paintTodo(newTodo){
        const li = document.createElement("li");
        li.id = newTodo.id;
        const span = document.createElement("span");
        span.innerText = newTodo.text;
        const button = document.createElement("button");
        button.innerText = "X";
        button.addEventListener('click',deleteTodo);
      
        li.appendChild(span);
        li.appendChild(button);
      
        toDoList.appendChild(li);
      }
      
      
      function handleToDoUsbmit(event) {
        event.preventDefault();
        const newTodo = toDoInput.value;
        toDoInput.value="";
        const newTodoObj = {
          text:newTodo,
          id:Date.now(),
        }
        toDos.push(newTodoObj);
        paintTodo(newTodoObj);
        saveTodos();
      }
      
      
      toDoForm.addEventListener("submit",handleToDoUsbmit);
      
      const savedToDos = localStorage.getItem(TODOS_KEY);
      
      if(savedToDos !== null) {
        const parsedToDos = JSON.parse(savedToDos);
        toDos = parsedToDos;
        parsedToDos.forEach(paintTodo);
      };
  </details>
+ 새로고침 할 때 마다 사진과 명언이 랜덤하게 바뀜
  <details>
    <summary>Javascript Code : background.js & quotes.js</summary>

      //background.js
      const images = ["0.jpg","1.webp","2.jpg","3.jpg"];

      const chosenImage = images[Math.floor(Math.random()* images.length)];
      
      const bgImage = `/img/${chosenImage}`;
      
      document.body.style.background = `url(${bgImage}) no-repeat center/cover`;

      //quotes.js
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

  </details>
+ 시계
  <details>
    <summary>Javascript Code : clock.js</summary>

      const clock = document.querySelector('#clock');
  
      function getClock() {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2,"0");
        const minutes = String(date.getMinutes()).padStart(2,"0");
        const secounds = String(date.getSeconds()).padStart(2,"0");
        clock.innerText = `${hours}:${minutes}:${secounds}`;
      }
      
      getClock();
      setInterval(getClock,1000);
  </details>

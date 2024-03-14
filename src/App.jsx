import "./App.css";

function App() {
  return (
      <div class="container">
        <form>
          <div class="screen">
            <p>123456</p>
          </div>
          <input type="button" value="(" />
          <input type="button" value=")" />
          <input type="button" value="AC" />
          <input type="button" value="DE" />

          <input type="button" value="+" />
          <input type="button" value="-" />
          <input type="button" value="*" />
          <input type="button" value="/" />

          <input type="button" value="7" />
          <input type="button" value="8" />
          <input type="button" value="9" />
          <input type="button" value="**" />

          <input type="button" value="4" />
          <input type="button" value="5" />
          <input type="button" value="6" />
          <input type="button" value="=" class="span-row-3" />

          <input type="button" value="1" />
          <input type="button" value="2" />
          <input type="button" value="3" />

          <input type="button" value="0" />
          <input type="button" value="00" />
          <input type="button" value="." />
        </form>
      </div>
  );
}

export default App;

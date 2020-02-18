import React, { useState } from "react";
import "./App.css";

function App() {
  const validation = { fname: "cassandra", bday: "1995-08-16" };
  const data = [
    { ciphertext: "1", plaintext: "1" },
    { ciphertext: "2", plaintext: "2" },
    { ciphertext: "3", plaintext: "3" },
    { ciphertext: "4", plaintext: "4" },
    { ciphertext: "5", plaintext: "5" },
    { ciphertext: "6", plaintext: "6" },
    { ciphertext: "7", plaintext: "7" }
  ];

  const [display, setDisplay] = useState({
    validation: "shown",
    welcome: "hidden",
    cryptograph: "hidden",
    complete: "hidden"
  });

  const [progress, setProgress] = useState(0);

  const validate = event => {
    const fname = event.target.fname.value.toLowerCase();
    const bday = event.target.bday.value;
    event.target.fname.value = null;
    event.target.bday.value = null;

    if (fname === validation.fname && bday === validation.bday) {
      setDisplay({
        validation: "hidden",
        welcome: "shown",
        cryptograph: "hidden",
        complete: "hidden"
      });
    }
    event.preventDefault();
  };

  const start = event => {
    setDisplay({
      validation: "hidden",
      welcome: "hidden",
      cryptograph: "shown",
      complete: "hidden"
    });
    event.preventDefault();
  };

  const check = event => {
    const answer = event.target.plaintext.value.toLowerCase();
    event.target.plaintext.value = null;

    if (answer === data[progress].plaintext) {
      if (progress < data.length - 1) {
        setProgress(prevState => prevState + 1);
      } else {
        setProgress(0);
        setDisplay({
          validation: "hidden",
          welcome: "hidden",
          cryptograph: "hidden",
          complete: "shown"
        });
      }
    }
    event.preventDefault();
  };

  return (
    <div className="App">
      <header className="App-header">I am a header</header>

      <section id="validation" className={display.validation}>
        <div className="content">
          <form onSubmit={validate}>
            <h3>first name</h3>
            <input id="fname" type="text" />
            <h3>birthday</h3>
            <input id="bday" type="date" />
            <br />
            <input className="submit" type="submit" value=">" />
          </form>
        </div>
      </section>

      <section id="welcome" className={display.welcome}>
        <div className="content">
          <form onSubmit={start}>
            <h2>welcome peach,</h2>
            <h3>there are {data.length} puzzles to solve.</h3>
            <h2>good luck!</h2>
            <input className="submit" type="submit" value=">" />
          </form>
        </div>
      </section>

      <section id="cryptograph" className={display.cryptograph}>
        <div className="content">
          <form onSubmit={check}>
            <h2 id="ciphertext">{data[progress].ciphertext}</h2>
            <input id="plaintext" type="text" />
            <input className="submit" type="submit" value=">" />
          </form>
        </div>
      </section>

      <section id="complete" className={display.complete}>
        <div className="content">
          <h3>thanks peach, you too!</h3>
        </div>
      </section>
    </div>
  );
}

export default App;

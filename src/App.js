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

  console.log(display.validation);
  console.log(display.welcome);
  console.log(display.cryptograph);
  console.log(display.complete);

  return (
    <div className="App">
      <header className="App-header"></header>

      <section id="validation" className={display.validation}>
        <form onSubmit={validate}>
          <input id="fname" type="text" placeholder="first name" />
          <input id="bday" type="date" />
          <input type="submit" value="enter" />
        </form>
      </section>

      <section id="welcome" className={display.welcome}>
        <form onSubmit={start}>
          <h2>Welcome Peach,</h2>
          <h3>there are {data.length} puzzles to solve.</h3>
          <h2>Good luck!</h2>
          <input type="submit" value=">" />
        </form>
      </section>

      <section id="cryptograph" className={display.cryptograph}>
        <form onSubmit={check}>
          <h2 id="ciphertext">{data[progress].ciphertext}</h2>
          <input id="plaintext" type="text" />
          <input type="submit" value=">" />
        </form>
      </section>

      <section id="complete" className={display.complete}>
        <h3>Thanks Peach, you too!</h3>
      </section>
    </div>
  );
}

export default App;

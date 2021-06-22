import { useState } from "react";

export default function Test() {
  const [shown, setShown] = useState(false);

  let form = null;

  //first way
  // if (shown) {
  //   form = <Form cancelForm={() => setShown(false)} />;
  // }

  //2nd way
  //{shown ? <Form /> : null}

  return (
    <div className="test">
      {/* <button onClick={() => setShown(state => !state)}>
        {shown ? "hide" : "show"}
      </button> */}
      {shown ? null : (
        <button onClick={() => setShown(true)}>add expense</button>
      )}

      {shown ? <Form setShown={setShown} /> : null}
    </div>
  );
}

//expense form
function Form({ setShown }) {
  return (
    <form className="form">
      <p>title</p>
      <p>date</p>
      <p>amount</p>

      <button style={{ marginBottom: ".5rem" }}>submit</button>
      <button onClick={() => setShown(false)}>cancel</button>
    </form>
  );
}

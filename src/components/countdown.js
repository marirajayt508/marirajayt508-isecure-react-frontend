import * as React from "react";
import { render } from "react-dom";


function Timer(props) {
  const [counter, setCounter] = React.useState(props.time);
  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  if(!counter)
  {
      props.onTimeover(props.msg)
  }
  return<div>
      <b class="text-danger ">Your Session Code expired in : {counter} Seconds</b>
  </div>
}

export {Timer}
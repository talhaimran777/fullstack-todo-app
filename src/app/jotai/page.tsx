"use client";

import counterAtom from "@/atoms/counter";
import { useAtom } from "jotai";

const JotaiIntegrationPage = () => {
  const [counter, setCounter] = useAtom(counterAtom);

  return (
    <div>
      <h1>Hello, From Jotai with counter {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Add 1</button>
    </div>
  );
};

export default JotaiIntegrationPage;

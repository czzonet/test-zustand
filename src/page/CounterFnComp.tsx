import React from "react";
import { useStoreCounter } from "../store/useStoreCounter";

export const CounterFnComp = () => {
  const count = useStoreCounter((s) => s.count);
  const inc = useStoreCounter((s) => s.inc);
  const des = useStoreCounter((s) => s.des);

  return (
    <div>
      count: {count}
      <button onClick={() => inc(9)}>inc</button>
      <button onClick={() => des()}>dec</button>
    </div>
  );
};

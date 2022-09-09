import produce from "immer";
import create from "zustand";
import { devtools } from "zustand/middleware";

interface State {
  count: number;
  inc: (payload) => void;
  des: () => void;
}

export const useStoreCounter = create<State>()(
  devtools((set) => {
    return {
      count: 1,
      inc(payload) {
        set(
          produce((draft) => {
            draft.count += 1;
          }),
          false,
          {
            type: "count/inc",
            payload,
          }
        );
      },
      des() {
        set(
          produce((draft) => {
            draft.count -= 1;
          })
        );
      },
    };
  })
);

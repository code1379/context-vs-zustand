import { useEffect, useMemo, memo } from "react";
import { create } from "zustand";
import { useRequest } from "ahooks";
import axios from "axios";
import { shallow } from "zustand/shallow";

// https://swapi.dev/api/people/1

// 为什么会触发无限渲染
// https://stackoverflow.com/questions/73147257/infinite-re-render-using-zustand
export const useStore = create((set) => ({
  // 状态
  username: "dell",
  requestState: null,
  setUsername: (data) => set((state) => ({ username: data })),
  // 方法
  getData: () =>
    useRequest(() => axios.get("https://swapi.dev/api/people/1"), {
      cacheKey: "dada",
      onSuccess: (res) => {
        console.log("onSuccess", res);
      },
    }),
  setRequestState: (requestState) => {
    return set((state) => ({
      requestState,
    }));
  },
}));

const Child = memo(() => {
  const requestState = useStore((state) => state.requestState);
  useEffect(() => {
    console.log("render");
    return () => {
      console.log("unmount");
    };
  }, [requestState]);
  return (
    <>
      <h3>Child</h3>
      <p>
        {requestState?.loading
          ? "loading"
          : JSON.stringify(requestState?.data?.data)}
      </p>
      <button disabled={requestState?.loading} onClick={requestState?.refresh}>
        Child refresh
      </button>
      .
    </>
  );
});

export default function ZustandRequest() {
  const getData = useStore((state) => state.getData);

  const requestState = useStore((state) => state.requestState, shallow);
  const setRequestState = useStore((state) => state.setRequestState);
  const req = getData();
  useEffect(() => {
    setRequestState(req);
  }, [req]);
  return (
    <div>
      <h1>ZustandRequest</h1>
      {/* <p>{req.loading ? "loading" : JSON.stringify(req.data.data)}</p> */}
      <button onClick={req.refresh} disabled={req.loading}>
        refresh
      </button>
      <Child />
    </div>
  );
}

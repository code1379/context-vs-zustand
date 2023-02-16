import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

const ValidateContext = createContext();

const menus = [
  {
    key: "1",
    onValidate: function () {
      console.log(this.key);
    },
  },
  { key: "2" },
];

const Item = (props) => {
  const { title, onValidate } = props;
  const validate = useContext(ValidateContext);

  console.log(`item-${title}`, validate, props);
  if (onValidate && typeof onValidate === "function") {
    validate[0][validate[1]] = onValidate;
  }
  return <div>Item - {title}</div>;
};

const validateFns = {};

export function Container() {
  // 卸载的时候清空 validateFns，另一个好点的办法就是 把 const 改为 let，卸载的时候直接给一个新对象
  useEffect(() => {
    return () => {
      Object.keys(validateFns).forEach((key) => {
        delete validateFns[key];
      });
    };
  }, []);
  return (
    <div>
      <h1>ContextArray</h1>
      {menus.map((menu) => {
        return (
          <div key={menu.key}>
            <ValidateContext.Provider value={[validateFns, menu.key]}>
              <Item title={menu.key} {...menu}></Item>
            </ValidateContext.Provider>
          </div>
        );
      })}
    </div>
  );
}

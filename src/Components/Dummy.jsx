import React, { useEffect, useState } from "react";
import Login from "./Login";

function Dummy() {
  let data = [
    {
      storeNumber: 123,
      StoreAddress: "1/xyz address",
      StoreAddress2: "1/xyz address",
      InventoryOnHand: 40,
      listPrice: 50,
      offerPrice: 30,
    },
    {
      storeNumber: 123,
      StoreAddress: "1/xyz address",
      StoreAddress2: "1/xyz address",
      InventoryOnHand: 40,
      listPrice: 50,
      offerPrice: 30,
    },
    {
      storeNumber: 123,
      StoreAddress: "1/xyz address",
      StoreAddress2: "1/xyz address",
      InventoryOnHand: 40,
      listPrice: 50,
      offerPrice: 30,
    },
    {
      storeNumber: 123,
      StoreAddress: "1/xyz address",
      StoreAddress2: "1/xyz address",
      InventoryOnHand: 40,
      listPrice: 50,
      offerPrice: 30,
    },
    {
      storeNumber: 123,
      StoreAddress: "1/xyz address",
      StoreAddress2: "1/xyz address",
      InventoryOnHand: 40,
      listPrice: 50,
      offerPrice: 30,
    },
    {
      storeNumber: 123,
      StoreAddress: "1/xyz address",
      StoreAddress2: "1/xyz address",
      InventoryOnHand: 40,
      listPrice: 50,
      offerPrice: 30,
    },
    {
      storeNumber: 123,
      StoreAddress: "1/xyz address",
      StoreAddress2: "1/xyz address",
      InventoryOnHand: 40,
      listPrice: 50,
      offerPrice: 30,
    },
    {
      storeNumber: 123,
      StoreAddress: "1/xyz address",
      StoreAddress2: "1/xyz address",
      InventoryOnHand: 40,
      listPrice: 50,
      offerPrice: 30,
    },
  ];
  const [keysData, setKeysData] = useState([]);
  useEffect(() => {
    let newData = data.map((e) => Object.keys(e));
    newData = newData.filter((e, i) => newData.indexOf(e) === i);
    console.log(newData[0]);
    setKeysData(newData[0]);
  }, []);

  return (
    <div>
      <div style={{ margin: "1em", border: "1px solid black" }}>
        <div
          style={{
            display: "flex",
            gap: "2em",
            color: "black",
            fontWeight: 600,
            alignItems: "center",
            justifyContent: "center",
            background: "grey",
            borderRight: "1px solid black",
          }}
        >
          {keysData.map((e, i) => {
            let d = keysData.length - 1;
            return (
              <div
                style={{
                  width: "200px",
                  padding: "0.5em 0em",
                  borderRight: d === i ? "0px" : "1px solid black",
                }}
              >
                {e}
              </div>
            );
          })}
        </div>
        <div style={{ background: "whitesmoke" }}>
          {data.map((e) => (
            <div
              style={{
                display: "flex",
                gap: "2em",
                color: "black",
                fontWeight: 600,
                alignItems: "center",
                justifyContent: "center",
                padding: "0 0.5em",
                border: "1px solid black",
                borderCollapse: "collapse",
              }}
            >
              <div
                style={{
                  width: "200px",
                  padding: "0.5em",
                  borderRight: "1px solid black",
                }}
              >
                {e.storeNumber}
              </div>
              <div
                style={{
                  width: "200px",
                  padding: "0.5em",
                  borderRight: "1px solid black",
                }}
              >
                {" "}
                {e.StoreAddress}
              </div>
              <div
                style={{
                  width: "200px",
                  padding: "0.5em",
                  borderRight: "1px solid black",
                }}
              >
                {" "}
                {e.StoreAddress2}
              </div>
              <div
                style={{
                  width: "200px",
                  padding: "0.5em",
                  borderRight: "1px solid black",
                }}
              >
                <input
                  style={{ border: "1px solid blue", width: "90%" }}
                  value={e.InventoryOnHand}
                />
              </div>
              <div
                style={{
                  width: "200px",
                  padding: "0.5em",
                  borderRight: "1px solid black",
                }}
              >
                <input
                  style={{ border: "1px solid blue", width: "90%" }}
                  value={e.listPrice}
                />
              </div>
              <div style={{ width: "200px" }}>
                <input
                  style={{ border: "1px solid blue", width: "90%" }}
                  value={e.offerPrice}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Login />
    </div>
  );
}

export default Dummy;

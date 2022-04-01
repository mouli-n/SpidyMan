import React from "react";

function DragnDrop() {
  let data = [
    " item1",
    " item2",
    " item3",
    " item4",
    " item5",
    " item6",
    " item7",
    " item8",
    " item9",
    "item10",
    "item11",
    "item12",
    "item13",
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        width: "100%",
        flexWrap: "wrap",
        height: "auto",
        background: "red",
      }}
    >
      {data.map((e) => (
        <div
          style={{
            width: "300px",
            height: "100px",
            background: "blue",
            margin: "1em",
            display: "grid",
            placeItems: "center",
            borderRadius: "10px",
          }}
        >
          <h1 style={{ color: "whitesmoke", fontSize: "1.5em" }}> {e}</h1>
        </div>
      ))}
    </div>
  );
}

export default DragnDrop;

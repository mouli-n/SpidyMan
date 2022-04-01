import React from "react";
import { useState } from "react";
let data = [
  {
    username: "ruban",
    password: "123",
  },
  {
    username: "mouil",
    password: "1234",
  },
  {
    username: "indhu",
    password: "123",
  },
];
function Login() {
  const [log, setLog] = useState(data);
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [name1, setName1] = useState("");
  const [pass1, setPass1] = useState("");
  const [help, setHelp] = useState("");
  const [signup, setSignup] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p style={{ color: "red" }}>{help}</p>
      <br />
      <input
        type="text"
        placeholder="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <p style={{ color: "red" }}>{help}</p>
      <br />
      <button
        onClick={() => {
          let ee = log.filter((e) => e.username === name && e.password);
          setHelp(!!ee.length ? alert("logged successfully") : "invalid");
          setName("")
          setPass("")
        }}
        className="border-solid bg-white	border-2 border-black-900 p-3 w-40 rounded-3xl border-black	hover:text-white hover:bg-black"
      >
        Login
      </button>
      <br />
      <button
        onClick={() => {
          setSignup(true);
        }}
        className="border-solid bg-orange-500	border-2 border-black-900 p-3 w-40 rounded-3xl border-black	hover:text-white hover:bg-orange-800"
      >
        Sign Up
      </button>
      {signup ? (
        <div>
          <h1>SIGN UP</h1>
          <input
            type="text"
            placeholder="name"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
          />
          {/* <p style={{ color: "red" }}>{help}</p> */}
          <br />
          <br />
          <input
            type="text"
            placeholder="password"
            value={pass1}
            onChange={(e) => setPass1(e.target.value)}
          />
          {/* <p style={{ color: "red" }}>{help}</p> */}
          <br />
          <br />
          <button
            onClick={() => {
              if (!!name1 && !!pass1) {
                let dd = [...log, { username: name1, password: pass1 }];
                // console.log(dd);
                setLog(dd);
                setName1("");
                setPass1("");
                setSignup(false);
              }
            }}
            className="border-solid bg-white	border-2 border-black-900 p-3 w-40 rounded-3xl border-black	hover:text-white hover:bg-black"
          >
            submit
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Login;

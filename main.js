import React from "https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js";
import ReactDOM from "https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.production.min.js";

const { useState } = React;

function App() {
  const [Vs, setVs] = useState(10);
  const [R1, setR1] = useState(1000);
  const [R2, setR2] = useState(2000);
  const [R3, setR3] = useState(3000);

  const Rth = (R1 * R2) / (R1 + R2);
  const Vth = Vs * (R2 / (R1 + R2));
  const Iload = Vth / (Rth + R3);
  const Vload = Iload * R3;

  return (
    React.createElement("div", { style: { fontFamily: "Segoe UI", maxWidth: "700px", margin: "20px auto", padding: "20px", background: "#fff", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" } },
      React.createElement("h1", { style: { textAlign: "center", color: "#0369a1" } }, "🔬 Thevenin’s Theorem Virtual Lab"),
      React.createElement("p", null, "To verify Thevenin’s theorem by finding equivalent voltage (Vth) and resistance (Rth)."),
      React.createElement("h2", null, "Enter Values:"),
      React.createElement("label", null, "Vs (V): ",
        React.createElement("input", { type: "number", value: Vs, onChange: e => setVs(+e.target.value) })
      ),
      React.createElement("br"),
      React.createElement("label", null, "R1 (Ω): ",
        React.createElement("input", { type: "number", value: R1, onChange: e => setR1(+e.target.value) })
      ),
      React.createElement("br"),
      React.createElement("label", null, "R2 (Ω): ",
        React.createElement("input", { type: "number", value: R2, onChange: e => setR2(+e.target.value) })
      ),
      React.createElement("br"),
      React.createElement("label", null, "R3 (Load Ω): ",
        React.createElement("input", { type: "number", value: R3, onChange: e => setR3(+e.target.value) })
      ),
      React.createElement("h2", null, "Results:"),
      React.createElement("p", null, `Rth = ${Rth.toFixed(2)} Ω`),
      React.createElement("p", null, `Vth = ${Vth.toFixed(2)} V`),
      React.createElement("p", null, `Iload = ${(Iload * 1000).toFixed(3)} mA`),
      React.createElement("p", null, `Vload = ${Vload.toFixed(2)} V`),
      React.createElement("footer", { style: { marginTop: "30px", textAlign: "center", color: "#555" } },
        "© 2025 Virtual Electronics Lab | Thevenin’s Theorem"
      )
    )
  );
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));

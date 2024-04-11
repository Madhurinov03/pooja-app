import { Fragment, useState } from "react";
import "./App.css";
import data from "./assets/data.json";
import { useNavigate } from "react-router-dom";

function App() {
  const [poojaObj, setPoojaObj] = useState({});
  const navigate = useNavigate();

  const handleDropdownChange = (e) => {
    console.log(e?.target?.value);
    const id = Number(e?.target?.value);
    if (id === 0) {
      setPoojaObj({});
      return;
    }
    const filteredArr = data?.filter((obj) => {
      return obj?.id === id;
    });
    if (filteredArr.length !== 0) {
      setPoojaObj(filteredArr[0]);
    }
  };
  const handleButtonClick = () => {
    navigate("/bookNow", { state: { data: poojaObj?.name } });
  };

  return (
    <div className="App">
      <select id="pooja" onChange={handleDropdownChange}>
        <option key={0} value={0}>
          {"-- Select Pooja --"}
        </option>
        {data.map((poojaObj) => (
          <option key={poojaObj?.id} value={poojaObj?.id}>
            {poojaObj?.name}
          </option>
        ))}
      </select>
      {poojaObj?.id && (
        <Fragment>
          <div id="card" className="firstCard">
            <h2>{poojaObj?.name}</h2>
            <button className="button" onClick={handleButtonClick}>
              Book Now
            </button>
            <p>{poojaObj?.content}</p>
          </div>
          <hr />
          <div id="card">
            <h2>What are the benefits?</h2>
            <li>
              Provides protection from obstacles, misfortunes, and delays in
              life.
            </li>
            <li>Fosters stability, properity and success.</li>
            <li>Mitigates adverse effects of negative influence.</li>
          </div>
          <hr />
          <div id="card">
            <h2>How will it happen?</h2>
            <li>Devotees perform rituals and prayers dedicated to god.</li>
            <li>Offering of oil, flowers, and prayers are key components.</li>
            <li>Chanting prayers to appease god is a part of the ritual.</li>
          </div>
          <hr />
          <div id="card">
            <h2>What should you do after pooja to get maximum benefits?</h2>
            <li>Donating to charitable causes to express gratitude.</li>
            <li>Regular recitation of mantra for continued benefits.</li>
            <li>Observing rituals and maintaining virtuous conduct.</li>
          </div>
          <hr />
          <div id="card">
            <h2>Why book with divine connection?</h2>
            <li>Convenience, authenticity, and personilized guidance.</li>
            <li>Access to experience priests and experts.</li>
            <li>Seamless access to authentic rituals.</li>
            <li>Ensures deserved outcomes with personilized assistance.</li>
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default App;

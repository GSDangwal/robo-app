
import './App.css';

import { useState, useEffect } from "react";

function AllContent({ event }) {
  let url = `https://robohash.org/${event.id} ?200x200`;
  return (
    <div>
      <div className="col">
        <div className="card">
          <img src={url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{event.name}</h5>
            <p className="card-text">{event.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Main() {
  const [name, updateName] = useState([]);
  const [inPut, updateinPut] = useState("");
  const [show, updateShow] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => updateName(data));
  }, []);

  useEffect(() => {
    // if (inPut.length > 0) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => updateShow(data));
    // }
  }, [inPut]);

  return (
    <>
      <h2>ROBOFANS</h2>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span
            className="navbar-brand"
            style={{ font: "italic small-caps bold 30px/2 cursive" }}
          >
            Enter Name ---
          </span>
          <div className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Robots"
              aria-label="Search"
              onChange={(e) => {
                updateinPut(e.target.value);
              }}
            />
          </div>
        </div>
      </nav>
      {/* <div className="row row-cols-1 row-cols-md-3 g-4"> */}
      {inPut <= 0 ? (
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {name.map((event) => {
            return <AllContent key={event.gmail} event={event} />;
          })}
        </div>
      ) : (
        // <div className="row row-cols-1 row-cols-md-3 g-4">
        //   {name.map((event) => {
        //     let url = `https://robohash.org/${event.id} ?200x200`;
        //     return (
        //       <div className="col">
        //         <div className="card">
        //           <img src={url} className="card-img-top" alt="..." />
        //           <div className="card-body">
        //             <h5 className="card-title">{event.name}</h5>
        //             <p className="card-text">{event.email}</p>
        //           </div>
        //         </div>
        //       </div>
        //     );
        //   })}
        // </div>
        show.map((evet) => {
          return (
            <div>
              {evet.name === inPut ? (
                <UserinPutut key={evet.gmail} evet={evet} />
              ) : (
                ""
              )}
            </div>
          );
        })
      )}
    </>
  );
}

function UserinPutut({ evet }) {
  let url = `https://robohash.org/${evet.id} ?200x200`;
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card">
          <img src={url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{evet.name}</h5>
            <p className="card-text">{evet.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}


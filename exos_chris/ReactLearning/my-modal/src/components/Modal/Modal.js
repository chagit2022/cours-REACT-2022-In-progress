import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toogleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-modal"
        data-toggle="modal"
        data-target="#exampleModal"
        onClick={toogleModal}
      >
        Lancer le modal!!!
      </button>
{modal && (
      <div className="overlay">
        <div className="modal">
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta perspiciatis vero eveniet rem in illum aspernatur! Quas voluptas enim, blanditiis perspiciatis corrupti ullam hic dolorem veniam distinctio corporis laboriosam suscipit! Facere numquam vero, itaque pariatur ex illum quas eos, vitae, provident modi laborum ut? Ut quisquam vero molestiae dolore inventore.</p>
            <button onClick={toogleModal}className="close-modal">X</button>
          </div>
        </div>
      </div>
    )}
    </>
  );
}

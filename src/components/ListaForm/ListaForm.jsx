import React, { useState } from "react";
import styles from "./ListaForm.module.scss";

import { AiOutlinePlusSquare } from "react-icons/ai";

const ListaForm = ({ formHandler, listLength }) => {
  const [tarefa, setTarefa] = useState(null);

  const elementCreate = (value) => {
    const novaTarefa = {
      id: listLength + 1,
      title: value,
      description: "Adicione uma descrição...",
      completed: false,
    };

    formHandler(novaTarefa);
    setTarefa(null);
  };

  return (
    <div className={styles.form_container}>
      <form
        className={styles.listaForm}
        onSubmit={(event) => {
          elementCreate(tarefa);

          event.target[0].value = "";
          event.preventDefault();
        }}
      >
        <input
          placeholder="Nova tarefa..."
          type="text"
          name="novatarefa"
          onChange={(event) => setTarefa(event.target.value)}
          required
        />
        <button>
          <AiOutlinePlusSquare color="white" size={35} />
        </button>
      </form>
    </div>
  );
};

export default ListaForm;

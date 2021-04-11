import React from 'react';
import Button from './Button'
import {Prompt} from 'react-router-dom'

const NotePanel = props => {
    return (
       <div className="note-panel">
          <h2>Dodaj notatkę</h2>
          <label htmlFor="category">Wybierz kategorię</label>
          <select id="category" onChange={props.changeCategory} defaultValue={props.newCategory}>
            <option value="- wybierz kategorię -" disabled>- wybierz kategorię -</option>
            <option value="Zakupy">Zakupy</option>
            <option value="Praca">Praca</option>
            <option value="Inne">Inne</option>
          </select>

          <label htmlFor="text">Wpisz treść notatki</label>
          <textarea id="text" onChange={props.changeText} value={props.newText}></textarea>

          <p className="error">Uzupełnij wszystkie pola!</p>

          <div className="panel-buttons">
                 <Button
                    btnClass="save icon"
                    iClass="fas fa-save"
                    text=" Zapisz"
                    linkTo="/"
                    click={props.clickAdd}
                />
          <Prompt
                    when={props.isEmpty}
                    message="Pola nie zostały uzupełnione. Czy chcesz porzucić dodawanie nowej notatki?"
                />
          </div>
        </div>
    );
}

export default NotePanel;

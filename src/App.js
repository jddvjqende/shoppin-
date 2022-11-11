import './App.css';
import { useState } from 'react'
import Todo from './componts/Todo'

function App() {
  const defaultState = [
    { label: "Comprar mantequilla" },
    { label: "Comprar pan" },
    { label: "Pagar la luz" }
  ]
  const [items, setItems] = useState(defaultState)
  const [newItem, setNewItem] = useState('')

  const deleteFn = (label) => {
    setItems(items.filter(item => item.label !== label))
  }

  const list = items.map(item => {
    return <Todo
      onClickFn={() => deleteFn(item.label)}
    >{item.label}
    </Todo>
  })

  const onClickFn = (event) => {
    event.preventDefault()
    setItems([...items, { label: newItem }], setNewItem(""))
  }
  const onChangeFn = (event) => {
    setNewItem(event.target.value)

  }

  const onDeleteAll = () => {
    setItems([])
    
  }
  return (
    <div className="App">
      <h1>Mi lista de cosas por hacer </h1>
      <h2>cuando productos llevo{items.length}</h2>

      <form onSubmit={(event) => onClickFn(event)}>
        <input
          type="text"
          value={newItem}
          onChange={onChangeFn}
        />
        <button onClick={onClickFn}>Agregar</button>
        <button onClick={onDeleteAll}>eliminar todo</button>
      </form>
      {list}
    </div>
  );
}

export default App;

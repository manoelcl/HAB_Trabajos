function Lista({ elements, modifier }) {
  return elements.map((element) => {
    return (
      <ul className="task" key={element.id}>
        <li style={element.done ? { textDecoration: "line-through" } : null}>
          {element.task}
          <input
            type="checkbox"
            checked={element.done}
            onChange={() => modifier(element.id)}
          />
        </li>
      </ul>
    );
  });
}

export default Lista;

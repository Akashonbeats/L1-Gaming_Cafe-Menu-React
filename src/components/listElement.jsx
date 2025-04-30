const ListElement = ({Item, Price}) => {
  return (
    <>
    <li>
        <h3>{Item}</h3>
        <h4>{Price}</h4>
    </li>
    </>
  )
};

export default ListElement;
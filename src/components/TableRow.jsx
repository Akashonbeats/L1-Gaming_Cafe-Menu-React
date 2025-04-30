const TableRow = ( {Item, VegPr, EggPr, ChkPr}) => {
  return (
    <tr>
      <td>{Item}</td>
      <td>₹{VegPr}</td>
      <td>₹{EggPr}</td>
      <td>₹{ChkPr}</td>
    </tr>
  );
};

export default TableRow;
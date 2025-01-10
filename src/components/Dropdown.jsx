
const Dropdown = ({ onChange }) => {

    return (
    <select
        onChange={(e) => onChange(e.target.value)}
        className="p-2 border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select an action</option>
        <option value="plus">Plus</option>
        <option value="minus">Minus</option>
        <option value="reset">Reset</option>
      </select>
    )
}

export default Dropdown;
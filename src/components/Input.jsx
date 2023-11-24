export default function Input({ label, data, newValue }) {
  const key = label
    .split(" ")
    .map((word) => word.toLowerCase())
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");

  const finalKey = key[0].toLowerCase() + key.slice(1);

  const valueChange = (e, map, key) => {
    map[key] = +e.target.value > 0 ? +e.target.value : "";

    newValue(data);
  };

  return (
    <p>
      <label>{label}</label>
      <input
        type="number"
        required
        value={data[finalKey]}
        onChange={(e) => valueChange(e, data, finalKey)}
      />
    </p>
  );
}

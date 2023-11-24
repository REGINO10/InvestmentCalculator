import Input from "./Input";

export default function Inputs({ inputs, valueChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          label="Initial Investment"
          data={inputs}
          newValue={valueChange}
        />
        <Input label="Annual Investment" data={inputs} newValue={valueChange} />
      </div>
      <div className="input-group">
        <Input label="Expected Return" data={inputs} newValue={valueChange} />
        <Input label="Duration" data={inputs} newValue={valueChange} />
      </div>
    </section>
  );
}

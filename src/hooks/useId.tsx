import { useId } from 'react';

const UseId = () => {
  return (
    <main>
      <h1>Use ID hook</h1>
      <InputWithId placeholder="Input name" />
      <InputWithId placeholder="Input email" />
    </main>
  );
};

const InputWithId = (props: { placeholder: string }) => {
  const id = useId();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <label htmlFor={id}>
        I am the label for the input with autogenerated id <strong>{id}</strong>
      </label>
      <input type="text" id={id} placeholder={props.placeholder} />
    </div>
  );
};

export default UseId;
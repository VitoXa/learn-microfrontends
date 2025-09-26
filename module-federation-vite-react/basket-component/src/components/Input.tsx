
// components/Input.jsx

import React, { useEffect } from "react";


type BasketInputProps = {
  value: string;
  onSubmit: (todo: string) => void;
}

const BasketInput = (props: BasketInputProps) => {
  const { onSubmit } = props;

  const inputRef = React.useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = props.value;
    }
  })
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(inputRef.current?.value || "");
      }}
    >
      <div className="flex-row">
        <input
          type="text"
          ref={inputRef}

        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default BasketInput;

import React, { InputHTMLAttributes, useEffect, useRef } from "react";
import { useField } from "@unform/core";

interface PropsInputText extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  type: string;
}

const InputText: React.FC<PropsInputText> = ({
  name,
  placeholder,
  type,
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <input
        ref={inputRef}
        defaultValue={defaultValue}
        type={type}
        id={name}
        placeholder={placeholder}
        className={error ? "has-error" : ""}
        {...rest}
      />
      {error && (
        <p className="mt-1 text-xs italic text-white opacity-60">
          {`${error}`}
        </p>
      )}
    </div>
  );
};

export default InputText;

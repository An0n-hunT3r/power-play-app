import React, { memo } from "react";

const Input = ({
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  isRequired = true,
}) => {
  return (
    <div className="mb-4">
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border rounded-md py-2 px-3 placeholder-gray-500"
        required={isRequired}
      />
    </div>
  );
};

export default memo(Input);

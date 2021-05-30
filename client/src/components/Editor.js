import React, { useState } from "react";
import RichTextEditor from "react-rte";

export default function Editor({handleChange}) {
  

  useEffect(() => {
    handleChange(value.toString('html'))
  }, [value])

  const onChange = (val) => {
    setValue(val);
  };

  return (
    <div>
      
    </div>
  );
}
import React, { useRef, useEffect } from 'react';
import { useField } from 'informed';
import { TextField } from '@adobe/react-spectrum';

const Input = (props) => {
  // Pass our own ref
  const inputRef = useRef();

  const { render, informed, fieldState, fieldApi, userProps, ref } = useField({
    type: 'text',
    inputRef,
    ...props,
  });
  const { required } = userProps;
  const { error, showError } = fieldState;

  // We need to do this because react spectrum does not expose native event :(
  // https://github.com/adobe/react-spectrum/issues/3247
  const onChange = (v) => {
    let input = ref.current.getInputElement();
    console.log(input);
    const e = {
      target: {
        selectionStart: input.selectionStart,
      },
    };
    console.log(e);
    fieldApi.setValue(v, e);
  };

  useEffect(() => {
    inputRef.current = ref.current.getInputElement();
    console.log(inputRef.current.setSelectionRange);
  }, []);

  return render(
    <TextField
      ref={ref}
      validationState={!error ? null : 'invalid'}
      errorMessage={showError ? error : undefined}
      isRequired={required}
      {...userProps}
      {...informed}
      onChange={onChange}
    />
  );
};

export default Input;

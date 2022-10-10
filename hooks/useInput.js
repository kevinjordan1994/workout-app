import { useRef, useState } from "react";

export default function useInput(
  validationFunction = (value) => {
    return value.trim().length > 0;
  }
) {
  const ref = useRef();
  const [value, setValue] = useState("");
  const [error, setError] = useState("Error!");
  const [wasTouched, setWasTouched] = useState(false);

  const isValid = validationFunction(value);
  const showError = !isValid && wasTouched;

  const change = () => {
    setWasTouched(false);
    setValue(ref.current.value);
  };

  const blur = () => {
    setWasTouched(true);
  };

  const setErrorMessage = (errorMessage) => {
    setError(errorMessage);
  };

  return {
    ref,
    error,
    isValid,
    showError,
    change,
    blur,
    setErrorMessage,
  };
}

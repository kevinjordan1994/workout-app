import { useEffect } from "react";
import useInput from "../hooks/useInput";

export default function Home() {
  const testValidation = (value) => {
    return value.trim().length > 2;
  };
  const testInput = useInput(testValidation);
  const testInput2 = useInput(testValidation);

  useEffect(() => {
    testInput.setErrorMessage("This is the test error message!");
  }, []);

  return (
    <>
      <input
        type="text"
        ref={testInput.ref}
        onChange={testInput.change}
        onBlur={testInput.blur}
      ></input>
      {testInput.showError && <p style={{ color: "red" }}>{testInput.error}</p>}
      <input
        type="text"
        ref={testInput2.ref}
        onChange={testInput2.change}
        onBlur={testInput2.blur}
      ></input>
      {testInput2.showError && (
        <p style={{ color: "red" }}>{testInput2.error}</p>
      )}
    </>
  );
}

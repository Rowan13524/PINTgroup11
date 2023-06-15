import { useState } from 'react';

export function useHandleCheckboxChange() {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
    console.log("Checkbox is checked: ", event.target.checked);
  }

  return [isChecked, handleCheckboxChange];
}

export function signUp() {
    console.log("handleSignUpClick");
    const container = document.getElementById('container');
    container.classList.add("right-panel-active");
  
    // Print input values
    const name = document.querySelector("#container .sign-up-container input[type='text']").value;
    const email = document.querySelector("#container .sign-up-container input[type='email']").value;
    const password = document.querySelector("#container .sign-up-container input[type='password']").value;
  
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

}

export function handleSignUpClick() {
  console.log("handleSignUpClick");
  const container = document.getElementById('container');
  container.classList.add("right-panel-active");
}

export function handleSignInClick() {
  console.log("handleSignInClick");
  const container = document.getElementById('container');
  container.classList.remove("right-panel-active");
}


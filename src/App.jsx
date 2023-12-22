import { useState } from 'react';
import { generatePassword } from './logic/generateRandomPassword';
import style from './App.module.css';
import PassSettings from './components/PassSettings';
import PassLenAndInput from './components/PassLenAndInput';

const DEFAULT_OPTIONS = [
  { checked: true, id: 'lowercase' },
  { checked: false, id: 'uppercase' },
  { checked: false, id: 'numbers' },
  { checked: false, id: 'symbols' },
  { checked: false, id: 'exc-duplicate' },
  { checked: false, id: 'spaces' },
];

export default function App() {
  const [copyPassword, setCopyPassword] = useState('copy_all');
  const [passLength, setPassLength] = useState(15);
  const [password, setPassword] = useState('');
  const [options, setOptions] = useState(DEFAULT_OPTIONS);

  const onGeneratePasswordClick = () => {
    const newPassword = generatePassword(passLength, options);
    setPassword(newPassword);
  };

  const onSetOptionsChange = (evt, id, index) => {
    const value = evt.target.checked;
    const passSetting = { checked: value, id: id };
    setOptions((prevOptions) => {
      // replace the array with new set of array
      const newOptions = [...prevOptions];
      newOptions[index] = passSetting;
      return newOptions;
    });
  };

  const onCopyPasswordClick = () => {
    navigator.clipboard.writeText(password); // copying random password
    setCopyPassword('check'); // changing copy icon to tick
    setTimeout(() => {
      setCopyPassword('copy_all');
    }, 1500); // after 1500 ms, changing tick icon back to copy
  };

  return (
    <div className={style.container}>
      <h2>Password Generator</h2>
      <div className={style.wrapper}>
        <PassLenAndInput
          password={password}
          copyPassword={copyPassword}
          onCopyPasswordClick={onCopyPasswordClick}
          passLength={passLength}
          setPassLength={setPassLength}
        />
        <PassSettings onSetOptionsChange={onSetOptionsChange} />
        <button
          className={style['generate-btn']}
          onClick={onGeneratePasswordClick}
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

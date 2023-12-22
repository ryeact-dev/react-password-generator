import style from './PassLenAndInput.module.css';

export default function PassLenAndInput({
  password,
  copyPassword,
  onCopyPasswordClick,
  passLength,
  setPassLength,
}) {
  const passIndicator =
    passLength <= 8 ? 'weak' : passLength <= 16 ? 'medium' : 'strong';

  return (
    <>
      <div className={style['input-box']}>
        <input type='text' defaultValue={password} disabled />
        <span
          // Google Icons Classes
          className={`material-symbols-rounded ${
            copyPassword === 'check' && 'copied'
          }`}
          onClick={onCopyPasswordClick}
        >
          {copyPassword}
        </span>
      </div>
      <div
        id={passIndicator}
        className={`${style['pass-indicator']} ${style[passIndicator]}`}
      ></div>
      <div className={style['pass-length']}>
        <div className={style.details}>
          <label className={style.title}>Password Length</label>
          <span>{passLength}</span>
        </div>
        <input
          type='range'
          min='1'
          max='30'
          value={passLength}
          step='1'
          onChange={(evt) => setPassLength(Number(evt.target.value))}
        />
      </div>
    </>
  );
}

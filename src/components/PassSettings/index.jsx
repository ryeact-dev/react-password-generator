import style from './PassSettings.module.css';

export default function PassSettings({ onSetOptionsChange }) {
  const listData = [
    { id: 'lowercase', labelName: 'Lowercase (a-z)', isChecked: true },
    { id: 'uppercase', labelName: 'Uppercase (A-Z)', isChecked: false },
    { id: 'numbers', labelName: 'Numbers (0-9)', isChecked: false },
    { id: 'symbols', labelName: 'Symbols (!-$^+)', isChecked: false },
    {
      id: 'exc-duplicate',
      labelName: 'Exclude Duplicate',
      isChecked: false,
    },
    { id: 'spaces', labelName: 'Include Spaces', isChecked: false },
  ];

  return (
    <div className={style['pass-settings']}>
      <label className={style.title}>Password Settings</label>
      <ul className={style.options}>
        {listData.map(({ id, labelName, isChecked }, index) => (
          <li key={index} className={style.option}>
            <input
              type='checkbox'
              id={id}
              defaultChecked={isChecked}
              onChange={(evt) => onSetOptionsChange(evt, id, index)}
            />
            <label htmlFor={id}>{labelName}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

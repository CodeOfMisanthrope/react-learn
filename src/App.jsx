import {useState} from "react";
import styles from '~/app.module.css';
import {generateId} from "~utils/id.js";

function App() {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState('');
  const [isValueValid, setIsValueValid] = useState(false);

  const onInputButtonClick = () => {
    const promptValue = prompt('Введите значение');
    const isValid = validate(promptValue);
    setIsValueValid(isValid);
    if (!isValid) {
      setError('Строка должна быть более 3 символов');
      return;
    }
    setValue(promptValue);
    setError('');
  };

  const onAddButtonClick = () => {
    const id = generateId();
    const updatedList = [...list, {id, value}];
    setList(updatedList);
    setValue('');
    setError('');
  };

  const validate = (value) => value.length >= 3;

  return (
    <>
      <div className={styles['app']}>
        <h1 className={styles['pageHeading']}>Ввод значения</h1>
        <p className={styles['noMarginText']}>
          Текущее значение <code>value</code>: "
          <output className={styles['currentValue']}>{value}</output>
          "
        </p>
        {error !== "" && <div className={styles['error']}>{error}</div>}
        <div className={styles['buttonsContainer']}>
          <button className={styles['button']} onClick={onInputButtonClick}>Ввести новое</button>
          <button className={styles['button']} onClick={onAddButtonClick} disabled={!isValueValid}>
            Добавить в список
          </button>
        </div>
        <div className={styles['listContainer']}>
          <h2 className={styles['listHeading']}>Список:</h2>
          {list.length === 0 && <p className={styles['noMarginText']}>Нет добавленных элементов</p>}
          <ul className={styles['list']}>
            {/*<li className={styles['listItem']}>Первый элемент</li>*/}
            {list.map(({id, value}) =>
              <li className={styles['listItem']} key={id}>{value}</li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;

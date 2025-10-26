import {useState} from "react";
import styles from '~/app.module.css';

function App() {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState('');

  const onInputButtonClick = () => {
    const promptValue = prompt('Введите значение');
    const isValid = validate(promptValue);
    if (!isValid) {
      setError('Строка должна быть более 3 символов');
      return;
    }
    setValue(promptValue);
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
        <div className={styles['error']}>{error}</div>
        <div className={styles['buttonsContainer']}>
          <button className={styles['button']} onClick={onInputButtonClick}>Ввести новое</button>
          <button className={styles['button']} disabled>Добавить в список</button>
        </div>
        <div className={styles['listContainer']}>
          <h2 className={styles['listHeading']}>Список:</h2>
          <p className={styles['noMarginText']}>Нет добавленных элементов</p>
          <ul className={styles['list']}>
            <li className={styles['listItem']}>Первый элемент</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;

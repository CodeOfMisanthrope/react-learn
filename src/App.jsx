import styles from '~/app.module.css';

function App() {
  return (
    <>
      <div className="app">
        <h1 className={styles['pageHeading']}>Ввод значения</h1>
        <p className={styles['noMarginText']}>
          Текущее значение <code>value</code>: "
          <output className={styles['currentValue']}></output>
          "
        </p>
        <div className={styles['error']}>Введенное значение должно содержать минимум 3 символа</div>
        <div className={styles['buttonsContainer']}>
          <button className={styles['button']}>Ввести новое</button>
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

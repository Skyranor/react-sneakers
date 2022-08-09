import styles from './Card.module.scss';

console.log(styles);

export default function Card(props) {
  return (
    <li className={styles.card}>
      <img width={132} height={112} src={props.imageUrl} alt="" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center pt-15">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price}</b>
        </div>
        <button className="button" onClick={props.onClick}>
          <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </li>
  );
}

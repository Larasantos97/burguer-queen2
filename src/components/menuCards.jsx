import styles from './components.module.css'

const menuProducts = ({name, price, onClick}) => {
    return (
        <li className={styles.cards}>
            <h3> {name}</h3>
            <p> {price}</p>
            <button onClick={onClick}>Finalizar pedido</button>
            </li>
    )
}
export default menuProducts;

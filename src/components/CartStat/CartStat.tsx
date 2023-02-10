import styles from './CartStat.module.scss';

interface CartStatProps { }

export const CartStat = ({ }: CartStatProps) => (
  <div className={styles.CartStat} data-testid="CartStat">
    CartStat Component
  </div>
);

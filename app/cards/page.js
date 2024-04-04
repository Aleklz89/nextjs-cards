import Dashboard from "../components/dashboard/Dashboard";
import Cardslist from "../components/cardslist/Cardslist";
import styles from './cards.css';

export default function Cards() {
  return (
    <main>
      <div className={styles.dashboard}>
        <Dashboard />
        <Cardslist />
      </div>
    </main>
  )
}

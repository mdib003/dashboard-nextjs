import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {

  const handlerClick = () => {
    console.log('checked')
  }

  return (
    <main className={styles.main}>
    </main>
  )
}

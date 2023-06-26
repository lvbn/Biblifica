import styles from './Swiper.module.css'
import cards from '../../data/cards.json'
import { useEffect, useState } from 'react'

export default function Swiper() {

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === cards.length - 1) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    }, 5000)

     return () => clearInterval(interval);
  }, [index])

  return (
    <div className={styles.container}>
      {
        <div className={styles.card}>
          <img src={`../../src/images/${cards[index].img}`} alt='' />
        </div>
      }
    </div>
  )
}

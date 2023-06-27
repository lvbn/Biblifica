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

  const activeSlideClass = (slideIndex: number) => {
    if (slideIndex === index) {
      return `${styles.selectedSlide}`
    } else {
      return `${styles.unselectedSlide}`
    }
  }

  const activeCardClass = (slideIndex: number) => {
    if (slideIndex === index) {
      return `${styles.selectedCard}`
    } else {
      return `${styles.unselectedCard}`
    }
  }

  return (
    <div className={styles.container}>
      {
        <div
          className={`${styles.card} ${activeCardClass(index)}`}
          style={{ backgroundImage: `url(../../src/images/${cards[index].img})` }}
        >
          {/* <img src={`../../src/images/${cards[index].img}`} alt='' /> */}
        </div>
      }
      <div className={styles.slides}>
        {
          cards.map((card, index) => (
            <div
              key={index}
              className={`${styles.slide} ${activeSlideClass(index)}`}
              onClick={() => setIndex(index)}
            >

            </div>
          ))
        }
      </div>
    </div>
  )
}

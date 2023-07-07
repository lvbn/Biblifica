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

  const swipeFoward = (curr: number) => {
    if (curr === cards.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  const swipeBack = (curr: number) => {
    if (curr === 0) {
      setIndex(cards.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  return (
    <div className={styles.container}>
      {
        <div
          className={`${styles.card} ${activeCardClass(index)}`}
          style={{ backgroundImage: `url(images/cards/${cards[index].img})` }}
        >
          {/* <img src={`../../src/images/${cards[index].img}`} alt='' /> */}
        </div>
      }
      <div className={styles.slides}>
        {
          cards.map((_card, index) => (
            <div
              key={index}
              className={`${styles.slide} ${activeSlideClass(index)}`}
              onClick={() => setIndex(index)}
            >

            </div>
          ))
        }
      </div>

      <div className={styles.left} onClick={() => swipeBack(index)}>
        <span className="material-symbols-outlined">
          chevron_left
        </span>
      </div>
      <div className={styles.right} onClick={() => swipeFoward(index)}>
        <span className="material-symbols-outlined">
          chevron_right
        </span>
      </div>

    </div>
  )
}

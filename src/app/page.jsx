import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/components/button/Button'
import { dataHome } from '@/data'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          {dataHome.bigText}
        </h1>
        <p className={styles.desc}>
          {dataHome.smallText.map( (line, index) => <>{line}<br key={index}/></>)}
        </p>
        <Button url="/portfolio" text={dataHome.btnText}/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="Hero image" className={styles.img}/>
      </div>
    </div>
  )
}

import Image from 'next/image'
import styles from './page.module.css'
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
                    {dataHome.smallText.map((line, index) => (
                        <span key={index}>{line}<br /></span>
                    ))}
                </p>
                <Button url="/portfolio" text={dataHome.btnText} />
            </div>
            <div className={styles.item}>
                <Image 
                    src='/hero.png' 
                    alt="Hero image" 
                    width={500}
                    height={400}
                    className={styles.img} 
                />
            </div>
        </div>
    )
}

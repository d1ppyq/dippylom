import Link from 'next/link'
import styles from './navbar.module.sass'

export default function Navbar(){
  return(
    <div className={styles.navbar}>
      <div><Link href="/">Maxishop</Link></div>
      <div className={styles.buttons}>
        <Link href="/manga">Manga</Link>
        <Link href="/anime">Anime</Link>
        <Link href="/merch">Merch</Link>
        <Link href="/games">Games</Link>
      </div>
    </div>
  )
}
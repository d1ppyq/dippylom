import Link from "next/link"
import styles from "./navbar.module.sass"

export default function Navbar(){
  return(
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">MaxiShop</Link>
      </div>
      <div className={styles.buttons}>
        <Link href="/anime">Anime</Link>
        <Link href="/manga">Manga</Link>
        <Link href="/merch">Merch</Link>    
      </div>
    </div>
  )
}
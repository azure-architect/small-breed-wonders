import Head from 'next/head'
import Container from '@/components/Container'
import Header from '@/components/Header'
import Button from '@/components/Button'
import styles from '@/styles/Home.module.scss'
import items from '@/data/items.json'
export default function Home() {
  return (
    <div >
      <Head>
        <title>Small Breed Wonders</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main >
        <Container>
          <h1> Small Breed Wonders </h1>
          <h2> Available Cards </h2>
          <ul className={styles.products}>
            {items.map(item => {
              return (
                <li key={item .id}>
                  <img src={item.image} alt="Bowser Holographic" />
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                  <Button className={styles.button}>Add to Cart</Button>
                </li>
              )
            })}


           

          </ul>
        </Container>
      </main>

      <footer className={styles.footer}>
        &copy; Small Breed Wonders, {new Date().getFullYear()}
      </footer>
    </div>
  )
}

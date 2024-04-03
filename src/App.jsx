import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Post } from "./components/Post";

import './global.css';

import styles from './app.module.css';

export default function App() {
  return (

    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
        <Post 
          author="Caio Elias Vieira"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla neque itaque placeat, facere reiciendis vel inventore magnam necessitatibus tenetur quibusdam molestiae quaerat illo eligendi accusantium a ex eveniet architecto cum."
        />
        
        <Post 
          author="Calica rebolado"
          content="Cuz cuz pé de pato boca de fogão..."
        />
        </main>
      </div>
    </div>
  )
}
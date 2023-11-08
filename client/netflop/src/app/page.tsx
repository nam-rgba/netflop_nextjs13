import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/components/Header/header";
// import ogo from '../assets/images/LOGO.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="slides">
        <div className="background_image">
          <div className="content">
            <div className="film-info left">
              <div className="film-name">LA LA LAND</div>
              <div className="info_1">
                <div className="type">Romace, Drama</div>
                <div className="year">
                  <i className="fa-regular fa-calendar-days" />
                  <p>2019</p>
                </div>
                <div className="long">
                  <i className="fa-solid fa-hourglass" />
                  <p>128min</p>
                </div>
              </div>
              <div className="review">
                <p>
                  <span>IMDB</span> 8.0/10 (650k){" "}
                </p>
              </div>
              <div className="btns">
                <button className="buttons primary">
                  <Link href="/movie">Watch</Link>
                </button>
                <button className="buttons secondary">
                  <Link href="/detail">More details</Link>
                </button>
              </div>
            </div>
            <div className="film-info right">
              <p>
                Daminen Chazelle <span> :Director</span>{" "}
              </p>
              <p>
                Ryal Glosing, Emma Stone <span> :Star</span>{" "}
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                fugiat voluptate similique quam aut modi quis obcaecati velit
                soluta error aspernatur maxime, sequi impedit corrupti neque?
                Sit laudantium necessitatibus tempora.
              </p>
            </div>
          </div>
        </div>
        H
      </div>
    </div>
  );
}

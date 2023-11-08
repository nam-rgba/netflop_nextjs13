import style from "./header.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.navbar}>
        <div className={style.logo}>
          <Link href="/">
            <Image src="/LOGO.png" width={144} height={144} alt="logo" />
          </Link>
        </div>
        <div className={style.navbar_link}>
          <ul>
            <li>
              <div className={style.search}>
                <Link href="/search">
                  <i className="fa-solid fa-magnifying-glass" />
                </Link>
              </div>
            </li>
            <li>
              <Link href="/">Movie</Link>
            </li>
            <li>
              <Link href="/explore">Explore</Link>
            </li>
            <li>
              <Link href="/account">Account</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

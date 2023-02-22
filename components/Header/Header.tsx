import { FC } from "react";
import Link from "next/link";
import style from './Header.module.scss';

const Header: FC = () => {
    return (
        <header className={style['root']}>
            <Link href='/'><h1 className={style['title']}>Rick and Morty</h1></Link>
            <nav className={style['nav']}>
                <ul className={style['nav-list']}>
                    <li className={style['nav-item']}>
                        <Link href='/characters' className={style['nav-link']}>Characters</Link>
                    </li>
                    <li className={style['nav-item']}>
                        <Link href='/episodes' className={style['nav-link']}>Episodes</Link>
                    </li>
                    <li className={style['nav-item']}>
                        <Link href='/location' className={style['nav-link']}>Location</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
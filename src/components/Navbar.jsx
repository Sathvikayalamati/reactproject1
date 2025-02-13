import React from 'react'
import Styles from "./navabr.module.css";
import Logo from './Logo';
import Menu from './Menu';
const Navbar = () => {
  return (
    <section id={Styles.navBlock}>
        <article>
            <Logo/>
            <Menu/>
        </article>
    </section>
  )
}

export default Navbar
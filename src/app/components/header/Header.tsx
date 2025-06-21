'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navClasses = `${styles.nav} ${isMenuOpen ? styles.open : ''}`;

  return (
    <header className={styles.header}>
      <div className={styles.container + ' container'}>
        <div className={styles.headerMain}>
          <section className={styles.leftSection}>
            <button
              className={styles.hamburgerMenu}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label='Toggle menu'
              aria-expanded={isMenuOpen}
            >
              <Image src='/hamburger.svg' alt='Menu' width={20} height={20} />
            </button>
            <Image className={styles.logoImg} src='/logo.svg' alt='Logo' width={20} height={20} />
          </section>

          <div className={styles.logo}>
            <Link href='/'>LOGO</Link>
          </div>

          <div className={styles.headerIcons}>
            <button>
              <Image src='/search.svg' alt='Search' width='24' height='24' />
            </button>
            <button>
              <Image src='/heart.svg' alt='Favorites' width='24' height='24' />
            </button>
            <button>
              <Image src='/bag.svg' alt='Cart' width='24' height='24' />
            </button>
            <button className={styles.mobileOnly}>
              <Image src='/profile.svg' alt='Profile' width='24' height='24' />
            </button>
            <select className={styles.mobileOnly} name='language'>
              <option value='en'>ENG</option>
            </select>
          </div>
        </div>

        <nav className={navClasses}>
          <Link href='/'>SHOP</Link>
          <Link href='/'>SKILLS</Link>
          <Link href='/'>ABOUT</Link>
          <Link href='/'>STORIES</Link>
          <Link href='/' className={styles.mobileOnly}>
            PROFILE
          </Link>
          <Link href='/'>CONTACT US</Link>
          <select className={styles.mobileOnly} name='language'>
            <option value='en'>ENG</option>
          </select>
        </nav>
      </div>
    </header>
  );
}

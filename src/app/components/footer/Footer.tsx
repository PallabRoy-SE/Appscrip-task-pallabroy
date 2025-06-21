'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css'; // We will update this file next

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 769);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSection = (section: string) => {
    if (isMobile) {
      setOpenSection(openSection === section ? null : section);
    }
  };

  const getCollapsibleClasses = (section: string) =>
    `${styles.collapsibleContent} ${!isMobile || openSection === section ? styles.open : ''}`;

  return (
    <footer className={styles.footer}>
      <div className={`container`}>
        {/* Top Section */}
        <div className={styles.topSection}>
          <div className={styles.newsletter}>
            <h4 className={styles.title}>Be the first to know</h4>
            <p>Sign up for updates from mettā muse.</p>
            <div className={styles.subscribeForm}>
              <input type='email' placeholder='Enter your e-mail...' />
              <button>Subscribe</button>
            </div>
          </div>
          <hr className={styles.divider + ' ' + styles.mobileOnly} />
          <div className={styles.contactInfo}>
            <h4 className={styles.title}>Contact Us</h4>
            <p>+44 221 133 5360</p>
            <p className={styles.customerCareEmail}>customercare@mettamuse.com</p>
            <hr className={styles.divider + ' ' + styles.mobileOnly} />
            <h4 className={styles.title + ' ' + styles.customerCareCurrency}>Currency</h4>
            <div className={styles.currency}>
              <Image src='/us.svg' className={styles.flag} width={20} height={20} alt='US Flag' />
              <span>*</span>
              <span>USD</span>
            </div>
            <p className={styles.transactionNote}>
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div>

        <hr className={styles.divider + ' ' + styles.dividerSecondary} />

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.linksColumn}>
            <h4 className={styles.collapsibleHeader} onClick={() => toggleSection('muse')}>
              mettā muse
            </h4>
            <ul className={getCollapsibleClasses('muse')}>
              <li>
                <Link href='#'>About Us</Link>
              </li>
              <li>
                <Link href='#'>Stories</Link>
              </li>
              <li>
                <Link href='#'>Artisans</Link>
              </li>
              <li>
                <Link href='#'>Boutiques</Link>
              </li>
              <li>
                <Link href='#'>Contact Us</Link>
              </li>
              <li>
                <Link href='#'>EU Compliances Docs</Link>
              </li>
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h4 className={styles.collapsibleHeader} onClick={() => toggleSection('quick-links')}>
              Quick Links
            </h4>
            <ul className={getCollapsibleClasses('quick-links')}>
              <li>
                <Link href='#'>Orders & Shipping</Link>
              </li>
              <li>
                <Link href='#'>Join/Login as a Seller</Link>
              </li>
              <li>
                <Link href='#'>Payment & Pricing</Link>
              </li>
              <li>
                <Link href='#'>Return & Refunds</Link>
              </li>
              <li>
                <Link href='#'>FAQs</Link>
              </li>
              <li>
                <Link href='#'>Privacy Policy</Link>
              </li>
              <li>
                <Link href='#'>Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h4 className={styles.collapsibleHeader} onClick={() => toggleSection('follow')}>
              Follow Us
            </h4>
            <div className={getCollapsibleClasses('follow')}>
              <div className={styles.socialIcons}>
                <a href='#' aria-label='Instagram'>
                  <Image src='/insta.svg' alt='Instagram' width={32} height={32} />
                </a>
                <a href='#' aria-label='LinkedIn'>
                  <Image src='/linkdin.svg' alt='Instagram' width={32} height={32} />
                </a>
              </div>
            </div>
            <div className={styles.paymentSection}>
              <h4 className={styles.title}>mettā muse Accepts</h4>
              <div className={styles.paymentIcons}>
                <Image src='/gpay.svg' width={50} height={30} alt='G Pay' />
                <Image src='/master.svg' width={50} height={30} alt='MasterCard' />
                <Image src='/paypal.svg' width={50} height={30} alt='PayPal' />
                <Image src='/amex.svg' width={50} height={30} alt='Amex' />
                <Image src='/apple.svg' width={50} height={30} alt='Apple Pay' />
                <Image src='/opay.svg' width={50} height={30} alt='O Pay' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>Copyright © {new Date().getFullYear()} mettāmuse, Pallab Roy.</div>
    </footer>
  );
}

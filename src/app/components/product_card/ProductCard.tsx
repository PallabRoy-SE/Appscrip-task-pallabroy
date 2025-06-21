'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/lib/types';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }: { product: Product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const isOutOfStock = !product.inStock;

  return (
    <div className={styles.card}>
      <div className={`${styles.imageContainer} ${isOutOfStock ? styles.outOfStockImage : ''}`}>
        {product.isNew && <div className={styles.newLabel}>NEW PRODUCT</div>}

        <Image
          src={product.image}
          alt={product.title}
          fill
          style={{ objectFit: 'contain', padding: '1rem' }}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />

        {isOutOfStock && (
          <div className={styles.outOfStockOverlay}>
            <span>OUT OF STOCK</span>
          </div>
        )}
      </div>
      <div className={styles.info}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{product.title}</h2>
        </div>
        <div className={styles.details}>
          <p className={styles.priceInfo}>Sign in or Create an account to see pricing</p>
          <button
            className={styles.wishlistButton}
            onClick={() => setIsWishlisted(!isWishlisted)}
            aria-label='Toggle Wishlist'
          >
            <Image src={isWishlisted ? '/heart_active.svg' : '/heart.svg'} width={24} height={24} alt='Favorite' />
          </button>
        </div>
      </div>
    </div>
  );
}

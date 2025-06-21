'use client';

import { useState, useEffect, useMemo } from 'react';
import { Product } from '@/lib/types';
import Toolbar from '@/app/components/toolbar/Toolbar';
import FilterSidebar from '@/app/components/filter_sidebar/FilterSidebar';
import ProductGrid from '@/app/components/product_grid/ProductGrid';
import styles from './ProductList.module.css';

interface ProductListProps {
  initialProducts: Product[];
}

// Function to add simulated data to products
const addProductStates = (products: Product[]): Product[] => {
  return products.map((product, index) => ({
    ...product,
    // First 2 products are "New"
    isNew: index < 2,
    // Every 7th product is "Out of Stock"
    inStock: (index + 1) % 7 !== 0,
  }));
};

export default function ProductList({ initialProducts }: ProductListProps) {
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [sortOption, setSortOption] = useState('RECOMMENDED');

  const productsWithStates = useMemo(() => addProductStates(initialProducts), [initialProducts]);

  const [filteredProducts, setFilteredProducts] = useState(productsWithStates);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) setIsFilterVisible(false);
      else setIsFilterVisible(true);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sortedProducts = useMemo(() => {
    let sorted = [...filteredProducts];
    switch (sortOption) {
      case 'PRICE : HIGH TO LOW':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'PRICE : LOW TO HIGH':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'NEWEST FIRST':
        sorted.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }
    return sorted;
  }, [filteredProducts, sortOption]);

  const filterWrapperClasses = `${styles.filters} ${isFilterVisible ? styles.visible : styles.hidden}`;

  return (
    <section>
      <Toolbar
        itemCount={sortedProducts.length}
        isFilterVisible={isFilterVisible}
        onToggleFilter={() => setIsFilterVisible(!isFilterVisible)}
        sortOption={sortOption}
        onSortChange={setSortOption}
      />
      <div className={styles.mainContent}>
        <div className={filterWrapperClasses}>
          <FilterSidebar />
        </div>
        <div className={styles.products}>
          <ProductGrid products={sortedProducts} />
        </div>
      </div>
    </section>
  );
}

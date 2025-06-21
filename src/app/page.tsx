import { Product } from '@/lib/types';
import ProductList from '@/app/components/product_list/ProductList';
import styles from './page.module.css';

// Data fetching function
async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) throw new Error('Failed to fetch products');
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div className='container'>
      <div className={styles.hero}>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>Browse our collection of high-quality products, from the latest electronics to stylish apparel.</p>
      </div>

      <ProductList initialProducts={products} />
    </div>
  );
}

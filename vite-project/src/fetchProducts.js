import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

const fetchProducts = async () => {
  try {
    const productsCollectionRef = collection(db, 'products');
    const productsSnapshot = await getDocs(productsCollectionRef);
    const productsData = productsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return productsData;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export default fetchProducts;

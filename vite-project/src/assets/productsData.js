import { collection, writeBatch, doc } from 'firebase/firestore';
import { db } from '../firebase'; 
import productsData from './productsData.json';

const saveProductsToFirestore = async () => {
  try {
    const productsCollectionRef = collection(db, 'products');
    const batch = writeBatch(db);

    for (const product of productsData) {
      // Validación básica de producto
      if (product.id && product.name && product.price) {
        const docRef = doc(productsCollectionRef);
        batch.set(docRef, product);
      } else {
        console.warn('Producto inválido:', product);
      }
    }

    await batch.commit();
    console.log('Products saved to Firestore successfully!');
  } catch (error) {
    console.error('Error saving products to Firestore:', error);
  }
};

export default saveProductsToFirestore;

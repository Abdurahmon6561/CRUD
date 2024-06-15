import ProductsTable from '../components/ProductsTable';
import useGetProducts from '../hooks/useGetProducts';
import CreateProduct from '../components/CreateProduct';


function ProductPage() {
 const products = useGetProducts()

  return (
    <div className='mt-4'>
      <CreateProduct/>
    <ProductsTable products={products}/>
    </div>
  );
}

export default ProductPage;

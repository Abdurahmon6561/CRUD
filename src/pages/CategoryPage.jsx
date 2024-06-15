import CreateCategory from "../components/categories/CreateCategory"
import CategoryTable from "../components/categories/CategoryTable"
import useGetCategories from "../hooks/useGetCategories";




const CategoryPage = () => {

 const products = useGetCategories()


  return (
    <div className=" mt-4">
    <CreateCategory/>
  <CategoryTable products={products}/>
  </div>
  )
}

export default CategoryPage
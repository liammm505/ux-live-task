import categories from "../constants/categories"
import products from "../constants/products"
import './App.css'

function App() {

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <div className="h-32 flex justify-center items-center">
        <h1 className="text-3xl font-bold">Minviro Starter</h1>
      </div>

      <div className="flex h-full w-full justify-around gap-5">
        <div className="flex flex-col h-full w-1/3">
          <div className="flex justify-center w-full underline">
            Products
          </div>
          <div>
            {products.map(product => (
              <div key={product["Product Name"]} className="border mb-2">
                <h3 className="text-lg">
                  {product["Product Name"]}
                </h3>
                <ul>
                  <li><span className="font-semibold">Description:</span> {product.Description}</li>
                  <li><span className="font-semibold">Category:</span> {product.Category ? product.Category : "missing"}</li>
                  <li><span className="font-semibold">Weight (kg):</span> {product["Weight (kg)"]}</li>
                  <li><span className="font-semibold">Height (cm):</span> {product["Height (cm)"]}</li>
                  <li><span className="font-semibold">Width (cm):</span> {product["Width (cm)"]}</li>
                  <li><span className="font-semibold">Depth (cm):</span> {product["Depth (cm)"]}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col h-full w-1/3">
          <div className="flex justify-center w-full underline">
            Categories
          </div>
          <div className="gap-2">
            {categories.map(category => (
              <div key={category["Category"]} className="border mb-2">
                <h3 className="text-lg">
                  {category["Category"]}
                </h3>
                <ul>
                  <li><span className="font-semibold">Store Area:</span> {category["Store Area"]}</li>
                  <li><span className="font-semibold">Area Length:</span> {category["Area Length (cm)"]}</li>
                  <li><span className="font-semibold">Area Width (kg):</span> {category["Area Width (cm)"]}</li>
                  <li><span className="font-semibold">Area Height (cm):</span> {category["Area Height (cm)"]}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  )
}

export default App

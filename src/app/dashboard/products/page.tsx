import { ProductCard } from "@/products";
import { products } from "@/products/data/products";



export default function NamePage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {
            products.map( prodcut => (
                <ProductCard key={prodcut.id} {...prodcut} />
            ))
        }
    </div>
  );
}
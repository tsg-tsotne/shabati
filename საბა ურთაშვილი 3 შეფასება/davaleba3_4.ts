interface Product {
  code: number;
  name: string;
  price: number;
  createyear: number;
}

type EditProduct = Omit<Product, "code" | "createyear" | "name">;

const productItem: EditProduct = {
  price: 2500
};

console.log(productItem.price); 

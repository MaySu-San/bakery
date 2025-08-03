import { categoryRender, createNewCategoryBtn } from "./category";
import { categories, products } from "./constants";
import { createProductCard, productRender } from "./product";
import { categoryList, productList } from "./selectors";

const initialRender = () => {
    categoryRender(categories);
    productRender(products);
};
export default initialRender;

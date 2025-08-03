import { createNewCategoryBtn } from "./category";
import { categories, products } from "./constants";
import { createProductCard, productRender } from "./product";
import {
  categoryList,
  productList,
  productTemplate,
  themeToggleDarkIcon,
  themeToggleLightIcon,
} from "./selectors";

export const handleTheme = () => {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
};

export const handleCreateCategoryForm = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newCategory = {id:categories[categories.length-1].id+1, title: formData.get("new_category_name")};
  categoryList.append(createNewCategoryBtn(newCategory));
  e.target.reset();
  document.querySelector(`[data-drawer-hide="create-category-drawer"]`).click();
};

export const handleCreateProductForm = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  // console.log(formData.get("new_product_name"));
  // console.log(formData.get("new_product_category"));
  // console.log(formData.get("new_product_price"));
    const imageFile = formData.get("new_product_image");
    const imageURL = URL.createObjectURL(imageFile);



  productList.append(
    createProductCard({
      title: formData.get("new_product_name"),
      category: formData.get("new_product_category"),
      price: formData.get("new_product_price"),
      image: imageURL,
    })
  );
  // console.log(productCard);
  e.target.reset();
  document.querySelector(`[data-drawer-hide="create-product-drawer"]`).click();
};

export const handleSearchForm = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  console.log(formData.get("search"));
  // e.target.reset();
};

export const handleSearchInput = (e) => {
  // if(e.key==="Enter"){
  // console.log(e.target.value);

  // }
  const q= e.target.value.toLowerCase();
  console.log(q);
  productRender(products.filter(
    (el) => 
      el.title.toLowerCase().search(q) != -1
    
  ));
}

export const handleCategoryList=(e) => {
  const clickedCategory=e.target.innerText;
  categoryList.childNodes.forEach((el) => {
    el.classList.replace("text-blue","text-black");
    el.classList.replace("border-blue-300","border-transparent");
    el.classList.replace("bg-blue-50","bg-transparent");

  });
  e.target.classList.replace("text-black","text-blue");
  e.target.classList.replace("border-transparent","border-blue-300");
  e.target.classList.replace("bg-transparent","bg-blue-50");


  if(clickedCategory==="All"){
    productRender(products);
  }else{ 
    productRender(products.filter(
      (el) => el.category.toLowerCase() === clickedCategory.toLowerCase()
    ));
  }
}
import {
    handleCategoryList,
  handleCreateCategoryForm,
  handleCreateProductForm,
  handleSearchForm,
  handleSearchInput,
  handleTheme,
} from "./handlers";
import {
    categoryList,
  createCategoryForm,
  createProductForm,
  searchForm,
  searchInput,
  themeToggleBtn,
} from "./selectors";

const listener = () => {
  themeToggleBtn.addEventListener("click", handleTheme);
  createCategoryForm.addEventListener("submit", handleCreateCategoryForm);
  createProductForm.addEventListener("submit", handleCreateProductForm);
//   searchForm.addEventListener("submit", handleSearchForm);
  searchInput.addEventListener("keyup", handleSearchInput);
  categoryList.addEventListener("click", handleCategoryList);
};
export default listener;

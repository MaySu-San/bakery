import { categoryList } from "./selectors";

export const createNewCategoryBtn=(category) => {
    const btn=document.createElement("button");
    btn.className="text-end bg-transparent text-black text-sm border border-transparent rounded-lg px-4 py-2 hover:bg-blue-50 hover:border-blue-300 active:bg-blue-50 active:border-blue-300";
    btn.innerText=category.title;
    btn.setAttribute("data-category-id", category.id);
    return btn; 
}

export const categoryRender=(inputCategories) => {
    categoryList.innerHTML=""; // Clear previous categories
    inputCategories.forEach((el) =>
    {
        if(el.id===0){
            const btn=createNewCategoryBtn(el);
            btn.classList.replace("bg-transparent","bg-blue-50");
            btn.classList.replace("border-transparent","border-blue-300");
            btn.classList.replace ("text-black","text-blue");   
            categoryList.append(btn)
        }else{
        categoryList.append(createNewCategoryBtn(el))
        }
    }
    );
    
      
}
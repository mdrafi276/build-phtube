const clickHandler = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await response.json();
  const tabContainer = document.getElementById("categorys");
  const categorys = data.data;
  categorys.forEach((ele) => {
    const li = document.createElement("li");
    li.classList =
      "bg-[#25252533] py-2 px-4 rounded-md font-semibold hover:bg-[#FF1F3D] hover:text-white cursor-pointer";
    li.innerHTML = `
        <a onclick="handleCategor(${ele.category_id})">${ele.category}</a>
        `;
    tabContainer.appendChild(li);
  });
};

const handleCategor = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const data = await res.json();
  const category = data.data;
  // console.log(category);
  const categoryCardContainer = document.getElementById("category-card");
  categoryCardContainer.textContent = '';
  category.forEach((element) => {
    const div = document.createElement("div");
    div.classList = "card bg-base-100 shadow-xl rounded-md";
    // let img = if()
    div.innerHTML = `
        <figure class =" h-52  "><img class="h-full w-full" src=${element.thumbnail} /></figure>
          <div class="p-5">
            <div class="flex gap-3">
            <div class="">
                <img class="rounded-full w-10 h-10" src=${element.authors[0].profile_picture} alt="" />
            </div>
            <div class="">
                <h2 class="font-semibold">
                ${element.title}
                </h2>
                <h2 class="text-[#171717B2] font-medium mt-2">${element.authors[0].profile_name} <span>${element.authors[0].verified ? `<span><img class=" inline-block" src="./fi_10629607.jpg" alt=""></span> `: ''}</span></h2>
                <p class="text-[#171717B2] font-medium">${element.others.views}</p>   
            </div>
            </div>
          </div>
        `;
    categoryCardContainer.appendChild(div);
  });
  
};


clickHandler();
handleCategor(1000);
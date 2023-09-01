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
  const CardContainerText = document.getElementById("category-card");
  CardContainerText.textContent = '';
  if (category.length === 0) {
    CardContainerText.textContent = '';
    CardContainerText.classList.remove('grid');
    const conditionDiv = document.createElement('div');
    conditionDiv.innerHTML = `
      <div class="hero mt-28 ">
  <div class="hero-content text-center">
    <div class="max-w-md">
    
    <figure class="flex justify-center  mb-8">
        <img  src="./Icon.png" alt="">
    </figure>
      <h1 class="text-5xl font-bold">Oops!! Sorry, There is no content here</h1>
      
    </div>
  </div>
</div>

      `
      CardContainerText.appendChild(conditionDiv);

  }
  else {
    CardContainerText.textContent = '';
    CardContainerText.classList.add('grid');

    category.forEach((ele) => {
      console.log(ele)
      const div = document.createElement("div");
      div.classList = "card bg-base-100 shadow-xl rounded-md";
      // let img = if()
      div.innerHTML = `
        
        <figure class ="  h-52 relative ">
        <div><img  class="" src=${ele.thumbnail} /> </div>
          <div> 
          <h2 class = "absolute bottom-0  right-0 bg-[#171717c4] text-white px-1 py-1 rounded"> 2 houre 5 second </h2>
          </div>
        </figure>
            
          
            <div class="p-5">
              <div class="flex gap-3">
              <div class="">
                  <img class="rounded-full w-10 h-10" src=${ele.authors[0].profile_picture} alt="" />
              </div>
              <div class="">
                  <h2 class="font-semibold">
                  ${ele.title}
                  </h2>
                  <h2 class="text-[#171717B2] font-medium mt-2">${ele.authors[0].profile_name} <span>${ele.authors[0].verified ? `<span><img class=" inline-block" src="./fi_10629607.jpg" alt=""></span> ` : ''}</span></h2>
                  <p class="text-[#171717B2] font-medium">${ele.others.views}</p>   
              </div>
              </div>
            </div>
          `;
      CardContainerText.appendChild(div);
    });
  }

};


clickHandler();
handleCategor(1000);

const handleCatagory = async () => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data = await response.json();
    const tabContainer = document.getElementById('caragories-tab-container');
    const trimData = data.data;
    trimData.forEach(category => {
        console.log(category)
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick ='handleLoadNews()' class="tab  "> ${category.category}</a>
        `;
        tabContainer.appendChild(div);
        
    });
  
    
    // data.data.forEach((category) => {
    //     console.log(category.category)
        
    //     const div = document.createElement('div');
    //     div.innerHTML = `
    //     <a class="tab  "> ${category.category}</a>
    //     `;
    //     tabContainer.appendChild(div);
        
    // });

};
const handleLoadNews = async (category) =>{
    console.log(category)
}
handleCatagory(); 



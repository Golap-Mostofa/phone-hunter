
 const buttonHendelar = ()=>{
    const inputFilt = document.getElementById('input-field')
    const inputvalu = inputFilt.value;
    inputFilt.value = '';

    const error = document.getElementById('error')
    if(inputvalu == ''){
        
        error.style.display = 'block'
        error.innerText = 'pleash valid input'
    }else{
        error.style.display = 'none'
        const thamnail = document.getElementById('thamnail')
        thamnail.style.display = 'none'

        const url = `https://openapi.programming-hero.com/api/phones?search=${inputvalu}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>hendelClick(data.data))
    }
   
 }

 const hendelClick = (prodacts)=>{
     const container = document.getElementById('container')
     container.textContent = '';

     const error = document.getElementById('error')
     if(prodacts.length == 0){
        error.style.display = 'block'
        error.innerText = 'No Result found'
        const thamnail = document.getElementById('thamnail')
        thamnail.style.display = 'block'
     }else{
        prodacts.forEach(prodact => {
            
            // console.log(prodact);
            const div = document.createElement('div')
            div.classList.add('col-lg-4')
            div.classList.add('col-sm-12')
           
            
            div.innerHTML= `
            <div class=" ">
                 <img  src="${prodact.image}" class="img-fluid" alt="...">
                 <div class="card-body">
                   <h5 class="card-title text-primary">${prodact.phone_name}</h5>
                   <p class="card-text text-white">${prodact.slug}</p>
    
                   <button class="btn btn-success" onclick="prodactInfo('${prodact.slug}')">About device</button>
             </div>      
               
            `;
           
            container.appendChild(div)
        
        });
     }
    
 }


 const prodactInfo = (name)=>{
    detelsUrl = `https://openapi.programming-hero.com/api/phone/${name}`
    fetch(detelsUrl)
    .then(res=>res.json())
    .then(data=>cardDetels(data.data))
 }



 const cardDetels = (detels)=>{
    const cardinfo = detels.mainFeatures
   
    const detelsContainer = document.getElementById('detels-card')
    detelsContainer.textContent=''
        // card detells
        const creatDiv = document.createElement('div')
        
        creatDiv.classList.add('row')
       
        creatDiv.innerHTML = `
            <div class="col">
                <img width="250px" src="${detels.image}" alt="">
            </div>
            <div class="text-white col">
            <p> memory: ${cardinfo.memory}</p>
                <p>storage: ${cardinfo.storage}</p>
                
                <p>chipSet:${cardinfo.chipSet}</p>
                <p>displaySize: ${cardinfo.displaySize}</p>
                <button class="btn btn-success">BY NOW</button>
            </div> 
                `
        detelsContainer.appendChild(creatDiv)
         console.log(detels);
 }
 
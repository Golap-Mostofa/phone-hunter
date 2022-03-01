
 const buttonHendelar = ()=>{
    const inputFilt = document.getElementById('input-field')
    const inputvalu = inputFilt.value;
    inputFilt.value = '';
    if(inputvalu == ''){
        console.log('rong input');
    }else if(inputFilt.length === 0){
        console.log('pleash carent value');

    }else{
        const url = `https://openapi.programming-hero.com/api/phones?search=${inputvalu}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>hendelClick(data.data))
    }
   
 }

 const hendelClick = (prodacts)=>{
     const container = document.getElementById('container')
     container.textContent = '';
    prodacts.forEach(prodact => {
        // console.log(prodact);
        const div = document.createElement('div')
        div.classList.add('col-lg-4')
        div.classList.add('col-sm-12')
       
        
        div.innerHTML= `
        <div class=" ">
             <img  src="${prodact.image}" class="img-fluid" alt="...">
             <div class="card-body">
               <h5 class="card-title text-white">${prodact.phone_name}</h5>
               <p class="card-text text-white">${prodact.slug}</p>

               <button class="btn btn-success" onclick="prodactInfo('${prodact.slug}')">About device</button>
         </div>      
           
        `;
       
        container.appendChild(div)
    });
 }


 const prodactInfo = (name)=>{
   
    detelsUrl = `https://openapi.programming-hero.com/api/phone/${name}`
    fetch(detelsUrl)
    .then(res=>res.json())
    .then(data=>cardDetels(data.data))
 }

 const cardDetels = (detels)=>{
    const cardinfo = detels.mainFeatures
    console.log(cardinfo);
     const detelsContainer = document.getElementById('detels-card')
        // console.log(card);
        const creatDiv = document.createElement('div')
        creatDiv.classList.add('d-flex')
        creatDiv.classList.add('justify-content-evenly')
        creatDiv.innerHTML = `
            <div class="">
                <img width="250px" src="${detels.image}" alt="">
            </div>
            <div class="text-white ">
            <p> memory:${cardinfo.memory}</p>
                <p>${cardinfo.storage}</p>
                
                <p>chipSet:${cardinfo.chipSet}</p>
                <p>chipSet:${cardinfo.displaySize}</p>
                <button class="btn btn-success">BY NOW</button>
            </div> 
                `
        detelsContainer.appendChild(creatDiv)
        
 }
 
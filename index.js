const googlesheetsID = "1evyjvVPsZWZI4VTV1P_4DDzbW4rUbK2HGXVUJQ_3iUA"

const review_page_container = document.querySelector("#review_page_container")

//https://docs.google.com/spreadsheets/d/1evyjvVPsZWZI4VTV1P_4DDzbW4rUbK2HGXVUJQ_3iUA/edit?usp=sharing


const url = `https://docs.google.com/spreadsheets/d/${googlesheetsID}/gviz/tq?`;

const reviewArray = []

fetch(url)
.then(res =>res.text())
.then (data =>{
    const json = JSON.parse(data.substr(47).slice(0, -2))
   json.table.rows.forEach(row=>{
           reviewArray.push({
               name: row.c[1].v,
               email: row.c[2].v,
               phone: row.c[3].v,
               message: row.c[4].v,
               review_image: row.c[5].v 
           })
   })  
   
   reviewArray.forEach(review=>{

    review_page_container.innerHTML +=  `
       <div class="box_review">
        <h4>${review.name}</h4>
        <p>${review.email}</p>
        <p>${review.phone}</p>
        <p>${review.message}</p>
        <img style="height:175px; width:175px;" src="${review.review_image}" />
       </div>
  `
})
})



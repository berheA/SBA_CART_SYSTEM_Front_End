 fetch("https://fakestoreapi.com/products").then((data)=>{
   //console.log(data);
   return data.json();// convert to object
  }).then((objectData)=>{
 console.log(objectData);
   let tableData="";

   objectData.map((values)=>{
       tableData+=`<tr>
        <td>${values.id}</td>
       <td>${values.title}</td>
       <td>${values.description}</td>
       <td>${values.price}</td>
       <td>${values.category}</td>
       <td>${values.rating.rate}</td>
       <td><img src="${values.image}"></td>
     </tr>`;
   });
   document.getElementById("table_body").innerHTML=tableData;

  }).catch((err)=>{
   console.log(err)
  });
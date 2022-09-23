const form=document.getElementById("form");
     form.addEventListener("submit", function(e){
        e.preventDefault();
    
        const payLoad= new FormData(form);
        let para=new URLSearchParams(payLoad);
        //console.log([...payLoad]);
    
        fetch("https://fakestoreapi.com/products/",{
            method:"POST",
            body: para,
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            let tableData="";
            const {title, description}=data;
            console.log(data.title)
            
            tableData+=`<tr>
                <td>${data.id}</td>
                  <td>${data.title}</td>
                  <td>${data.description}</td>
                  <td>${data.price}</td>
                <td>${data.category}</td>
              </tr>`;
    
              const rowHeader=`
            <tr>
                <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>
            </tr>`;
              document.getElementById("displayRow").innerHTML=rowHeader;
            document.getElementById("table_body").innerHTML=tableData;
        }
            )
        .catch(err=>console.log(err))
     })
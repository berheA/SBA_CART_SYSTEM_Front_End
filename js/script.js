

          async function getProduct(id) {
            
            fetch("https://fakestoreapi.com/products/" + id).then((data) => {
              return data.json();// convert to object
            }).then((objectData) => {
              console.log(objectData);
              let tableData = "";
              const { title, description } = objectData;
              // objectData.map((values)=>{
              tableData += `<tr>
                  <td>${objectData.id}</td>
                <td>${objectData.title}</td>
                <td>${objectData.description}</td>
                <td>${objectData.price}</td>
                <td>${objectData.category}</td>
                <td><img src="${objectData.image}"></td>
              </tr>`;
              //});
              const rowHeader = `
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>
              <th scope="col">Image</th>
            </tr>`;
            
            document.querySelector("#displayRow").innerHTML = rowHeader;
              document.querySelector("#table_body").innerHTML = tableData;
            }).catch((err) => {

              if (isNaN(id * 2)) {
                document.getElementById("displayRow").innerHTML = `<p> Sorry! ${id} is not a valid Id. Id should be a number</p>`;
                document.getElementById("table_body").innerHTML = "";
              }
              else {
                document.getElementById("displayRow").innerHTML = `<p> Sorry! Product with id ${id} is not Exist</p>`;
                document.getElementById("table_body").innerHTML = "";
              }

            });
        
          }
          function insider() {
            const input = document.getElementById("inputTitle").value;
            if(input.length==0){
              document.getElementById("p1").innerHTML="please enter id";
              document.getElementById("p1").style.color="red";
            }
            else{
              document.getElementById("p1").innerHTML="";
              getProduct(input);
            }
            
          
          }
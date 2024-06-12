var productNameInput = document.getElementById('productName')
var productPriceInput = document.getElementById('productPrice')
var productCategoryInput = document.getElementById('productCategory')
var productDescriptionInput = document.getElementById('productDescription')
var productImageInput = document.getElementById('productImage')

var productContainer = []


function Addproduct() {
    
    product ={
        name :productNameInput.value,
        price :productPriceInput.value,
        category: productCategoryInput.value ,
        desc :productDescriptionInput.value,
        image :'images/bne.gpj',
    }
   productContainer.push(product)
   clearForm();
   displayProduct();
   console.log(productContainer);
  
}
function displayProduct() {
  var  cartona =  '';
    for (let i = 0; i < productContainer.length; i++) {
      cartona +=` <div class="col-md-2 col-sm-6">
      <div class="product">
        <img src="img/WhatsApp Image 2024-06-02 at 22.00.45_86758ff8.jpg" class="w-100" alt="product image" >
        <h2 class="h4 mt-3"> loka s22</h2>
        <p class="text-secondary mb-2">Lorem, ipsum.</p>
        <h3 class="h5"> <span class="fw-bolder">Price:</span> 4000$</h3>
        <h3 class="h5"> <span class="fw-bolder">Category:</span> Tv</h3>
      </div>
      </div>`


    }
    document.getElementById('rowData').innerHTML =cartona
}

function clearForm () {
   
    productNameInput.value = null;
    productPriceInput.value =null;
    productCategoryInput.value =null;
    productDescriptionInput.value=null;
    productImageInput.value = null;
}


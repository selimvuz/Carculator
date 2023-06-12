import React from 'react';
import './Pages.css'

function Products() {
  function getCurrentURL () {
    return window.location.href
  }
  
  // Example
  var url = getCurrentURL()
  if(url === "http://localhost:3000/about") {
    var home = document.getElementById("home");
    var speed = document.getElementById("speedContainer");
    if (home !== "undefined" && home !== null &&
        speed !== "undefined" && speed !== null) {
      home.style.visibility = "hidden";
      speed.style.visibility = "hidden";
    }
  }
  return (
    <div className='about'>
      <h1 id='headline'>About Project</h1>
      <p id='aboutText'>
  Welcome to Carculator - Your Car Price Estimator!<br /><br />
  
  Carculator is a powerful tool designed to provide you with an estimated price range for a car based on various properties and features. Whether you are looking to buy a new car or sell your existing one, Carculator can help you make informed decisions.<br /><br />
  
  Using our intuitive interface, you can input specific details about the car you are interested in. We take into account essential factors such as color, fuel type, manufacturing year, selling location, and maximum speed. By considering these properties, our algorithm analyzes historical data, market trends, and other relevant information to generate a reliable price estimate.<br /><br />
  
  The color of a car can impact its desirability and market value. Certain colors may be more popular or rare, which can affect the price range. Fuel type is another crucial aspect as different fuel options, such as gasoline, diesel, or electric, can influence the overall cost of owning and maintaining a vehicle.<br /><br />
  
  Manufacturing year is a significant factor that reflects a car's age and technological advancements. Newer cars often come with modern features and improved performance, which may affect their price range. Buying location is also considered as prices can vary based on regional factors, such as taxes, import fees, and demand.<br /><br />
  
  Additionally, the maximum speed of a car can be an important consideration for buyers. Performance enthusiasts may be willing to pay a premium for vehicles with higher top speeds and enhanced acceleration capabilities.<br /><br />
  
  Once you provide all the necessary details, Carculator will calculate a price range, giving you an idea of what to expect when buying or selling a car with similar specifications. It's important to note that the estimate serves as a guide and may vary based on additional factors like mileage, condition, optional features, and market fluctuations.<br /><br />
  
  We strive to provide you with the most accurate estimates possible, helping you make well-informed decisions and navigate the car market with confidence. Start using Carculator today and discover the approximate value of your dream car!
</p>


    </div>
  );
}

export default Products;

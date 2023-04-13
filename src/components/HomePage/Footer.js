import React from 'react'
import bkash from "../../assets/images/bkash.png"
import pic1 from "../../assets/images/pic1.png"
import pic2 from "../../assets/images/pic2.png"
import pic4 from "../../assets/images/pic4.png"
import pic5 from "../../assets/images/pic5.png"
import pic6 from "../../assets/images/pic6.png"
import pic7 from "../../assets/images/pic7.png"
import pic8 from "../../assets/images/pic8.png"
import pic9 from "../../assets/images/pic9.png"

import logo from "../../assets/images/logo.png"

const Footer = () => {
  return (
    <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<img src={logo} alt="" className='image_logo' />
  	 			<div className='paragraph_container'>
           <p>Jhelpar Mosjid Market, 1 No. Road, Kalbari, Basaboo, Dhaka-1214, Bangladesh</p>
          <p> +88 01771-562929</p>
          <p>tourplansystem@gmail.com</p>
          </div>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>QUICK LINKS</h4>
  	 			<ul>
  	 				<li><a href="#"> Home</a></li>
  	 				<li><a href="#">About US</a></li>
  	 				<li><a href="#">Packages</a></li>
  	 				<li><a href="#">Tourist Place</a></li>
  	 				<li><a href="#">Privacy Policy</a></li>
             <li><a href="#"> Contact Us</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>PAYMENT GATEWAY</h4>
          <div className='icon'>
             <div><img src={pic1} alt="" /></div>
             <div><img src={bkash} alt="" /></div>
             <div><img src={pic2} alt="" /></div>
             <div><img src={pic4} alt="" /></div>
             <div><img src={pic5} alt="" /></div>
             <div><img src={pic6} alt="" /></div>
             <div><img src={pic7} alt="" /></div>
             <div><img src={pic8} alt="" /></div>
             <div><img src={pic9} alt="" /></div>


          </div>
  	 		
        
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  )
}

export default Footer
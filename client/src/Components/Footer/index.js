import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../Footer/footer.css'



const Footer = () => {
    return (
        <MDBFooter color="peach-gradient" className="foot font-small pt-7 mt-4">
   
         
        
        <div className="footer-copyright text-center py-4">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Perfect Server <a href="https://www.MDBootstrap.com"> </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    )
}

export default Footer
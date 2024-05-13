import { Footer, Navbar } from "flowbite-react";
import React, { Component } from "react";

class Myfooter  extends Component  {
  render() {
    return (
      <div>
        <Navbar>
          <div><h1>Tugas Zaldi</h1></div>
          <div>
            <p>mengerjakan tugas sanbercode</p>
          </div>
        </Navbar>

        <Footer>
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </Footer>
      </div>
    );
  }
}

export default Myfooter;

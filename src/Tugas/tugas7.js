import React from "react";
import { Card } from "flowbite-react";

class tugas7 extends React.Component {
  render() {
    return (
        <div className="container mx-auto">
         <div className="h3">Tugas7</div>
              <Card className="gap-4">
                <h1 className="title">Hi, Saya John</h1>
                <hr />
                <p className="paragraph">
                  Saya dari Kelas 12 sudah berhasil menginstall React
                </p>
              </Card>
              <br></br>
            <Card className="gap-4">
              <h1 className="title">Hi, Saya John</h1>
              <hr />
              <ul>
                <li><b>nama: </b>Zaldi</li>
                <li><b>Email: </b>zaldizaldizladi032@gmail.com</li>
              </ul>
            </Card>
          </div>
      
    );
  }
}

export default tugas7;

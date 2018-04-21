import React, { Component } from 'react';
import logo from './logo.svg';
import image1 from './1.jpg'
import image2 from './2.jpg'
import image3 from './3.jpg'
import image4 from './4.jpg'
import image5 from './5.jpg'
import './App.css';
import {Glyphicon ,Row,Col, Button,PageHeader } from 'react-bootstrap';

class App extends Component {
    constructor() {
        super();

        this.state = {
            imgstatus: image1,
            sizeHarga: 20.35,
            jumlah: 1,
            totalJumlah : 1,
            order:145
        };
        this.gambar1 = this.gambar1.bind(this);
        this.gambar2 = this.gambar2.bind(this);
        this.gambar3 = this.gambar3.bind(this);
        this.gambar4 = this.gambar4.bind(this);
        this.gambar5 = this.gambar5.bind(this);
        this.harga1 = this.harga1.bind(this);
        this.harga2 = this.harga2.bind(this);
        this.harga3 = this.harga3.bind(this);
        this.harga4 = this.harga4.bind(this);
        this.harga5 = this.harga5.bind(this);
        this.jumlahPlus = this.jumlahPlus.bind(this);
        this.jumlahMin = this.jumlahMin.bind(this);
        this.jumlahOrder = this.jumlahOrder.bind(this);
    }

    gambar1() {
        this.setState({
            imgstatus: image1
        });
    }
    gambar2() {
        this.setState({
            imgstatus: image2
        });
    }
    gambar3() {
        this.setState({
            imgstatus: image3
        });
    }
    gambar4() {
        this.setState({
            imgstatus: image4
        });
    }
    gambar5() {
        this.setState({
            imgstatus: image5
        });
    }

    harga1() {
        this.setState({
            sizeHarga: 20.35
        });
    }
    harga2() {
        this.setState({
            sizeHarga: 20.45
        });
    }
    harga3() {
        this.setState({
            sizeHarga: 20.55
        });
    }
    harga4() {
        this.setState({
            sizeHarga: 20.65
        });
    }
    harga5() {
        this.setState({
            sizeHarga: 20.75
        });
    }
    jumlahPlus() {
        this.setState({
            jumlah: this.state.jumlah + 1
        });
    }
    jumlahMin() {
        this.setState({
            jumlah: this.state.jumlah - 1
        });
    }

    jumlahOrder() {
        this.setState({
            order: this.state.order + 1
        });
    }

    render() {
    return (
      <div className="">
          <Row className="show-grid">
              <Col xs={12} md={8} xsOffset={2} className="cs-background cs-margin-top">
                  <Row className="show-grid">
                      <Col md={6} mdPush={6}>

                          <div>
                              <h1 className="cs-title-shoes">ADIDAS PRIME BOOTS</h1>
                              <ul className="cs-list">
                                  <li className="items"><h4>{this.state.order} orders</h4></li>
                                  <li className="items"><h4><a href="#">9 reviews</a></h4></li>
                                  <li className="items cs-star"> <Glyphicon glyph="	glyphicon glyphicon-star" /> <Glyphicon glyph="	glyphicon glyphicon-star" /> <Glyphicon glyph="	glyphicon glyphicon-star" /> <Glyphicon glyph="	glyphicon glyphicon-star" /> <Glyphicon glyph="	glyphicon glyphicon-star" /></li>
                              </ul>
                          </div>

                          <div className="cs-label">
                              <h4 className="cs-text-left">Free shipping</h4>
                              <h2 className="cs-text-right">${this.state.sizeHarga * this.state.jumlah}</h2>
                          </div>

                          <div>
                              <ul className="cs-list">
                                  <li className="cs-list-btn">color</li>
                                  <li className="cs-list-btn"><button className="cs-height-btn cs-color1" onClick={this.gambar1}></button></li>
                                  <li className="cs-list-btn"><button className="cs-height-btn cs-color2" onClick={this.gambar2}></button></li>
                                  <li className="cs-list-btn"><button className="cs-height-btn cs-color3" onClick={this.gambar3}></button></li>
                                  <li className="cs-list-btn"><button className="cs-height-btn cs-color4" onClick={this.gambar4}></button></li>
                                  <li className="cs-list-btn"><button className="cs-height-btn cs-color5" onClick={this.gambar5}></button></li>
                              </ul>
                          </div>
                          <br/>
                          <div className="cs-size">
                              <ul className="cs-list">
                                  <li className="cs-list-btn">size</li>
                                  <li className="cs-list-btn"><button className="cs-height-btn cs-color1-size" onClick={this.harga1}>40</button></li>
                                  <li className="cs-list-btn"><button className="cs-height-btn cs-color2-size" onClick={this.harga2}>41</button></li>
                                  <li className="cs-list-btn"><button className="cs-height-btn cs-color3-size" onClick={this.harga3}>42</button></li>
                                  <li className="cs-list-btn"><button className="cs-height-btn cs-color4-size" onClick={this.harga4}>43</button></li>
                                  <li className="cs-list-btn"><button className="cs-height-btn cs-color5-size" onClick={this.harga5}>44</button></li>
                              </ul>
                          </div>
                          <br/>
                          <div>
                              <ul className="cs-list">
                                  <li>Quantity</li>
                                  <li className="cs-list-btn "><button onClick={this.jumlahMin} className="cs-btn-min">-</button></li>
                                  <li className="cs-list-btn"><h3 className="cs-angka">{this.state.jumlah}</h3></li>
                                  <li className="cs-list-btn"><button onClick={this.jumlahPlus} className="cs-btn-plus">+</button></li>
                              </ul>
                          </div>
                          <br/>
                          <div className="cs-footer-button">
                              <button className="cs-btn-wishlist"><Glyphicon glyph="glyphicon glyphicon-heart" className="cs-wishlist-button"/> <p className="cs-text-wish-list"> Add to <br/>wish list</p>  </button>
                              <button className="cs-btn-tocart" onClick={this.jumlahOrder}> <Glyphicon glyph="glyphicon glyphicon-shopping-cart" /> ADD TO CART</button>
                          </div>
                      </Col>
                      <Col md={6} mdPull={6}>
                          <h3><a href="#">  <Glyphicon glyph="glyphicon glyphicon-chevron-left" /> BACK</a></h3>
                          <Col xs={6} md={4}>

                              <img src={this.state.imgstatus} alt="image1" width="450" className="cs-image-spatu"/>
                          </Col>
                          <br/>

                          <h3 className="cs-share"><a href="#">  <Glyphicon glyph="glyphicon glyphicon-share" /> SHARE</a></h3>

                      </Col>
                  </Row>
              </Col>
          </Row>
      </div>
    );
  }
}

export default App;

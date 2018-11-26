import React, { Component } from 'react';
import './Productos.css';


class Productos extends Component {

    constructor (props) {
        super(props)
     
        this.state = { item: {}, categories:[] };
      }

    // le pego a la API para traerme los items

    async componentDidMount () {
        let response = await fetch('/items')
        let losProductos = await response.json()
        
        this.setState({
          items:losProductos
        })

      }

    render() {

      return (
        <div className='Product'> 

          <div className="breadcrumb">  
                  
          {
            // this.state.categories && 
            <p>Aqui van los productos</p>}

          </div>

          <div className="prod-div">
              <div className="first-row"> 
                  <figure className="product-pic">
                    <img src={this.state.items.picture} alt={this.state.items.title} />    
                  </figure>
                  
                  <div className="info">
                      <p className="product-condition">{this.state.items.condition} {this.state.items.sold_quantity} vendidos</p> 
                      <h3 className="product-title">{this.state.items.title}</h3>
                        {this.state.items.price && 
                      <p className="product-price"><span>{this.state.items.price.currency}</span>{this.state.items.price.amount}</p>
                        }
                      <input id="buy-btn" type="button" value="Comprar"></input>                    
                  </div>                
              </div>
              <div className="second-row">
                <h5>Descripción del producto</h5>
                <p>{this.state.items.description}</p>
              </div>
              </div>
          </div>


        // <div className="row">
        //   <div className="col-xs-6 col-md-3">
        //     <a href="" className="productos">
        //       <img src={this.state.item.picture} alt={this.state.item.title}></img>
        //     </a>
        //   </div>
        // </div>
      )
    }


}

export default Productos;
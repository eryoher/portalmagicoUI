import React, { Component } from 'react'
import { connect } from 'react-redux';

class Nosotros extends Component {

    renderProducts(){
        const products = this.props.products;
        var rows = [];

        products.forEach(product => {
            rows.push(
                <div key={product.id} className="item-product mb-3">
                    {product.name}
                </div>
            );
        });

        return rows;
      
    }

  render() {    
    var imgMenuProducts = '../../img/nosotros_img_1.jpg';
    var imgProducts = '../../img/nosotros_img_2.png';

    return (
      <div className="nosotros-container">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="d-flex align-items-center justify-content-center nosotros-fundacion" style={{backgroundImage: `url(${imgProducts})`}} >
                        <div className="year">
                            fundada en 1933
                        </div>                        
                    </div>
                    <div className="col-12 mt-3 text-center history">
                        Acompañando todas las ocasiones especiales de 
                        los colombianos que han hecho de  <span className="italic">
                        Casa del Rhin</span> una empresa de tradición, y que la han 
                        consolidado como la más importante casa 
                        productora de vinos del país.
                    </div>
                    <div className="col-12 text-center mt-3">
                        <div className="btn btn-rhin">
                            VER MAS
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="menu-productos" style={{backgroundImage: `url(${imgMenuProducts})`}} >
                        <div className="content-product d-flex align-items-center justify-content-center  flex-column">                            
                            {this.renderProducts()}
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state){
    return {
        products : state.products
    }
}



export default connect (mapStateToProps)(Nosotros);
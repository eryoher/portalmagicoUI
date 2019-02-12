import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
import { connect } from 'react-redux';


class OfertasDonacion extends Component {

    renderCarousel(){
        var gallerie = this.props.deals;        
        if (gallerie.length){
            return (
                <Carousel
                    showArrows={true}
                    width = "1098px"
                    autoPlay={true}
                    interval={5000}
                    infiniteLoop={true}
                    showStatus={false}
                    showArrows={false}
                    showThumbs={false}
                    dynamicHeight={true}
                    className="presentation-mode"
                >
                    {this.divgallerie(gallerie)}
                </Carousel>
            );
        }
    }
    
    divgallerie(gallerie){
        var rows = [];
        for (var key in gallerie) {
            var picture = gallerie[key];
            if(picture.active){
                let discount = picture.value * ( picture.deal / 100 ) 
                rows.push(
                    <div key={key} className="conten-slide">
                        <div key={key} className="my-slide-content" style={{backgroundImage: `url(${picture.imgUrl})`}} >
                            <div className={'margen-slogan'} />
                            <div className="slogan-content">
                                    <div className="slogan">
                                        <div className={'purchased'} >
                                            { `Comprados: ${picture.cantSell}` }
                                        </div>
                                        <div className="valor">
                                            { `Valor: ${ parseInt(picture.value - discount) }` }
                                        </div>           
                                        <div className={'deal'}>
                                            { `Ahorra: ${ discount }  (${picture.deal}%)` }                                        
                                        </div>                             
                                    </div>
                            </div>
                        </div>
                    </div>
                );
            }
        }
        return rows;
    }


    render() {    
        return (
            <div className={'donation-container'} >
                {this.renderCarousel()}
            </div>
        )
    }
}


function mapStateToProps({deals}){
    return {
            deals
        }
}
  
export default connect (mapStateToProps)(OfertasDonacion);

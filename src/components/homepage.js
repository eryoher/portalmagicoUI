import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import { Parallax } from "react-parallax";
import 'react-responsive-carousel/lib/styles/carousel.css';
import Projects from './projects' 

class HomePage extends Component {

  renderCarousel(){

    var gallerie = this.props.carousel;
    
    if (gallerie.length){
      return (
          <Carousel
            showArrows={true}
            width = "1014px"
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
        rows.push(
          <div key={key} className="conten-slide">
            <div key={key} className="my-slide-content" >
              <div className="d-flex align-items-center justify-content-center slogan-content">
                  <img src={picture.imgUrl}  />
                  <div className="slogan">
                    <div className="title">
                      {picture['slogan']}
                    </div>
                    <div className="d-flex bd-highlight">
                      <div className="p-2 flex-fill bd-highlight bottom-slogan"></div>
                      <div className="p-2 flex-fill bd-highlight bottom-slogan"></div>
                      <div className="p-2 flex-fill bd-highlight bottom-slogan"></div>
                      <div className="p-2 flex-fill bd-highlight bottom-slogan"></div>
                      <div className="p-2 flex-fill bd-highlight "></div>
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

  renderAboutus() {
    return(
      <div className={"about-us"} >
        <div className={"title"} >
          Acerca de <span className={"color-blue"} >nosotros</span>
        </div>
        <div className={"content text-justify"} >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
              consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
              enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis
        </div>
      </div>
    )
  }

  renderCampaigns(){
    const {campaigns} = this.props
    let rows = []
    campaigns.forEach((campaign, index) => {
      rows.push(
        <li key={index}>{ campaign.text }</li>
      )
    });

    return(
      <div className={"campaign-content  container"}>
        <div className={"row"} >          
          <div className={"col"}>
            <div className={"title text-left"} > <span style={{fontWeight:'bold'}} > Nuestras </span> <span className={"color-blue"}> Campañas </span></div>
            <ol className={"text-justify"} >
              {rows}
            </ol>
          </div>
          <div className={"col"}>
            <img src={"http://localhost/freelance/portalMagicoApi/img/campaigns.png"} width={'100%'} />
          </div>
        </div>
      </div>

    )

  }
  render() {
    const {campaigns} = this.props
    return (
      <div>
        <Parallax strength={500}>
          <div className="homepage-container text-center">
            <div>
              {this.renderCarousel()}
            </div>
            <div>
              {this.renderAboutus()}
            </div>
            <div>
              { campaigns && this.renderCampaigns()}
            </div>
          </div>
        </Parallax>
        <Parallax strength={500}>
          <Projects />
        </Parallax>
      </div>
    );
  }
}

function mapStateToProps({carousel, campaigns}){
  return {
    carousel,
    campaigns
  }
}

export default connect (mapStateToProps)(HomePage);

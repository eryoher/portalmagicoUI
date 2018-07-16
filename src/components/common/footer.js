import React, { Component } from 'react'
import logo from '../../../img/logo_footer.jpg';

export default class footer extends Component {
  render() {
    return (
        <div className="footer-container pt-4">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-lx 6">
                        <div className="logo">
                            <img src={logo} />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-lx 6">
                        <div className="address ml-4 pt-3">
                            <p> Bodegas y Oficina Principal </p>
                            <p> Carrera 30 No. 9-35 </p>
                            <p> PBX: 2018100 </p>
                            <p> FAX: 2476266 </p>
                            <p> Bogota, Colombia </p>
                        </div>
                    </div>
                    <div className="col-12 text-center message">
                        <p>Prohíbese El Expendio de Bebidas Embriagantes a Menores de Edad. Ley 124 de 1.994. </p>
                        <p>El Exceso de Alcohol es Perjudicial Para la Salud. Ley 30 de 1.986 </p>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}

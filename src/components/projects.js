import React, { Component } from 'react'
import { connect } from 'react-redux';

import Youtube from './common/youtube'

class Projects extends Component {

    renderProjectsVideos() {
        let rows = []
        const { projects } = this.props
        projects.forEach((project, index) => {
            rows.push(
                <div className={'col-4'} key={index} >
                    <Youtube 
                        video={project.videoUrl}
                    />
                </div>
            )
            
        });

        return rows;
    }

    render() {
        return (
            <div className="projects-content">
                <div className={'container'} >
                    <div className={'row'}>
                        <div className={'col-12'} >
                            <div className={"title text-center"} >
                                <span className={'color-blue'} >Proyectos </span>
                                <span className={'text-bold'} >de la fundación</span>
                            </div>
                            <div className={'vertical-divider'} />
                        </div>
                        <div className={'col-12'} >
                            <div className={'list-videos-projects row'} >
                                {this.renderProjectsVideos()}
                            </div>
                        </div>
                        <div className={'row p-4'}>
                            <div className={'col-8'} > 
                                <img width={'718px'} height={'352px'} src={'https://noticierouniversal.com/wp-content/uploads/2018/03/como-aprender-jugadas-de-ajedrez-piezas-620x349.jpg'} />
                            </div>

                            <div className={'col-4'} >
                                <img width={'340px'} height={'352px'} src={'https://www.recreoviral.com/wp-content/uploads/2014/08/Ni%C3%B1os-jugando-en-la-India.jpg'} />
                            </div>
                        </div>
                        <div className={'row p-4'} >
                            <div className={'col-12 donaciones-content'} >
                                <div className={'title'} >
                                    <span className={'text-bold'} > Ofertas </span>
                                    <span className={'color-blue'}> de donación</span>
                                </div>
                                <div className={'vertical-divider'} />
                                <div className={'dontaciones'}>
                                    <img src={'../../img/gallerie-donaciones.png'} height={'396'} width={'1098'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ projects }){
    return {
        projects
    }
}



export default connect (mapStateToProps)(Projects);

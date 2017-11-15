import React from 'react';
import {redA400, lightBlueA400, amberA400} from 'material-ui/styles/colors'
import {Card, CardText } from 'material-ui/Card'

export default class Benefits extends React.Component{
  render(){
    return(
      <ul>
        <Card className="Header-Benefit">
          <CardText>
          <div className="row">
            <div className="Header-Benefit-image" style={{'backgroundColor': redA400}}>
              <img src={process.env.PUBLIC_URL + 'images/title.png'} />
            </div>
            <div className="Header-Benefit-content">
              <h3>Calicaciones con emociones</h3>
              <p>Calica tus lugares con experencias, no con números</p>
            </div>
          </div>
          </CardText>
        </Card>

        <Card className="Header-Benefit">
          <CardText>
          <div className="row">
            <div className="Header-Benefit-image" style={{'backgroundColor': lightBlueA400}}>
              <img src={process.env.PUBLIC_URL + 'images/title.png'} />
            </div>
            <div className="Header-Benefit-content">
              <h3>¿Sin Internet? Sin probmeas</h3>
              <p>PLaces funciona sin internet o en conexiones lentas</p>
            </div>
          </div>
          </CardText>
        </Card>

        <Card className="Header-Benefit">
          <CardText>
          <div className="row">
            <div className="Header-Benefit-image" style={{'backgroundColor': amberA400}}>
              <img src={process.env.PUBLIC_URL + 'images/title.png'} />
            </div>
            <div className="Header-Benefit-content">
            <h3>Tus lugares favoritos</h3>
            <p>define tu lista de sitions favoritos</p>
            </div>
          </div>
          </CardText>
        </Card>
      </ul>
    )
  }
}

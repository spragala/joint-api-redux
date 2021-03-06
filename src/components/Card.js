import React, { Component } from 'react';


class Card extends Component {
    render() {
    return (
      <div className="row entry" data-index-id="">
        <div className="col-xs-12 col-sm-8 col-sm-offset-2 post-card">
          <div className="entryBody">
            <div className="row head">
              <div className="col-xs-8">
                <h2 className="title">{this.props.title}</h2>
              </div>
              <div className="co-xs-1 pull-right">
                <p className="date-time">Date</p>
              </div>
            </div>
            <p className="snark">Comment</p>
            <div className="image-container">
              <img className="screencap" src="${entry.image}" />
              <div className="rating">
                <button type="button" className="like-button">
                  <img className="like" src="../imgs/running_guy.svg" /> Run Away!  <span className="like">Like Rating</span>
                </button>
                <button type="button" className="legit-button" id="">
//                  <i className="bed fa fa-bed" aria-hidden="true"></i>Seems Legit  <span className="legit">Legit Rating</span>
                </button>
                <button className="btn btn default copy-btn" data-clipboard-text="http://snuffability.zone#ID">
                  //<i className="fa fa-clipboard" aria-hidden="true"></i> Grab a Link to this Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Card;

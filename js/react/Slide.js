
var Slide = React.createClass({
  render: function() {
    var divStyle = {backgroundImage: 'url(http://placehold.it/1900x1080&text=Slide One)'};
    return (
        <header id="myCarousel" className="carousel slide">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner">
                <div className="item active">
                    <div className="fill" style={{backgroundImage: 'url(http://placehold.it/1900x1080&text=Slide One)'}}></div>
                    <div className="carousel-caption">
                        <h2>海报一</h2>
                    </div>
                </div>
                <div className="item">
                    <div className="fill" style={divStyle}></div>
                    <div className="carousel-caption">
                        <h2>海报二</h2>
                    </div>
                </div>
                <div className="item">
                    <div className="fill" style={divStyle}></div>
                    <div className="carousel-caption">
                        <h2>海报三</h2>
                    </div>
                </div>
            </div>

            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="icon-prev"></span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="icon-next"></span>
            </a>
        </header>
    );
  }
});

React.render(
  <Slide />,
  // document.body
  document.getElementById('carousel')
);


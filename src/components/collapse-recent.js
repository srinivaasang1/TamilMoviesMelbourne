import React, { Component, PropTypes } from 'react';


class CollapseRecent extends Component{
  render()
  {
    return(
    <div className="container-recent">
      <div className="row">
        <div className="col-md-3">
          <div className="collapsible-panel">
            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
              <div className="panel panel-default">
                <div className="panel-heading collapsible-button-poster1" role="tab" id="headingOne" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                </div>
                <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                  <div className="panel-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="collapsible-panel">
            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
              <div className="panel panel-default">
                <div className="panel-heading collapsible-button-poster2" role="tab" id="headingTwo" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                </div>
                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                  <div className="panel-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="collapsible-panel">
            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
              <div className="panel panel-default">
                <div className="panel-heading collapsible-button-poster3" role="tab" id="headingThree" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                </div>
                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                  <div className="panel-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="collapsible-panel">
            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
              <div className="panel panel-default">
                <div className="panel-heading collapsible-button-poster4" role="tab" id="headingFour" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                </div>
                <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                  <div className="panel-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default CollapseRecent;

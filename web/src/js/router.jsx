/** @jsx React.DOM */

var Router = React.createClass({
    render: function(){
        return <ReactRouter.Routes location="hash">
            <ReactRouter.Route name="certs" path="/" handler={CertInstallView}/>
            <ReactRouter.Route name="other" path="/other" handler={CertInstallView}/>
        </ReactRouter.Routes>;
    }
});
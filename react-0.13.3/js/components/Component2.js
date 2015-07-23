      var MyComponent1 = React.createClass({
        render: function(){
            return (
                <h1><img src={this.props.source} className="mystyle" /></h1>
            );
        }
    });
module.exports = MyComponent1;
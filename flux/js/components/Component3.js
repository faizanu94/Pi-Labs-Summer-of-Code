var MyComponent = require('./Component1');
var MyComponent1 = require('./Component2');
var Constants = require('../Constants');
var Store = require('../Store');
var AppDispatcher = require('../Dispatcher');
    var MyComponent2 = React.createClass({
        render: function(){
          if (!$.isEmptyObject(this.state.images))
          {
            var hello = this.state.images;
            var newarr = Object.keys(this.state.images).map(function(element)
            {
              return <MyComponent1 source={hello[element].url} />
            });
          }
            return (
              <div>
                <h1>Hello, {this.state.name}!</h1>
                <MyComponent name={"Creepy "+this.state.name} />
                {newarr}
                <input type="text" placeholder="Your URL" ref="url" />
                <button type="button" onClick={this.nameChange}>Submit</button>
                </div>
            );
        },
        componentDidMount: function()
        {
/*          var that=this;
          */
          Store.addChangeListener(this._onChange);
        },
        componentWillUnmount:function()
        {
          Store.removeChangeListener(this._onChange);
        },
        _onChange:function()
        {
          this.setState({images:Store.getAll()});
        },
        getInitialState: function(){
          return {
            name:"Faizan",
            images:{}
          }
        },
        nameChange: function(event){
          var url = React.findDOMNode(this.refs.url).value;
          //this.setState({name:url});
/*          this.state.images.push(url);
          
          //this.state.name = event.target.value;
        }*/
        AppDispatcher.dispatch({
        actionType: Constants.URL_NEW,
        data: url
      });
      }
    });
module.exports = MyComponent2;
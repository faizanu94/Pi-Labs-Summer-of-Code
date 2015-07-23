var MyComponent = require('./Component1');
var MyComponent1 = require('./Component2');
    var MyComponent2 = React.createClass({
        render: function(){
            var newarr = this.state.images.map(function(element)
            {
              return <MyComponent1 source={element} />
            });
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
          var that=this;
          $.get('http://datastore.asadmemon.com/faizan',function(res)
          {
            that.setState({images:res});
          });
        },
        getInitialState: function(){
          return {
            name:"Faizan",
            images:[]
          }
        },
        nameChange: function(event){
          var url = React.findDOMNode(this.refs.url).value;
          //this.setState({name:url});
          this.state.images.push(url);
          $.ajax({
                  url: 'http://datastore.asadmemon.com/faizan', 
                  type: 'POST', 
                  contentType: 'application/json', 
                  data: JSON.stringify(this.state.images),
                  success:function(res){console.log(res);}
                });
          //this.state.name = event.target.value;
        }
    });
module.exports = MyComponent2;
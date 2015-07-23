(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var MyComponent2 = require('./components/Component3');
React.render(React.createElement(MyComponent2, {name: "Handsome"}), document.getElementById('mount-point'));
},{"./components/Component3":4}],2:[function(require,module,exports){
      var MyComponent = React.createClass({displayName: "MyComponent",
        render: function(){
            return (
                React.createElement("h1", null, "Hello, ", this.props.name, "!")
            );
        }

    });
module.exports = MyComponent;
},{}],3:[function(require,module,exports){
      var MyComponent1 = React.createClass({displayName: "MyComponent1",
        render: function(){
            return (
                React.createElement("h1", null, React.createElement("img", {src: this.props.source, className: "mystyle"}))
            );
        }
    });
module.exports = MyComponent1;
},{}],4:[function(require,module,exports){
var MyComponent = require('./Component1');
var MyComponent1 = require('./Component2');
    var MyComponent2 = React.createClass({displayName: "MyComponent2",
        render: function(){
            var newarr = this.state.images.map(function(element)
            {
              return React.createElement(MyComponent1, {source: element})
            });
            return (
              React.createElement("div", null, 
                React.createElement("h1", null, "Hello, ", this.state.name, "!"), 
                React.createElement(MyComponent, {name: "Creepy "+this.state.name}), 
                newarr, 
                React.createElement("input", {type: "text", placeholder: "Your URL", ref: "url"}), 
                React.createElement("button", {type: "button", onClick: this.nameChange}, "Submit")
                )
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
},{"./Component1":2,"./Component2":3}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwianMvYXBwLmpzIiwianMvY29tcG9uZW50cy9Db21wb25lbnQxLmpzIiwianMvY29tcG9uZW50cy9Db21wb25lbnQyLmpzIiwianMvY29tcG9uZW50cy9Db21wb25lbnQzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBNeUNvbXBvbmVudDIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvQ29tcG9uZW50MycpO1xyXG5SZWFjdC5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChNeUNvbXBvbmVudDIsIHtuYW1lOiBcIkhhbmRzb21lXCJ9KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdW50LXBvaW50JykpOyIsIiAgICAgIHZhciBNeUNvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJNeUNvbXBvbmVudFwiLFxyXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBudWxsLCBcIkhlbGxvLCBcIiwgdGhpcy5wcm9wcy5uYW1lLCBcIiFcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcbm1vZHVsZS5leHBvcnRzID0gTXlDb21wb25lbnQ7IiwiICAgICAgdmFyIE15Q29tcG9uZW50MSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJNeUNvbXBvbmVudDFcIixcclxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7c3JjOiB0aGlzLnByb3BzLnNvdXJjZSwgY2xhc3NOYW1lOiBcIm15c3R5bGVcIn0pKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IE15Q29tcG9uZW50MTsiLCJ2YXIgTXlDb21wb25lbnQgPSByZXF1aXJlKCcuL0NvbXBvbmVudDEnKTtcclxudmFyIE15Q29tcG9uZW50MSA9IHJlcXVpcmUoJy4vQ29tcG9uZW50MicpO1xyXG4gICAgdmFyIE15Q29tcG9uZW50MiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJNeUNvbXBvbmVudDJcIixcclxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciBuZXdhcnIgPSB0aGlzLnN0YXRlLmltYWdlcy5tYXAoZnVuY3Rpb24oZWxlbWVudClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KE15Q29tcG9uZW50MSwge3NvdXJjZTogZWxlbWVudH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgbnVsbCwgXCJIZWxsbywgXCIsIHRoaXMuc3RhdGUubmFtZSwgXCIhXCIpLCBcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTXlDb21wb25lbnQsIHtuYW1lOiBcIkNyZWVweSBcIit0aGlzLnN0YXRlLm5hbWV9KSwgXHJcbiAgICAgICAgICAgICAgICBuZXdhcnIsIFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHt0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiWW91ciBVUkxcIiwgcmVmOiBcInVybFwifSksIFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7dHlwZTogXCJidXR0b25cIiwgb25DbGljazogdGhpcy5uYW1lQ2hhbmdlfSwgXCJTdWJtaXRcIilcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFyIHRoYXQ9dGhpcztcclxuICAgICAgICAgICQuZ2V0KCdodHRwOi8vZGF0YXN0b3JlLmFzYWRtZW1vbi5jb20vZmFpemFuJyxmdW5jdGlvbihyZXMpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoYXQuc2V0U3RhdGUoe2ltYWdlczpyZXN9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTpcIkZhaXphblwiLFxyXG4gICAgICAgICAgICBpbWFnZXM6W11cclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG5hbWVDaGFuZ2U6IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgIHZhciB1cmwgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMudXJsKS52YWx1ZTtcclxuICAgICAgICAgIC8vdGhpcy5zZXRTdGF0ZSh7bmFtZTp1cmx9KTtcclxuICAgICAgICAgIHRoaXMuc3RhdGUuaW1hZ2VzLnB1c2godXJsKTtcclxuICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9kYXRhc3RvcmUuYXNhZG1lbW9uLmNvbS9mYWl6YW4nLCBcclxuICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLCBcclxuICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJywgXHJcbiAgICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuaW1hZ2VzKSxcclxuICAgICAgICAgICAgICAgICAgc3VjY2VzczpmdW5jdGlvbihyZXMpe2NvbnNvbGUubG9nKHJlcyk7fVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAvL3RoaXMuc3RhdGUubmFtZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxubW9kdWxlLmV4cG9ydHMgPSBNeUNvbXBvbmVudDI7Il19

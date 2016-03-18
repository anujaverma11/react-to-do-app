var ToDo = React.createClass({displayName: "ToDo",
  render: function(){
    return(
        React.createElement("div", null, 
          React.createElement("h1", null, "Things To Do")
        )
      )
  }
});

React.render(React.createElement(ToDo, null), document.getElementById('todo'));
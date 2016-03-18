var ToDo = React.createClass({displayName: "ToDo",
  render: function(){
    return(
        React.createElement("div", null, 
          React.createElement("h1", null, "Things To Do"), 

          React.createElement("div", {className: "form-inline"}, 
            React.createElement("div", {className: "form-group"}, 
              React.createElement("input", {className: "form-control", placeholder: "Add To Do"}), 
              React.createElement("button", {className: "btn btn-default btn-sm"}, "+")
            )
          ), 

          React.createElement("ul", null, 
            React.createElement("li", {className: "todo"}, "Call Henry"), 
            React.createElement("li", {className: "todo"}, "Pay Phone Bill")
          )

        )
      )
  }
});

React.render(React.createElement(ToDo, null), document.getElementById('todo'));
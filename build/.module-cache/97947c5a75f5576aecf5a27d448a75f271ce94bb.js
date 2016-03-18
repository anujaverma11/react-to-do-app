var ToDo = React.createClass({displayName: "ToDo",
  edit: function(){

  },

  remove: function(){

  },

  save: function(){
    alert('ToDo saved');
  },

  todoDisplay: function(){
    return(
            React.createElement("li", {className: "todo"}, 
              React.createElement("span", {onclick: this.edit}, 
                this.props.children
              ), 
              React.createElement("button", {onclick: this.remove, className: "btn btn-default btn-sm glyphicon glyphicon-trash remove pull-right"})
            )
    );
  },

  todoForm: function(){
    return(
            React.createElement("li", {className: "todo"}, 
              React.createElement("span", null, 
                React.createElement("input", {type: "text", placeholder: "Edit Todo", defaultValue: this.props.children})
              ), 
              React.createElement("button", {onclick: this.save, className: "btn btn-default btn-sm glyphicon glyphicon-trash remove pull-right"})
            )
    );

  },

  render: function(){

  }
});

React.render(
        React.createElement("div", null, 
          React.createElement("h1", null, "Things To Do"), 

          React.createElement("div", {className: "form-inline"}, 
            React.createElement("div", {className: "form-group"}, 
              React.createElement("input", {className: "form-control", placeholder: "Add To Do"}), 
              React.createElement("button", {className: "btn btn-default btn-sm"}, "+")
            )
          ), 
            React.createElement("ul", null, 
              React.createElement(ToDo, null, "Call Henry"), 
              React.createElement(ToDo, null, "Call Henry"), 
              React.createElement(ToDo, null, "Call Henry")
            )
        ), document.getElementById('todo'));


var ToDo = React.createClass({displayName: "ToDo",
  getInitialState: function(){
    return {editing:false}
  },

  edit: function(){
    alert('edit ToDo');
    this.setState({editing: true});
  },

  remove: function(){
    alert('ToDo removed');
  },

  save: function(){
    var val=this.refs.newValue.getDOMNode().value;
    // alert('ToDo'+ val +'saved!');
    console.log(this.props.index);
    this.props.onChange(val, this.props.index);
    this.setState({editing: false});
  },

  todoDisplay: function(){
    return(
            React.createElement("li", {className: "todo"}, 
              React.createElement("span", {onClick: this.edit}, 
                this.props.children
              ), 
              React.createElement("button", {onClick: this.remove, className: "btn btn-default btn-sm glyphicon glyphicon-trash remove pull-right"})
            )
    );
  },

  todoForm: function(){
    return(
            React.createElement("li", {className: "todo"}, 
              React.createElement("span", null, 
                React.createElement("input", {type: "text", placeholder: "Edit Todo", ref: "newValue", defaultValue: this.props.children})
              ), 
              React.createElement("button", {onClick: this.save, className: "btn btn-default btn-sm glyphicon glyphicon-floppy-disk remove pull-right"})
            )
    );

  },

  render: function(){
    if(this.state.editing){
      return this.todoForm();
    } else {
      return this.todoDisplay();
    }

  }
});



var ToDoList = React.createClass({displayName: "ToDoList",
  getInitialState: function(){
    return{
      todos: ['Call Henry','Call Henry','Anuja']
    }
  },

  update: function(newValue, i){
    var arr= this.state.todos;
    arr[i] = newValue;
    this.setState({todos: arr});
  },

  eachTodo: function(todo, i){
    return React.createElement(ToDo, {key: i, 
            index: i, 
            onChange: this.update}, 
            todo
          )
  },

  render: function(){
    return(React.createElement("div", null, 
          React.createElement("h1", null, "Things To Do"), 

          React.createElement("div", {className: "form-inline"}, 
            React.createElement("div", {className: "form-group"}, 
              React.createElement("input", {className: "form-control", placeholder: "Add To Do"}), 
              React.createElement("button", {className: "btn btn-default btn-sm"}, "+")
            )
          ), 
            React.createElement("ul", null, 
              this.state.todos.map(this.eachTodo)
            )
        )
      );
  }
});

React.render(React.createElement(ToDoList, null),document.getElementById('todo'));
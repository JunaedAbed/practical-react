import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

// TodoMVC
// 1.add Todo#
// 2. display Todo#
// 3. cross off todo #
// 4. show number of active todos #
// 5. filter all/active/complete #
// 6. delete todos #
// 7. delete all complete#
//     7.1 only show if at least one is complete #
// 8. button toggle all on/off  #  

export default class TodoList extends React.Component{
    
    state = {
        todos: [],
        todosToShow: 'all',
        toggleAllComplete: true,
    };
    
    addTodo = (todo) => {
        
        this.setState(state => ({
            todos: [todo, ...state.todos ]
        }));
    };
    
    toggleComplete = (id) => {
        this.setState(state => ({
            todos: state.todos.map(todo => {
                
                if(todo.id === id){
                    //suppose to update
                    return({
                        ...todo,
                        complete: !todo.complete, 
                    });
                }else{
                    return todo;
                }
            })
        }))
    }
    
    updateTodoToShow = (show) => {
        this.setState({
            todosToShow: show
        })
    }
    
    handleDeleteTodo = id => {
        this.setState(state => ({
            todos: state.todos.filter(todo => todo.id !== id)
        }))
    }
    
    removeAllCompletedTodos = () => {
        this.setState(state => ({
            todos: state.todos.filter(todo => !todo.complete)
        }))
    }
    
    render(){
        
        let todos = [];
        
        if(this.state.todosToShow === 'all'){
            todos = this.state.todos;
        }
        else if (this.state.todosToShow === 'active'){
            todos = this.state.todos.filter(todo => !todo.complete);
        }
        else if (this.state.todosToShow === 'complete'){
            todos = this.state.todos.filter(todo => todo.complete);
        }
        
        
        return(
            <div>
                <TodoForm onSubmit={this.addTodo} />
                
                <div>
                    todos left: {this.state.todos.filter(todo => !todo.complete).length}
                </div>
                
                <div>
                    <button onClick={()=>this.updateTodoToShow('all')}>all</button>
                    <button onClick={()=>this.updateTodoToShow('active')}>active</button>
                    <button onClick={()=>this.updateTodoToShow('complete')}>complete</button>
                </div>
                
                {todos.map(todo => 
                    (<Todo
                        key={todo.id} 
                        toggleComplete={() => this.toggleComplete(todo.id)} 
                        todo={todo}
                        onDelete={()=>this.handleDeleteTodo(todo.id)} />)
                    )
                }
                
                {this.state.todos.some(todo => todo.complete) ? (
                    <div>
                        <button onClick={this.removeAllCompletedTodos}>remove completed todos</button>
                    </div>
                ) : null }
                
                <div>
                    <button onClick={() => this.setState({
                        todos: this.state.todos.map(todo => ({
                            ...todo, 
                            complete: this.state.toggleAllComplete
                        })),
                        toggleAllComplete: !this.state.toggleAllComplete
                    })}>toggle all complete : {`${this.state.toggleAllComplete}`}</button>
                </div>
                  
            </div>
        );
    }
}
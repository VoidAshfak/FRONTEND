import { Provider } from 'react-redux'
import './App.css'
import AddTodo from './components/AddTodo'
import { store } from './app/store'
import TodoList from './components/TodoList'

function App() {

    return (
        <Provider store={store} >
            <AddTodo />
            <TodoList />
        </Provider>
    )
}

export default App
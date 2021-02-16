import { Provider } from 'react-redux';

import store from './store';

import UserCard from './components/UserCard';
import CoursesList from './components/CoursesList';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserCard/>
        <CoursesList/>
      </Provider>
    </div>
  );
}

export default App;


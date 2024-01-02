import './App.css';
import { Addpost } from './features/posts/Addpost';
import { Postlist } from './features/posts/Postlist';

function App() {

  return (
    <div>
      <Addpost/>
      <Postlist/>
    </div>
  );
}

export default App;

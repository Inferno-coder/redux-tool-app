import './App.css';
import { Addpost } from './features/posts/Addpost';
import { Postlist } from './features/posts/Postlist';

function App() {

  return (
    <div>
      <h1>Posts</h1>
      <Addpost/>
      <Postlist/>
    </div>
  );
}

export default App;

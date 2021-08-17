import Greet from './components/functional/Greet';
import { NamedGreet } from './components/functional/NamedGreet';
import Welcome from './components/class/Welcome';
import Sample from './components/functional/Sample';
import Test from './components/class/Test';

function App() {
  return (
    <div className="container">
      <h1>Welcome to ReactJS</h1>
      <NamedGreet />
      <Greet />
      <Welcome />
      <Sample />
      <Test />
    </div>
  );
}

export default App;

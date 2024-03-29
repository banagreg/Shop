import Directory from './components/Directory/Directory';
import { categories } from './constants/constants';

const App = () => {

  return (
    <Directory categories={categories} />
  );
}

export default App;

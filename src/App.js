import Grid from './datagrid/Grid'
import useFetch from './hook/useFetch'
import loaders from './assets/loaders.svg'
function App() {
const {loading} = useFetch;
  return (
<div >
  <h1>User Table</h1>
 {
  loading === true ?  <img src={loaders} alt="loaders" />
:<Grid />}
</div>
  );
}

export default App;

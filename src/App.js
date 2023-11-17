import Grid from './datagrid/Grid'
import useFetch from './hook/useFetch'
import loaders from './assets/loaders.svg'
function App() {
const {loading} = useFetch;
  return (
<div >
  <h1>User Table</h1>
 {
  !loading === false ? (
    <Grid />
  ) : <img src={loaders} alt="loaders" />}
</div>
  );
}

export default App;

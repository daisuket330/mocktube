import Header from './Header';
import Sidebar from './sidebar';
import Recommend from './recommended';


function AppPage() {

    return (
      <div className="App">
        <Header />
            <div className="app_page">
              <Sidebar />
              <Recommend/>    
            </div>
      </div>
    );
  }
  
  export default AppPage;
  
import {Component} from 'react';
import './App.css';

import Header from './components/Header';
import Song from './components/Song';

class App extends Component {
    componentDidMount(){
        console.log("La aplicacion se ha cargado correctamente!")
    }
    render() {
        return (
            <div className="App">
                <Header />
                <Song
                title="Blinding Lights"
                artist="The Weeknd"
                duration="3:20"
                />
                <Song 
                title="Level of Concern"
                artist="Twenty One Pilots"
                duration="2:50"
                />
                <Song 
                title="Always"
                artist="Rex Orange County"
                duration="3:10"
                />
            </div>
        )
    }
}

export default App;

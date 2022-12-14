import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component{

    state={videos:[], selectedVideo:null,
    };

    componentDidMount(){
        this.onTermSubmit('MISE OFFICIAL - MIAMI SWIM WEEK THE SHOWS 2022')
    }

    onTermSubmit= async (term)=>{
        const response = await youtube.get('/search',{
            params:{
                q:term,
            }
        });
        //console.log(response.data.items);
        this.setState({videos:response.data.items, selectedVideo:response.data.items[0]});
        //console.log(this.state.videos.length)
    };

    onVideoSelect=(video)=>{
        //console.log('From App', video);
        this.setState({selectedVideo:video});
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}></VideoList>
                        </div>
                    </div>
                   
                    
                </div>
                
            </div>
        )
    }
}

export default App

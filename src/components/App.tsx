import React from "react";
import SearchBar from "./SearchBar";
import axios from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

interface State {
  videos: any[];
  selectedVideo: any;
}

class App extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
  }
  onTermSubmit = async (term: string) => {
    const response = await axios.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video: any) => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount = () => {
    this.onTermSubmit("Jeff seid");
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="5 wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

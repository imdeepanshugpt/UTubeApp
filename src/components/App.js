import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from '../components/VideoList';
import VideoDetail from './VideoDetail';
import './App.css';
class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  componentDidMount() {
    this.onTermSubmit('');
  }
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
  };

  onVideoSelect = (video) => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div>
        <h3 className="ui top attached header">
          <span className="header-title">UTube</span> <span className="side-content">Browse all the youtube content</span>
        </h3>
        <div className="ui container">
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="five wide column">
                <VideoList
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                />
              </div>
            </div>
          </div>
        </div>
        <h3 class="ui bottom attached header">
        &copy; developed by <a href="https://www.linkedin.com/in/imdeepanshugpt">Deepanshu Gupta</a>
        </h3>
      </div>
    );
  }
}
export default App;
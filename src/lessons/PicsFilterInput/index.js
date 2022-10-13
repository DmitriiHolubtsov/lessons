import React from 'react';
import SearchBar from './components/SearcBar';
import unsplash from './api/unsplash';
import ImageList from './components/ImageList'
class PicsFilterInput extends React.Component {

    state = { images: [] };

    onSearchSubmit = async term => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
        });

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default PicsFilterInput;
import React from "react";
import SeasonDisplay from './components/SeasonDisplay';
import Loader from '../../shared/Loader';

export default class Seasons extends React.Component {
    state = { let: 0, errorMessage: '' };

    componentDidMount () {
        window.navigator.geolocation.getCurrentPosition(
            // we called set state
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }
    
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <Loader message="Please, accept location request" />
    }

    render() {
        return (
            <div className="border red" stylr={{position: 'relative'}}>
                {this.renderContent()}
            </div>
        )
    }
}


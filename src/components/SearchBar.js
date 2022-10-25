import React from "react";

class SearchBar extends React.Component{
    state={term:''};

    onInputChange=(e)=>{
        e.preventDefault();
        //console.log(this.state.term)
        this.setState({term:e.target.value})
    }

    onFormSubmit=(e)=>{
        e.preventDefault();
        this.props.onSearchSubmit(this.state.term)

    }

    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>
                            Video Search
                        </label>
                        <input value={this.state.term}
                         type="text"
                         onChange={this.onInputChange} 
                        ></input>
                    </div>
                </form>
            </div>
        )
        
    }
}

export default SearchBar
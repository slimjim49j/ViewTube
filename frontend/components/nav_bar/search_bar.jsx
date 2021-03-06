import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInput(field) {
        return e => this.setState({
            [field]: e.target.value,
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveSearchBarStatus(true);
        this.props.history.push(`/search?search=${this.state.search}`)
    }
    
    render() {
        return (
            <form className="search-form" onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleInput("search")} value={this.state.search} placeholder="Search" />
                <button type="submit">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g>
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                    </g></svg>
                </button>
            </form>
        )
    }
}

export default SearchBar;
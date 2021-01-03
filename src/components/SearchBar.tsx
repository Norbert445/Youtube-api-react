import React from "react";

class SearchBar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { term: "" };
  }

  onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);

    //TODO: Make sure we call callback from parent component
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form action="" className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

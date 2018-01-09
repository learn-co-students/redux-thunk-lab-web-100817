import React from "react";

class CatList extends React.Component {
  cats = () => {
    if (this.props.catPics.length > 0) {
      return this.props.catPics.map(cat => {
        return <img src={cat.url} alt="cat-pic" key={cat.id} />;
      });
    }
  };
  render() {
    console.log("props in cat list", this.props);
    return (
      <div>
        <h1>Cat List</h1>
        {this.cats()}
      </div>
    );
  }
}

export default CatList;

import React from 'react';
import {  Highlight, Snippet} from 'react-instantsearch-dom';
import './ListItem.module.scss';


class ListItem extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render(): JSX.Element {
        return <>
        <article className="hit">
    <header className="hit-image-container">
      <img src={this.props.hit.image} alt={this.props.hit.name} className="hit-image" />
    </header>

    <div className="hit-info-container">
      <p className="hit-category">{this.props.hit.categories[0]}</p>
      <h1>
        <Highlight attribute="name" tagName="mark" hit={this.props.hit} />
      </h1>
      <p className="hit-description">
        <Snippet attribute="description" tagName="mark" hit={this.props.hit} />
      </p>

      <footer>
        <p>
          <span className="hit-em">$</span>{' '}
          {/* <strong>{formatNumber(hit.price)}</strong>{' '} */}
          <span className="hit-em hit-rating">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 16 16"
            >
              <path
                fill="#e2a400"
                fillRule="evenodd"
                d="M10.472 5.008L16 5.816l-4 3.896.944 5.504L8 12.616l-4.944 2.6L4 9.712 0 5.816l5.528-.808L8 0z"
              />
            </svg>{' '}
            {this.props.hit.rating}
          </span>
        </p>
      </footer>
    </div>
  </article>
        </>;
    }
}

export default ListItem;

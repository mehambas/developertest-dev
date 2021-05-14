import React from 'react';
import ListInterface from './ListInterface';

import {
    Hits,
    Highlight,
    Snippet,
    Panel,
    HierarchicalMenu,
    RefinementList,
    connectHierarchicalMenu,
    connectRange,
} from 'react-instantsearch-dom';

import ListItem from '../List/ListItem/ListItem';

import './List.module.scss';


class List extends React.Component<ListInterface.IProps, ListInterface.IState> {
    constructor(props: ListInterface.IProps) {
        super(props);
        this.state = {};
    }

    Hit({ hit }) {
        return (
            <>
                <article className="hit">
                    <header className="hit-image-container">
                        <img
                            src={`https://img.computerunivers.net/${hit.image_url}`}
                            alt={hit.name}
                            className="hit-image"
                        />
                    </header>

                    <div className="hit-info-container mt-3">
                        <h1>
                            <Highlight attribute="name" tagName="mark" hit={hit} />
                        </h1>
                        <p className="hit-description">
                            <Snippet attribute="description" tagName="mark" hit={hit} />
                        </p>

                        <footer>
                            <p>
                                <span className="hit-em">$</span>
                                <strong>{hit.price}</strong> 
                                <span className="hit-em hit-rating">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 16 16">
                                        <path
                                            fill="#e2a400"
                                            fillRule="evenodd"
                                            d="M10.472 5.008L16 5.816l-4 3.896.944 5.504L8 12.616l-4.944 2.6L4 9.712 0 5.816l5.528-.808L8 0z"
                                        />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 16 16">
                                        <path
                                            fill="#e2a400"
                                            fillRule="evenodd"
                                            d="M10.472 5.008L16 5.816l-4 3.896.944 5.504L8 12.616l-4.944 2.6L4 9.712 0 5.816l5.528-.808L8 0z"
                                        />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 16 16">
                                        <path
                                            fill="#e2a400"
                                            fillRule="evenodd"
                                            d="M10.472 5.008L16 5.816l-4 3.896.944 5.504L8 12.616l-4.944 2.6L4 9.712 0 5.816l5.528-.808L8 0z"
                                        />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 16 16">
                                        <path
                                            fill="#e2a400"
                                            fillRule="evenodd"
                                            d="M10.472 5.008L16 5.816l-4 3.896.944 5.504L8 12.616l-4.944 2.6L4 9.712 0 5.816l5.528-.808L8 0z"
                                        />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 16 16">
                                        <path
                                            fill="#e2a400"
                                            fillRule="evenodd"
                                            d="M10.472 5.008L16 5.816l-4 3.896.944 5.504L8 12.616l-4.944 2.6L4 9.712 0 5.816l5.528-.808L8 0z"
                                        />
                                    </svg>
                                    {hit.ratings_average} {console.log(hit)}
                                </span>
                            </p>
                        </footer>
                    </div>
                </article>
            </>
        );
    }

    Aside({ hit }) {
        return (
            <HierarchicalMenu
                attributes={['categories.lvl0', 'categories.lvl1', 'categories.lvl2', 'categories.lvl3']}
            />
        );
    }

     RangeSlider = ({ min, max, currentRefinement, canRefine, refine }) => {
  const [stateMin, setStateMin] = React.useState(min);
  const [stateMax, setStateMax] = React.useState(max);

  React.useEffect(() => {
    if (canRefine) {
      setStateMin(currentRefinement.min);
      setStateMax(currentRefinement.max);
    }
  }, [currentRefinement.min, currentRefinement.max]);

  if (min === max) {
    return null;
  }

  const onChange = ({ values: [min, max] }) => {
    if (currentRefinement.min !== min || currentRefinement.max !== max) {
      refine({ min, max });
    }
  };

  const onValuesUpdated = ({ values: [min, max] }) => {
    setStateMin(min);
    setStateMax(max);
  };
    }

    render(): JSX.Element {
        return (
            <>
                <div className="row">
                    <div className="aside col-lg-3 col-md-3 col-sm-4 col-xs-4">
                        <div className="container-body">
                            <HierarchicalMenu
                                attributes={[
                                    'categories.lvl0',
                                    'categories.lvl1',
                                    'categories.lvl2',
                                    'categories.lvl3',
                                ]}
                            />
                        </div>
                        {/* 
                        <Panel header="Category">
                            <HierarchicalMenu
                                attributes={['hierarchicalCategories.lvl0', 'hierarchicalCategories.lvl1']}
                            />
                        </Panel> */}

                        {/* <Panel header="Categories">
                            <HierarchicalMenu
                                attributes={[
                                    'hierarchicalCategories.lvl0',
                                    'hierarchicalCategories.lvl1',
                                    'hierarchicalCategories.lvl2',
                                ]}
                            />
                        </Panel>
                        <Panel header="Categories">
                            <RefinementList attribute="categories" operator="or" limit={10} />
                        </Panel>*/}

<Rheostat
      min={min}
      max={max}
      values={[currentRefinement.min, currentRefinement.max]}
      onChange={onChange}
      onValuesUpdated={onValuesUpdated}
    >
      <div
        className="rheostat-marker rheostat-marker--large"
        style={{ left: 0 }}
      >
        <div className="rheostat-value">{stateMin}</div>
      </div>
      <div
        className="rheostat-marker rheostat-marker--large"
        style={{ right: 0 }}
      >
        <div className="rheostat-value">{stateMax}</div>
      </div>
    </Rheostat>

                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-8 col-xs-8">
                        <div className="row">
                            <Hits hitComponent={this.Hit} />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default List;

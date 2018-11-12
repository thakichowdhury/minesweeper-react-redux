// @flow

import React, { type Node } from 'react';

import Flag from './Flag';

type CellType = {
  coordinates: Array<number>,
  flagged: boolean,
  clickHandler: (coordinates: Array<number>) => mixed,
};

const Cell = ({
  coordinates,
  flagged,
  clickHandler,
}: CellType): Node => (
  <div onClick={() => clickHandler(coordinates)} onKeyDown={() => clickHandler(coordinates)}>
    {flagged && <Flag />}
  </div>
);

export default Cell;

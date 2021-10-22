import React from 'react';
import { arc } from 'd3';

// Method chaining after a constructor
// Pass argument - then what gets returned, gets chained to next method
export const Mouth = ({ mouthRadius, mouthWidth }) => {
    const mouthArc = arc()
        .innerRadius(mouthRadius)
        .outerRadius(mouthRadius + mouthWidth)
        .startAngle(Math.PI / 2)
        .endAngle(Math.PI * 3 / 2);

    return <path d={mouthArc()} />;
};
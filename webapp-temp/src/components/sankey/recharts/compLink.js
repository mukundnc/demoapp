import { Layer } from 'recharts';
import { useState } from 'react';

export default function SankeyLink( props ) {  
  
    const { sourceX, targetX, sourceY, targetY, sourceControlX, targetControlX, linkWidth, index } = props;
    const [fill, setFill] = useState('#F4F4F4');

    return (
      <Layer key={`CustomLink${index}`}>
        <path
          d={`
            M${sourceX},${sourceY + linkWidth / 2}
            C${sourceControlX},${sourceY + linkWidth / 2}
              ${targetControlX},${targetY + linkWidth / 2}
              ${targetX},${targetY + linkWidth / 2}
            L${targetX},${targetY - linkWidth / 2}
            C${targetControlX},${targetY - linkWidth / 2}
              ${sourceControlX},${sourceY - linkWidth / 2}
              ${sourceX},${sourceY - linkWidth / 2}
            Z
          `}
          fill={fill}
          strokeWidth="0"
          onMouseEnter={() => {
            setFill('#EEEEEE');
          }}
          onMouseLeave={() => {
            setFill('#F4F4F4');
          }}
        />
      </Layer>
    );
}
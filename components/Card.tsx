import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';import React from 'react'
import { Node } from '../lib/interfaces/node.interface' 

export interface CardProps {
    node: Node;
}

const Card = ({ node }: CardProps) => {
    const { average, ceiling, floor, totalSales, volume } = node.stats; 
    return (    
            <React.Fragment>
                <div className="font-bold text-xl">{node.name}</div>
              <CardContent>
                <Typography variant="body2">
                Average: {average}
                </Typography>
                <Typography variant="body2">
                Ceiling: {ceiling}
                </Typography>
                <Typography variant="body2">
                Floor: {floor}
                </Typography>
                <Typography variant="body2">
                Total Sales: {totalSales}
                </Typography>
                <Typography variant="body2">
                Volume: {volume}
                </Typography>
              </CardContent>
            </React.Fragment>   
    )
}

export default Card;
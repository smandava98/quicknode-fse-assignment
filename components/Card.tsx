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
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                <strong>Average: </strong>
                    {average}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <strong>Ceiling: </strong>
                    {ceiling}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <strong>Floor: </strong>
                    {floor}
                </Typography>
                <Typography variant="body2">
                <strong>Total Sales: </strong>
                    {totalSales}
                </Typography>
                <Typography variant="body2">
                <strong>Volume: </strong>
                    {volume}
                </Typography>
              </CardContent>
            </React.Fragment>   
    )
}

export default Card;
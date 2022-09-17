import React, { useState } from 'react'
import { Collection } from '../lib/interfaces/collection.interface';
import { Edge } from '../lib/interfaces/edge.interface';
import Card from './Card'

export interface CollectionViewProps {
  collection: Collection;
  isConnected?: boolean;
}

const CollectionView = ({ collection, isConnected}: CollectionViewProps) => {
    return (
        <main className="flex flex-col justify-center items-center">
            <div className="flex flex-wrap justify-center items-center">
                {collection.edges?.map((edge: Edge) => {
                    return isConnected? (
                        <Card key={edge.node.name} node={edge.node} />
                    ) : null
                })}
            </div>
        </main>
    )
}

export default CollectionView;
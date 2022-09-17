import { useState } from 'react'
import { Collection } from '../lib/interfaces/collection.interface'
import { client } from '../lib/apollo-client'
import { GET_TRENDING_COLLECTIONS } from '../graphql/getTrendingCollectionsQuery'
import { Profile } from '../components/WalletProfile'
import CollectionView from '../components/CollectionView'

export interface HomeProps {
  collection: Collection;
}

const Home = ({ collection }: HomeProps) => {
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const onWalletConnectionChange = (isConnected: boolean) => {
    setIsWalletConnected(isConnected);
  };

  return (
    <main className="container mx-auto max-w-screen-lg">
      <Profile onWalletConnectionChange={onWalletConnectionChange} />
      <CollectionView collection={collection} isConnected={isWalletConnected} /> 
    </main>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_TRENDING_COLLECTIONS
  })
  return {
    props: {
      collection: data.trendingCollections,
    }
  }
}

export default Home;
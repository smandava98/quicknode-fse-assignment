This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Note: Please create a file ".env.local" in the root directory and add the following: API_KEY={YOUR_QUICKNODE_API_KEY_HERE} 

## Technologies Used
- Next.js
- React
- Typescript
- Tailwind
- GraphQL
- Apollo

## External Libraries Used
- Material UI
- wagmi from Coinbase (to connect to Metamask)

## Walkthrough
You can connect with Metamask to view the trending NFT Collections. You can view the GraphQL query I used from icy.tools under the graphql folder. 

## Technical Questions
To handle user authentication, we most definitely need a database especially since writing to a blockchain is quite slow. There is a lot of data to store from user permissions to user identity. We have two options here: SQL DB or NoSQL DB. SQL DBs support ACID transactions , require object relational mapping, and have fixed rows and columns. NoSQL DBs utilize key-value pairs and can store large amounts of data with simple lookup queries (most don't support ACID though there are exceptions like MongoDB).
If there are a lot of relations within entities or you need to do complex transactions, a SQL is the best fit. However, for our purposes, the access patterns are fairly simple. We can utilize a NoSQL DB like MongoDB and have a single JSON doc per user id.  Also, since we want to handle thousands of requests per second, NoSQL is still better because it is very fast to read on a particular data entry (since its a key-value pair).

I'm assuming this is user authentication to view particular NFTs:
{
    userId:
        [
            NFT1,
            NFT2,
            ...,
            NFT10
        ]
}

We can check if a particular NFT is within that user's access list and verify that way. 

The kind of API I would use is a GraphQL API. REST APIs are known to underfetch/overfetch which can be problematic especially since, from my personal observations, top NFT collections seem to change frequently. If I want to see say top 20 collections, I don't want to get less than that or even more that. 

Also GraphQL allows schema stitching which can be pretty important especially if, regarding an NFT, there may be multiple APIs for different components of an NFT. We can easily merge schemas to make things even more accessible for the client. 

To scale this sytem, the first thing I would consider is implementing a load balancer to distribute the load evenly among servers. We can use many different methods to actually distribute the load including round robin (which is the one we will stick with for now).

Assuming the application can handle at most 100 req/s, we would also need to horizontally scale to 10 machines to accomodate 1k req/s. 
The next two optimizations will rely on optimizing our DB and our API. 

Since this service is read-heavy, we can go even further and scale out our database layer via sharding. There might be hotspots if it is all in one DB, so we can split up the DB based on a hash so each machine (or cluster of them) can read their own database. 

The last portion of the system is allowing it to send real-time updates to clients as new data is available. We could use long polling to poll the server at a specific time interval. We could also utilize a Pub Sub system (though I warn: this might be a tad bit overkill) so that certain users can subscribe to certain collection-related topics and we can stream updates to those users. However, we can get away with simple long polling for now since its also the simplest way to establish a connection to a server without using specific protcols like WebSocket, etc.






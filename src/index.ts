import { ApolloServer } from "apollo-server";
import { BooksAPI } from './datasources/books-api';

// 1
import { schema } from "./schema";

const context = async () => {
    return {
        dataSources: {
            booksAPI: new BooksAPI()
        }
    }

}


export const server = new ApolloServer({
    schema,
    context,
});



const port = 3700;
// 2
server.listen({port}).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
import { objectType, extendType, nonNull, stringArg, intArg } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen";  

export const book = objectType({
    name: 'Book',
    definition(t) {
        t.nonNull.int('idbooks');
        t.nonNull.string('title');
        t.nonNull.string('isbn');
        t.nonNull.int('yearPublished');
    },
})

let books: NexusGenObjects["Book"][]= [   // 1
    {
        idbooks: 1,
        title: "A Tale of Two Cities",
        isbn: "348930498",
        yearPublished: 1837,
    },
    {
        idbooks: 2,
        title: "A Christmas Carol",
        isbn: "348930499",
        yearPublished: 1839,
    },
];

export const BookQuery = extendType({  // 2
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("feed", {   // 3
            type: "Book",
            resolve(parent, args, context, info) {    // 4
                return context.dataSources.booksAPI.getAllBooks(); 
            },
        });
    },
});

export const BookMutation = extendType({  // 1
    type: "Mutation",    
    definition(t) {
        t.nonNull.list.nonNull.field("post", {  // 2
            type: "Book",  
            args: {   // 3
                title: nonNull(stringArg()),
                isbn: nonNull(stringArg()),
                yearPublished: nonNull(intArg()),
            },
            
            resolve(parent, args, context, info) {                                  
                return context.dataSources.booksAPI.createBook(args.title, args.isbn, args.yearPublished);  
            },
        });
    },
});
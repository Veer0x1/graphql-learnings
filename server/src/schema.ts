import gql from "graphql-tag";


export const typeDefs = gql`
"A track is a group of Modules that teaches about a specific topic"
type Track{
    id:ID!
    "The track's title"
    title:String!
    "The track's main author"
    author:Author!
    "The track's main illustration to display in track card or track page detail"
    thumbnail:String
    "The track's approximate length to complete, in minutes"
    length:Int
    "The number of modules this track contains"
    moduleCount:Int

}

type Albums{
    id:ID!
    title:String!
    thumbnail:String
    length:Int
    moduleCount:Int
}

"Author of a complete Track or a Module"
type Author {
  id: ID!
  name: String!
  photo: String
}

type Query{
    "Get tracks array for homepage grid"
    trackForHome: [Track!]!
}
`;
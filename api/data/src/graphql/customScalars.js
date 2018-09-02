import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

// eslint-disable-next-line import/prefer-default-export
export const DateScalarType = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  parseValue(value) {
    return new Date(value); // value from the client
  },
  serialize(value) {
    return new Date(`${value}Z`); // value sent to the client
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10); // ast value is always in string format
    } else if (ast.kind === Kind.STRING) {
      return ast.value;
    }
    return null;
  },
});

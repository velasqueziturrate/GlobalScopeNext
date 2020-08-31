import gql from "graphql-tag";

export const MUTATION_CONTACTANOS = gql`
  mutation contactanosGlobal($message: Message!) {
    contactanosGlobal(message: $message)
  }
`;
export const MUTATION_SEND_FRIEND = gql`
  mutation sendFriend($to: String!, $url: String!) {
    sendFriend(to: $to, url: $url)
  }
`;
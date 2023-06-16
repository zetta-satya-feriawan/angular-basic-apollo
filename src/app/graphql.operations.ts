import { gql } from "apollo-angular"

const GET_SCHOOL = gql`
  query GetAllSchools {
    GetAllSchools(pagination: { limit: 20, page: 0 }) {
      short_name
      long_name
      status
    }
  }
`

export { GET_SCHOOL }

import { gql } from "@apollo/client";

export const GET_DONORS = gql`
  query FindAllDonors {
  findAllDonors {
    _id
    title
    firstName
    lastName
    email
    phone
    generateDate {
      hebrewDate
      gregorianDate
      time
    }
    address {
      city
      street
      streetNumber
      areaNum
      longitude
      latitude
    }
  }
}
`;
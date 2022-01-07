import {
  gql
} from '@apollo/client/core'

const Content = gql `
query content {
  allProjects {
    id
    title
    blurb
    coverPicture {
      url
    }
    what
    description
    imageOne {
      url
    }
    why
    solves
    imageTwo {
      url
    }
    how
    process
    repo
    site
    tags
  }
  about {
    about
  }
}
`
export {
  Content
}
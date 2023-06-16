import { APOLLO_OPTIONS, ApolloModule } from "apollo-angular"
import { HttpLink } from "apollo-angular/http"
import { NgModule } from "@angular/core"
import {
  ApolloClientOptions,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client/core"
import { env } from "./env/env"

const uri = env.apiUrl
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const http = httpLink.create({ uri: uri })
  const authLink = new ApolloLink((operation, forward) => {
    const token = localStorage.getItem(env.tokenKey)
    operation.setContext({
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    })
    return forward(operation)
  })

  return {
    link: authLink.concat(http),
    cache: new InMemoryCache(),
  }
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}

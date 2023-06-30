import { NgModule } from '@angular/core';
import {
  ApolloClientOptions,
  ApolloLink,
  InMemoryCache,
} from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import {
  APOLLO_FLAGS,
  APOLLO_NAMED_OPTIONS,
  APOLLO_OPTIONS,
  ApolloModule,
} from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

const errorLink = onError(({ graphQLErrors, networkError, response }) => {
  console.log('graphQLErrors', graphQLErrors);
  console.log('networkError', networkError);
  console.log('response', response);

  // React only on graphql errors
  if (graphQLErrors && graphQLErrors.length > 0) {
    if (
      (graphQLErrors[0] as any)?.statusCode >= 400 &&
      (graphQLErrors[0] as any)?.statusCode < 500
    ) {
      // handle client side error
      console.error(`[Client side error]: ${graphQLErrors[0].message}`);
    } else {
      // handle server side error
      console.error(`[Server side error]: ${graphQLErrors[0].message}`);
    }
  }
  if (networkError) {
    // handle network error
    console.error(`[Network error]: ${networkError.message}`);
  }
});

const basicContext = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Accept: 'application/json;charset=utf-8',
      // authorization: `Bearer random token`,
      'Content-Type': 'application/json',
    },
  };
});
export function createDefaultApollo(
  httpLink: HttpLink
): ApolloClientOptions<unknown> {
  const cache = new InMemoryCache();

  // create http
  const http = httpLink.create({
    uri: 'http://localhost:3000/graphql',
  });

  const options: ApolloClientOptions<unknown> = {
    connectToDevTools: true,
    assumeImmutableResults: true,
    cache,
    link: ApolloLink.from([basicContext, errorLink, http]),
    defaultOptions: {
      watchQuery: {
        errorPolicy: 'all',
        fetchPolicy: 'cache-and-network',
        notifyOnNetworkStatusChange: true,
        // pollInterval: 1000,
      },
    },
  };
  return options;
}

export function createNamedApollo(
  httpLink: HttpLink
): Record<string, ApolloClientOptions<any>> {
  return {
    spaceX: {
      name: 'spaceX',
      link: httpLink.create({ uri: 'http://localhost:3000/graphql/' }),
      cache: new InMemoryCache(),
    },
  };
}

@NgModule({
  imports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_FLAGS,
      useValue: {
        useInitialLoading: true, // enable it here
      },
    },
    {
      provide: APOLLO_OPTIONS,
      useFactory: createDefaultApollo,
      deps: [HttpLink],
    },
    {
      provide: APOLLO_NAMED_OPTIONS,
      useFactory: createNamedApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}

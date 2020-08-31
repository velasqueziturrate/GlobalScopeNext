import gql from "graphql-tag";

export const QUERY_EMISORES = gql`
  {
    emisores {
      _id
      nombre
      logo
      pais {
        nombre
        bandera
      }
    }
  }
`;
export const QUERY_EMISIONES = gql`
  {
    emisiones {
      _id
      fechaAprovacion
      monto
      programa
      tipoTitulo
      emisor {
        nombre
      }
      pais {
        nombre
      }
    }
  }
`;
export const QUERY_LEYESNORMATIVAS = gql`
  {
    leyesNormativasByDate {
      _id
      titulo
      descripcion
      htmlScribd
      fecha
      pais {
        nombre
      }
    }
  }
`;
export const QUERY_LEYNORMATIVA = gql`
  query leyesNormativasID($_id: String!) {
    leyesNormativasID(_id: $_id) {
      _id
      titulo
      descripcion
      htmlScribd
      fecha
      pais {
        nombre
      }
    }
  }
`;
export const QUERY_EMISORES_ID = gql`
  query emisorID($_id: String!) {
    emisorID(_id: $_id) {
      _id
      nombre
      logo
      pais {
        nombre
        _id
      }
      descripcion
      facebook
      twitter
      instagram
      urlWeb
    }
  }
`;

export const QUERY_NOTICIAS = gql`
  query posts($first: Int!) {
    posts(first: $first, where: { categoryId: 8 }) {
      nodes {
        postId
        title
        content
        date
        featuredImage {
          sourceUrl
        }
      }
    }
  }
`;
export const QUERY_INFORMES = gql`
  query posts($first: Int!) {
    posts(first: $first, where: { categoryId: 5 }) {
      nodes {
        postId
        title
        content
        date
        featuredImage {
          sourceUrl
        }
      }
    }
  }
`;

export const QUERY_DICTAMENES = gql`
  query posts($first: Int!) {
    posts(first: $first, where: { categoryId: 7667 }) {
      nodes {
        postId
        title
        featuredImage {
          sourceUrl
        }
      }
    }
  }
`;

export const QUERY_DICTAMEN = gql`
  query postBy($postId: Int!) {
    postBy(postId: $postId) {
      postId
      title
      content
      date
      id
      featuredImage {
        sourceUrl
      }
    }
  }
`;
export const QUERY_CLIENTES_BY_ALPHABETIC = gql`
  query emisorByOrdenAlfabetico($first: Int!, $after: Int!) {
    emisorByOrdenAlfabetico(first: $first, after: $after) {
      _id
      nombre
      logo
      fichaCliente
    }
  }
`;

export const EMISIONES_FOR_YEAR = gql`
  query emisionesForYear($year: Int!) {
    emisionesForYear(year: $year) {
      _id
      fechaAprovacion
      monto
      programa
      tipoTitulo
      nroProvidencia
      statusCliente
      idDictamen
      idProvidencia
      idProspecto
      emisor {
        _id
        nombre
      }
    }
  }
`;
export const TOTAL_FOR_YEAR = gql`
  query totalForYear($year: Int!) {
    totalForYear(year: $year)
  }
`;
export const GET_NEXT_LEY = gql`
  query leyesNormativasNext($_id: String!) {
    leyesNormativasNext(_id: $_id)
  }
`;

export const GET_PREV_LEY = gql`
  query leyesNormativasPrev($_id: String!) {
    leyesNormativasPrev(_id: $_id)
  }
`;
export const EMISIONES_BY_EMISOR = gql`
  query calificacionesByEmisor($_id: String!, $first: Int!, $after: Int!) {
    calificacionesByEmisor(_id: $_id, first: $first, after: $after) {
      idDictamen
      idProspecto
      idProvidencia
      fechaAprovacion
      D_R
      fecha
      programa
      tipoTitulo
      monto
    }
  }
`;

export const NUMBER_OF_EMISIONES_BY_EMISOR = gql`
  query nroCalificacionesByEmisor($_id: String!) {
    nroCalificacionesByEmisor(_id: $_id)
  }
`;
export const EMISION_BY_DICTAMEN = gql`
  query emisionByDictamen($_id: String!) {
    emisionByDictamen(_id: $_id) {
      idProvidencia
      idProspecto
      emisor {
        _id
        nombre
      }
    }
  }
`;
export const EMISION_BY_PROSPECTO = gql`
  query emisionByProspecto($_id: String!) {
    emisionByProspecto(_id: $_id) {
      idProvidencia
      idDictamen
      emisor {
        _id
      }
    }
  }
`;
export const EMISION_BY_PROVIDENCIA = gql`
  query emisionByProvidencia($_id: String!) {
    emisionByProvidencia(_id: $_id) {
      idDictamen
      idProspecto
      emisor {
        _id
      }
    }
  }
`;
export const RANGE_YEAR = gql`
  {
    rangeYearEmision {
      firstYear
      lastYear
    }
  }
`;
export const QUERY_PAISES = gql`
  {
    paisesActivos {
      abreviatura
      nombre
      activo
    }
  }
`;

export const INFORME_BY_YEAR = gql`
  query posts($first: Int!, $after: String, $date: Int!) {
    posts(
      first: $first
      after: $after
      where: { categoryId: 5, dateQuery: { year: $date } }
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        postId
        date
        featuredImage {
          sourceUrl
        }
        title
        content
      }
    }
  }
`;
export const QUERY_HAS_NEXT_INFORME = gql`
 query posts($after: String ) {
   posts(first:2 , after:$after ) {
     nodes { 
       postId
     }
   }
 }
`

export const QUERY_HAS_PREV_INFORME = gql`
query posts($before:String) {
  posts(first:2 , before:$before ) {
    nodes { 
      postId
    }
  }
}

`
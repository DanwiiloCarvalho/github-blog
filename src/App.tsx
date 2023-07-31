import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Olá mundo!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iusto
        sint dignissimos veritatis officiis atque, hic corrupti nulla, minima
        deserunt molestiae repellat in dolores repellendus aut mollitia. Qui
        consectetur numquam, vel sit sint, magnam nemo, repellat amet quod
        laboriosam quasi neque natus voluptatibus molestias quas atque modi
        quisquam saepe officiis ex beatae distinctio blanditiis odit corporis.
        Deleniti, ducimus? Animi aperiam sunt rem veniam dolores accusamus saepe
        deserunt nam vitae iure ut, perferendis voluptas nobis ducimus impedit
        vel error corrupti. Commodi voluptatibus officia tenetur. Numquam nihil
        esse, repellendus nesciunt minima nisi ea debitis. Quo ipsum voluptas,
        ad quidem odit dignissimos laudantium.
      </p>
      <GlobalStyle theme={defaultTheme} />
    </ThemeProvider>
  )
}

import {
  Section,
  Container,
  Box,
  Heading,
  Code,
  Grid,
  Flex,
  Text,
  Paragraph,
} from '@modulz/design-system';

export function FeaturesGrid() {
  return (
    <Section size={{ '@initial': '2', '@bp1': '3' }}>
      <Container size="2">
        <Heading size="3" css={{ ta: 'center', mb: '$2' }}>
          Funcionalidades
        </Heading>
        <Paragraph size="2" css={{ ta: 'center', mb: '$8' }}>
          A fully-featured styling library.
          Um biblioteca de estilização completa
        </Paragraph>

        <Grid
          css={{
            gap: '$6',
            gridTemplateColumns: '1fr',
            '@bp2': {
              gap: '$8',
              gridTemplateColumns: '1fr 1fr',
            },
          }}
        >
          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Excelente Desempenho
            </Text>
            <Text
              as="p"
              size={{ '@initial': '4', '@bp2': '4' }}
              css={{ lineHeight: '27px', color: '$slate11' }}
            >
              Stitches evita interpolações de propriedade desnecessárias em tempo de execução, dando-lhe
              mais desempenho do que outras bibliotecas de estilização.
            </Text>
          </Box>

          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Interpretação no Lado do Servidor
            </Text>

            <Text
              as="p"
              size={{ '@initial': '4', '@bp2': '4' }}
              css={{ lineHeight: '27px', color: '$slate11' }}
            >
              Stitches suporta interpretação no lado do servidor transnavegadora, até para estilos moldáveis
              e variantes.
            </Text>
          </Box>

          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Experiência de Programação
            </Text>

            <Text
              as="p"
              size={{ '@initial': '4', '@bp2': '4' }}
              css={{ lineHeight: '27px', color: '$slate11' }}
            >
              Com uma API completamente tipada, propriedades de consciência simbólica, utilitários 
              personalizados, a Stitches oferece uma experiência de programação intuitiva e divertida.
            </Text>
          </Box>

          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              CSS de Caminho Crítico
            </Text>

            <Text
              as="p"
              size={{ '@initial': '4', '@bp2': '4' }}
              css={{ lineHeight: '27px', color: '$slate11' }}
            >
              Stitches só injeta os estilos que são de fato utilizados, então os teus utilizadores não
              descarregam CSS desnecessário.
            </Text>
          </Box>

          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Sobrepõe Marcadores de Componente
            </Text>

            <Text
              as="p"
              size={{ '@initial': '4', '@bp2': '4' }}
              css={{ lineHeight: '27px', color: '$slate11' }}
            >
              Um propriedade <Code>as</Code> polimórfica é incluída nos componentes retornados da{' '}
              função <Code>styled</Code>.
            </Text>
          </Box>

          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Sobrepõe Estilos de Componente
            </Text>

            <Text
              as="p"
              size={{ '@initial': '4', '@bp2': '4' }}
              css={{ lineHeight: '27px', color: '$slate11' }}
            >
              Stitches fornece uma propriedade <Code>css</Code>, que permite que a sobreposição de estilo
              seja aplicada na camada de consumo.
            </Text>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
}

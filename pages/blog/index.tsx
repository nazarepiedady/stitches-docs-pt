import NextLink from 'next/link';
import { Box, Container, Text, Flex, Link, Badge } from '@modulz/design-system';
import { parseISO, format } from 'date-fns';
import { authors } from '@data/authors';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { getAllFrontmatter } from '@lib/mdx';
import { Header } from '@components/Header';

export default function Blog({ frontmatters }) {
  return (
    <Box>
      <TitleAndMetaTags title="Blogue — Stitches" description="Mais a respeito do que estamos fazendo." />

      <Header />

      <Container size="3" css={{ textAlign: 'center', mb: '$4' }}>
        <Text as="h1" size={{ '@initial': '6', '@bp2': '7' }} css={{ mb: '$4', fontWeight: 500 }}>
          Blogue
        </Text>
        <Text as="h2" size={{ '@initial': '4', '@bp2': '6' }} css={{ color: '$slate11', mb: '$4' }}>
          Mais a respeito do que estamos fazendo.
        </Text>
      </Container>

      <Container size="2" css={{ my: '$8' }}>
        {frontmatters.map((frontmatter) => (
          <Box
            key={frontmatter.title}
            css={{
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <Box css={{ mb: '$7' }}>
              <NextLink href={`/blog/${frontmatter.slug}`} passHref>
                <Link>
                  <Text
                    as="h3"
                    size="6"
                    css={{ display: 'inline', fontWeight: 500, lineHeight: '30px' }}
                  >
                    {frontmatter.title}
                  </Text>
                </Link>
              </NextLink>
              <Flex css={{ mt: '$2', alignItems: 'center' }}>
                <Text as="time" size="2" css={{ color: '$slate11' }}>
                  {format(parseISO(frontmatter.publishedAt), 'MMMM yyyy')}
                </Text>
                <Text size="2" css={{ color: '$slate11' }}>
                  &nbsp;by {authors[frontmatter.by].name}
                </Text>
                {frontmatter.type === 'changelog' && <Badge css={{ ml: '$2' }}>Relatório de Mudança</Badge>}
              </Flex>
              <Text as="p" size="4" css={{ lineHeight: '25px', mt: '$2', color: '$slate11' }}>
                {frontmatter.description}
              </Text>
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
}

export function getStaticProps() {
  const frontmatters = getAllFrontmatter('blog');
  const sortedFrontmatters = frontmatters.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
  return { props: { frontmatters: sortedFrontmatters } };
}

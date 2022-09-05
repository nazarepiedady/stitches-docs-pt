import React from 'react';
import NextLink from 'next/link';
import { Box, Container, Grid, Text, Flex, Separator, Link } from '@modulz/design-system';
import { StitchesLogo } from '@components/StitchesLogo';
import { ExternalIcon } from './ExternalIcon';

export const Footer = () => {
  return (
    <Box as="footer" css={{ py: '$9' }}>
      <Flex css={{ justifyContent: 'center', mb: '$9' }}>
        <Separator size="2" />
      </Flex>
      <Container size="3">
        <Grid
          css={{
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '$6',
            '& ul': { listStyle: 'none', margin: '0', padding: '0' },
            '@bp2': {
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '$3',
            },
          }}
        >
          <Flex
            css={{
              alignItems: 'center',
              '@bp2': {
                flexDirection: 'column',
                alignItems: 'start',
              },
            }}
          >
            <NextLink href="/" passHref>
              <Box
                as="a"
                css={{
                  color: '$hiContrast',
                  display: 'inline-flex',
                  '&:focus': {
                    boxShadow: 'none',
                  },
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    width: 1,
                    height: 1,
                    padding: 0,
                    margin: -1,
                    overflow: 'hidden',
                    clip: 'rect(0, 0, 0, 0)',
                    whiteSpace: 'nowrap',
                    border: 0,
                  }}
                >
                  Página Principal da Stitches
                </span>
                <StitchesLogo />
              </Box>
            </NextLink>
            <Text
              as="h6"
              size="2"
              css={{
                lineHeight: '20px',
                ml: '$4',
                color: '$slate11',
                pr: '$8',
                '@bp2': { mt: '$5', ml: '0' },
              }}
            >
              Stitches é um projeto desenvolvido pela <Link href="https://workos.com">WorkOS</Link>.
            </Text>
          </Flex>
          <Box>
            <Text as="h6" size="3" css={{ fontWeight: 500, lineHeight: '20px' }}>
              Visão Geral
            </Text>
            <ul>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/docs/introduction" passHref>
                    <Link variant="subtle">Introdução</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/docs/tutorials" passHref>
                    <Link variant="subtle">Lições Práticas</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/docs/api" passHref>
                    <Link variant="subtle">API</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/docs/frequently-asked-questions" passHref>
                    <Link variant="subtle">FAQ</Link>
                  </NextLink>
                </Text>
              </li>
            </ul>
          </Box>
          <Box>
            <Text as="h6" size="3" css={{ fontWeight: 500, lineHeight: '20px' }}>
              Docs
            </Text>
            <ul>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/docs/installation" passHref>
                    <Link variant="subtle">Instalação</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/docs/styling" passHref>
                    <Link variant="subtle">Estilização</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/docs/variants" passHref>
                    <Link variant="subtle">Variantes</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/docs/tokens" passHref>
                    <Link variant="subtle">Configuração</Link>
                  </NextLink>
                </Text>
              </li>
            </ul>
          </Box>
          <Box>
            <Text as="h6" size="3" css={{ fontWeight: 500, lineHeight: '20px' }}>
              Comunidade
            </Text>
            <ul>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="/blog" passHref>
                    <Link variant="subtle">Blogue</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <Link
                    variant="subtle"
                    href="https://github.com/stitchesjs/stitches"
                    css={{ display: 'inline-flex', alignItems: 'center' }}
                  >
                    GitHub
                    <Flex as="span" css={{ ml: '$1', color: '$slate8' }}>
                      <ExternalIcon />
                    </Flex>
                  </Link>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <Link
                    variant="subtle"
                    href="https://twitter.com/stitchesjs"
                    css={{ display: 'inline-flex', alignItems: 'center' }}
                  >
                    Twitter
                    <Flex as="span" css={{ ml: '$1', color: '$slate8' }}>
                      <ExternalIcon />
                    </Flex>
                  </Link>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <Link
                    variant="subtle"
                    href="https://discord.com/invite/H4eG3Mk"
                    css={{ display: 'inline-flex', alignItems: 'center' }}
                  >
                    Discord
                    <Flex as="span" css={{ ml: '$1', color: '$slate8' }}>
                      <ExternalIcon />
                    </Flex>
                  </Link>
                </Text>
              </li>
            </ul>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

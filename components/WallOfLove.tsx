import * as React from 'react';
import debounce from 'lodash.debounce';
import { elementScrollIntoViewPolyfill } from 'seamless-scroll-polyfill';
import { createContext } from '@radix-ui/react-context';
import { useCallbackRef } from '@radix-ui/react-use-callback-ref';
import { composeEventHandlers } from '@radix-ui/primitive';
import { useComposedRefs } from '@radix-ui/react-compose-refs';
import { Box, Flex, Text, Button } from '@modulz/design-system';
import { ArrowRightIcon, ArrowLeftIcon } from '@modulz/radix-icons';
import { Tweet } from '@components/Tweet';

export function WallOfLove() {
  React.useEffect(() => {
    elementScrollIntoViewPolyfill();
  }, [elementScrollIntoViewPolyfill]);
  return (
    <Carousel css={{ position: 'relative', pt: '$7' }}>
      <CarouselSlideList
        css={{
          ox: 'auto',
          oy: 'hidden',
          py: '$1',
          WebkitoverflowScrolling: 'touch',
          cursor: 'grab',

          // hide scrollbar
          MsOverflowStyle: 'none',
          scrollbarWidth: 'none',

          '&::-webkit-scrollbar': {
            display: 'none',
          },

          '&[data-state="dragging"]': {
            cursor: 'grabbing',
            userSelect: 'none',
          },

          '&[data-state="dragging"] *': {
            cursor: 'inherit',
          },
        }}
      >
        <Flex css={{ ai: 'flex-start', pl: '$5', float: 'left' }}>
          {/* <CarouselSlide><Tweet
            avatar="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
            url="https://twitter.com/djm_/status/1364869309860831238"
            author="Darian Moody"
            username="djm_"
          >
            I've been banging on about Stitches these past few because I've been so happy working
            with it on the side.
            <br />
            <br />
            5 years ago everyone was in Sketch.
            <br />
            <br />
            Now everyone's in Figma.
            <br />
            <br />
            In another few, in-browser design tools will be exporting code &amp; Stitches is here
            to support that future.
          </Tweet></CarouselSlide> */}
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1315686618854981638/oG4b8GNN_x96.jpg"
              url="https://twitter.com/hennessyevan/status/1355266310897364992"
              author="Evan Hennessy"
              username="hennessyevan"
            >
              De todas as bibliotecas com as quais construi sistemas de desenho: SC, emotion, xstyled, styled-system, theme-ui etc., a{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @stitchesjs
              </Text>{' '}
              foi a mais ergonómica e agradável. Dei uma vista de olhos no mada de estradas e parece que está ficando ainda melhor.
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1139086177326239745/lieJ3qI1_x96.jpg"
              url="https://twitter.com/giuseppegurgone/status/1364506245009448960"
              author="Giuseppe"
              username="giuseppegurgone"
            >
              Eu fui responsável pelo SUIT CSS, trabalhei sobre sistemas de desenho na scale quando ainda as chamávamos de guia de estilo (Styleguide), criei algumas bibliotecas de CSS em JS e assisti este espaço por um longo período e{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @stitchesjs
              </Text>{' '}
              parece ser a biblioteca mais promissora no mercado.
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1360289301301518336/s6mIt7H2_x96.jpg"
              url="https://twitter.com/accezr/status/1362011589323481091"
              author="Anna Carolina"
              username="accezr"
            >
              Eu utilizei a Stitches com a Radix para construir uma biblioteca de componente base para o nosso Sistema de Desenho e tenho que dizer que estou amando a experiência de programação. Obrigado à{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @modulz
              </Text>{' '}
              por tornar a minha vida muito mais fácil. As atualizações recentes estão 🔥🔥
            </Tweet>
          </CarouselSlide>
          {/* <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1087983327922085888/3Qr4OXoT_x96.jpg"
              url="https://twitter.com/joebell_/status/1364832150655299585"
              author="Joe Bell"
              username="joebell_"
            >
              I just moved my site over to Stitches beta and I have absolutely nothing bad to say
              about it—this is the library I’ve been waiting for.
            </Tweet>
          </CarouselSlide> */}
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1088534366047719424/_L_NjYJk_x96.jpg"
              url="https://twitter.com/dylanklohr/status/1369097157396021251"
              author="Dylan Klohr"
              username="dylanklohr"
            >
              O equipa da{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @modulz
              </Text>{' '}
              é sem dúvida a equipa mais devota que vi. Nunca vi eu uma equipa responder a um relatório de bug, em uma construção CANÁRIA, através de um canal de Discord e ter uma questão resolvida por um responsável em &lt; 10 minutos. 🤯{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @jon_neal
              </Text>
              .{' '}
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/754886061872979968/BzaOWhs1_x96.jpg"
              url="https://twitter.com/markdalgleish/status/1364827475595825155"
              author="Mark Dalgleish"
              username="markdalgleish"
            >
              Ouvindo o{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @peduarte
              </Text>{' '}
              falando sobre{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @stitchesjs
              </Text>
              , o tostão finalmente caiu para mim. Eles desenharam uma API que parece pertencer ao painel de opções de uma ferramenta de desenho porque, claro, também estão construindo a{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @modulz
              </Text>
              .
            </Tweet>
          </CarouselSlide>
          {/* <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1326128472071282690/yYYPj6Jk_x96.jpg"
              url="https://twitter.com/braposo/status/1300941603490746368"
              author="Bernardo Raposo"
              username="braposo"
            >
              This break from the code is actually why stitches is much more than a styling library.
              It is a common language that both designers and developers understand, they just use
              different tools to "communicate".
            </Tweet>
          </CarouselSlide> */}
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1347379204313260032/JnYGQofT_x96.jpg"
              url="https://twitter.com/raunofreiberg/status/1309087632308277251"
              author="Rauno Freiberg"
              username="raunofreiberg"
            >
              Utilizei a{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @stitchesjs
              </Text>{' '}
              por uma semana sobre um produto real e eu nunca tive uma colaboração agradável, vocabulário partilhado, e entendimento mutuo com o nosso desenhista. Definir simbólicos e ser muito sistemático e restrito acerca da Interface de Utilizador que construimos nunca foi tão fácil.
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1330591116245217281/LPrN9b8r_x96.jpg"
              url="https://twitter.com/msanromanv/status/1364549916656357380"
              author="Mike San Román"
              username="msanromanv"
            >
              Isto definitivamente parece um passo adiante, não só por causa benefício em relação ao desempenho, suporte para SSR, etc, porém a experiência de programação é fantástica.
              <br />
              <br />
              EU acho que não tenho estado tão entusiasmado a respeito de uma biblioteca de estilização.
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1259920640208973825/V0Y020YR_x96.jpg"
              url="https://twitter.com/razvan_pavel/status/1364538366126096389"
              author="Răzvan Pavel"
              username="razvan_pavel"
            >
              Algo que não vejo com frequência em nenhuma leitura sobre produto e tecnologia: experiência de programação &amp; depuração! É este foco sobre a utilização de tecnologia como uma ferramenta e colocando humanos em primeiro é que torna um produto bem-sucedido.{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @stitchesjs
              </Text>{' '}
              provavelmente estará por aqui por uns tempos.
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/939471299931443201/sNFkFAfQ_x96.jpg"
              url="https://twitter.com/1stfloor/status/1364254660119453698"
              author="🆅🅸🅽🅲🅴"
              username="1stfloor"
            >
              A coisa fantástica para mim como um desenhista foi em ver a abordagem sistemática para utilização de simbólicos de desenho em um nível que poderia entender 😂 eu acredito que a lacuna entre o desenho e desenvolvimento está finalmente se estreitando e soluções como a Stitches e a Modulz aceleraram este processo.
            </Tweet>
          </CarouselSlide>
          {/* <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1301461093794144257/-2zXnDm5_x96.jpg"
              url="https://twitter.com/petecorreia/status/1364215279585288194"
              author="Pete Correia"
              username="petecorreia"
            >
              I’ve used just about every styling solution available and I’m very keen to give{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @stitchesjs
              </Text>{' '}
              a try. It combines all of my wishlist of features for styling in a component world, at
              scale.
            </Tweet>
          </CarouselSlide> */}
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1087983327922085888/3Qr4OXoT_x96.jpg"
              url="https://twitter.com/joebell_/status/1363870814312017921"
              author="Joe Bell 🔔"
              username="joebell_"
            >
              A Stitches praticamente colocou um visto em tudo sobre a minha lista de CSS-em-JS. Eu não poderia voltar a escrever CSS sem ela.
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1305488039708422144/S08ekcHl_x96.jpg"
              url="https://twitter.com/ggsimm/status/1362359547411726339"
              author="Gianmarco Simone ✨"
              username="ggsimm"
            >
              Agora sou um convertido a{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @stitchesjs
              </Text>. Isto é só uma maneira superior de escrever-se CSS-em-JS, e estou entusiasmado para ver onde ela irá.
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1289210045834694656/qe4jALem_x96.jpg"
              url="https://twitter.com/ChrisHBrown55/status/1364967237128499211"
              author="Chris"
              username="chrishbrown55"
            >
              Isto ainda pode ser a melhor implementação de CSS-em-JS. Ela faz o que a CSS-em-JS sempre tem falhado em fazer no passado: corrigir todos os problemas que a CSS e a Sass já resolveram.
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/941815513235144705/9QPZ88e0_x96.jpg"
              url="https://twitter.com/kylemh_/status/1358818837651619843"
              author="Kyle Holmberg"
              username="kylemh_"
            >
              Eu não tenho estado entusiasmado por ferramental tecnológico desde a Next.js a 2 anos atrás.
              <br />
              <br />
              Estou sentindo-me daquela maneira a respeito da{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @stitchesjs
              </Text>{' '}
              Agora.
            </Tweet>
          </CarouselSlide>
          {/* <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/941815513235144705/9QPZ88e0_x96.jpg"
              url="https://twitter.com/kylemh_/status/1341797160346476545"
              author="Kyle Holmberg"
              username="kylemh_"
            >
              Oh. My. God.
              <br />
              <br />
              <Text variant="blue" css={{ display: 'inline' }}>
                @stitchesjs
              </Text>{' '}
              is everything I want in a styling library.
            </Tweet>
          </CarouselSlide> */}
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1356833034390167553/HqzUcHyq_x96.jpg"
              url="https://twitter.com/elkevinwolf/status/1333975568967229442"
              author="Kevin Wolf"
              username="elkevinwolf"
            >
              Eu estou realmente impressionado com Stitches por {' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @modulz
              </Text>{' '}
              . A criação de sistema de desenho com suporte de TypeScript forte e a facilidade de extensão nunca tinham sido tão fáceis. Bom trabalho {' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @peduarte
              </Text>{' '}
              e equipa! 🚀
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1225246166238912513/jFmedZP6_x96.jpg"
              url="https://twitter.com/JimmyDCleveland/status/1332719743510343682"
              author="Jimmy Cleveland"
              username="JimmyDCleveland"
            >
              Eu nunca fui tão fã da sintaxe de objeto de JavaScript para CSS no passado, mas tenho estado a estar a testar a{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @stitchesjs
              </Text>{' '}
              sobre um projeto pessoal e até aqui tem sido muito divertido.
              <br />
              <br />
              O desempenho promete e a sugestão de tipo torna-a realmente atraente. A documentação também é boa.
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1087570379667853313/EKd7ug9y_x96.jpg"
              url="https://twitter.com/KrComet/status/1317014700593344514"
              author="Hyeseong Kim"
              username="KrComet"
            >
              <Text variant="blue" css={{ display: 'inline' }}>
                @stitchesjs
              </Text>{' '}
              é a melhor. Agora estou bastante certo de que todas bibliotecas de CSS em JS deveriam ter uma API de variantes (estática) como um cidadão de primeira classe.
            </Tweet>
          </CarouselSlide>
          {/* <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1297495901808852992/Rufoc9gi_x96.jpg"
              url="https://twitter.com/callmemarsa/status/1304404818736410624"
              author="Marsa"
              username="callmemarsa"
            >
              Trying out the{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @stitchesjs
              </Text>{' '}
              styling library, so far really nice experience :)
            </Tweet>
          </CarouselSlide> */}
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1350150376717250563/xzc0B5Bh_x96.jpg"
              url="https://twitter.com/areaweb/status/1301216968456929281"
              author="Cristiano Rastelli"
              username="areaweb"
            >
              Eu devo dizer, que estou de fato impressionado de quão engenhosa e bem pensada é a API da {' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @stitchesjs
              </Text>{' '}
              .
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1257516627966525440/NvXU6VoT_x96.jpg"
              url="https://twitter.com/ditorojuanf/status/1300829785782980609"
              author="Juan Di Toro"
              username="ditorojuanf"
            >
              Isto é 🔥 da documentação que já pudeste ver de quão útil isto é para desenhar bibliotecas de componente com grandes definições de desenho de sistema.
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1254281203127066624/gNTCC-q2_x96.jpg"
              url="https://twitter.com/rswebdesigner/status/1367167906879049730"
              author="றதீஸ் / raðiːs / rathes"
              username="rswebdesigner"
            >
              Uma das razões de eu fato amar a{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @stitchesjs
              </Text>
              : Este componente de esboço inteiro custou-me como apenas 5 minutos? Incluindo todas as variantes. Em outras soluções de CSS-em-JS, isto levaria séculos 😅
            </Tweet>
          </CarouselSlide>
          <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1351102266628067333/LWHanyS2_x96.jpg"
              url="https://twitter.com/vedovelli74/status/1366752905064251393"
              author="Fabio Vedovelli"
              username="vedovelli74"
            >
              Eu tenho faro para identificar tecnologias que se popularizaram: gravei sobre Laravel
              em 2011, sobre Vue em 2015 e Tailwind em 2020.
              <br />
              <br />
              Algo me diz que{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @stitchesjs
              </Text>
              : estará no mesmo nível de popularidade em breve!
            </Tweet>
          </CarouselSlide>
          {/* <CarouselSlide>
            <Tweet
              avatar="https://pbs.twimg.com/profile_images/1347379204313260032/JnYGQofT_x96.jpg"
              url="https://twitter.com/raunofreiberg/status/1300772369146040321"
              author="Rauno Freiberg"
              username="raunofreiberg"
            >
              I think Stitches from{' '}
              <Text variant="blue" css={{ display: 'inline' }}>
                @modulz
              </Text>{' '}
              is one of the first CSS-in-JS solutions that really clicks for me. Super thrilled to
              try this out!
            </Tweet>
          </CarouselSlide> */}
        </Flex>
      </CarouselSlideList>

      <Box
        css={{
          position: 'absolute',
          top: '50%',
          left: '15px',
          transform: 'translateY(-50%)',
        }}
      >
        <CarouselPrevious
          as={Button}
          css={{
            width: '$7',
            height: '$7',
            borderRadius: '$round',
            backgroundColor: '$loContrast',
            boxShadow:
              '$colors$shadowLight 0px 5px 25px -5px, $colors$shadowDark 0px 5px 15px -10px',
            willChange: 'transform',
            transition: 'all 100ms ease',
            '&:hover': {
              boxShadow:
                '$colors$shadowLight 0px 10px 35px -5px, $colors$shadowDark 0px 10px 20px -5px',
              transform: 'translateY(-2px)',
            },
            '&:focus': {
              boxShadow:
                '0 0 0 1px $colors$slate700, inset 0 0 0 1px $colors$slate700, $colors$shadowLight 0px 5px 25px -5px, $colors$shadowDark 0px 5px 15px -10px',
            },
            '&:active': {
              transform: 'none',
              transition: 'none',
            },
            '&:disabled': {
              opacity: 0,
            },
            '@media (hover: none) and (pointer: coarse)': {
              display: 'none',
            },
          }}
        >
          <ArrowLeftIcon />
        </CarouselPrevious>
      </Box>
      <Box
        css={{
          position: 'absolute',
          top: '50%',
          right: '15px',
          transform: 'translateY(-50%)',
        }}
      >
        <CarouselNext
          as={Button}
          css={{
            width: '$7',
            height: '$7',
            borderRadius: '$round',
            backgroundColor: '$loContrast',
            boxShadow:
              '$colors$shadowLight 0px 5px 25px -5px, $colors$shadowDark 0px 5px 15px -10px',
            willChange: 'transform',
            transition: 'all 100ms ease',
            '&:hover': {
              boxShadow:
                '$colors$shadowLight 0px 10px 35px -5px, $colors$shadowDark 0px 10px 20px -5px',
              transform: 'translateY(-2px)',
            },
            '&:focus': {
              boxShadow:
                '0 0 0 1px $colors$slate700, inset 0 0 0 1px $colors$slate700, $colors$shadowLight 0px 5px 25px -5px, $colors$shadowDark 0px 5px 15px -10px',
            },
            '&:active': {
              transform: 'none',
              transition: 'none',
            },
            '&:disabled': {
              opacity: 0,
            },
            '@media (hover: none) and (pointer: coarse)': {
              display: 'none',
            },
          }}
        >
          <ArrowRightIcon />
        </CarouselNext>
      </Box>
    </Carousel>
  );
}

const [CarouselProvider, useCarouselContext] = createContext<{
  _: any;
  slideListRef: React.RefObject<HTMLElement>;
  onNextClick(): void;
  onPrevClick(): void;
}>('Carousel');

const Carousel = (props) => {
  const ref = React.useRef<React.ElementRef<typeof Box>>(null);
  const { children, ...carouselProps } = props;
  const slideListRef = React.useRef<HTMLElement>(null);
  const [_, force] = React.useState({});

  const getSlideInDirection = useCallbackRef((direction) => {
    const slides = ref.current.querySelectorAll('[data-slide-intersected]');
    return Array.from(slides.values()).find((slide: HTMLElement, index) => {
      const slideBefore = slides.item(index - direction) as HTMLElement;
      return (
        slide.dataset.slideIntersected === 'false' &&
        slideBefore?.dataset.slideIntersected === 'true'
      );
    });
  });

  const handleNextClick = React.useCallback(() => {
    const nextSlide = getSlideInDirection(1);
    if (nextSlide) {
      nextSlide.scrollIntoView({ inline: 'start', block: 'nearest', behavior: 'smooth' });
    }
  }, [getSlideInDirection]);

  const handlePrevClick = React.useCallback(() => {
    const prevSlide = getSlideInDirection(-1);
    if (prevSlide) {
      prevSlide.scrollIntoView({ inline: 'end', block: 'nearest', behavior: 'smooth' });
    }
  }, [getSlideInDirection]);

  React.useEffect(() => {
    const slidesList = slideListRef.current;
    const handleScrollStartAndEnd = debounce(() => force({}), 100, {
      leading: true,
      trailing: true,
    });
    slidesList.addEventListener('scroll', handleScrollStartAndEnd);
    force({});
    return () => slidesList.removeEventListener('scroll', handleScrollStartAndEnd);
  }, [slideListRef]);

  return (
    <CarouselProvider
      _={_}
      slideListRef={slideListRef}
      onNextClick={handleNextClick}
      onPrevClick={handlePrevClick}
    >
      <Box {...carouselProps} ref={ref}>
        {children}
      </Box>
    </CarouselProvider>
  );
};

const CarouselSlideList = (props) => {
  const context = useCarouselContext('CarouselSlideList');
  const ref = React.useRef<React.ElementRef<typeof Box>>(null);
  const composedRefs = useComposedRefs(ref, context.slideListRef);
  const [dragStart, setDragStart] = React.useState(null);

  const handleMouseMove = useCallbackRef((event) => {
    if (ref.current) {
      const distanceX = event.clientX - dragStart.pointerX;
      ref.current.scrollLeft = dragStart.scrollX - distanceX;
    }
  });

  const handleMouseUp = useCallbackRef(() => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    setDragStart(null);
  });

  return (
    <Box
      {...props}
      ref={composedRefs}
      data-state={dragStart ? 'dragging' : undefined}
      onMouseDownCapture={composeEventHandlers(props.onMouseDownCapture, (event: MouseEvent) => {
        // Drag only if main mouse button was clicked
        if (event.button === 0) {
          document.addEventListener('mousemove', handleMouseMove);
          document.addEventListener('mouseup', handleMouseUp);
          setDragStart({
            scrollX: (event.currentTarget as HTMLElement).scrollLeft,
            pointerX: event.clientX,
          });
        }
      })}
      onPointerDown={composeEventHandlers(props.onPointerDown, (event: PointerEvent) => {
        const element = event.target as HTMLElement;
        element.setPointerCapture(event.pointerId);
      })}
      onPointerUp={composeEventHandlers(props.onPointerUp, (event: PointerEvent) => {
        const element = event.target as HTMLElement;
        element.releasePointerCapture(event.pointerId);
      })}
    />
  );
};

const CarouselSlide = (props) => {
  const { as: Comp = Box, ...slideProps } = props;
  const context = useCarouselContext('CarouselSlide');
  const ref = React.useRef<React.ElementRef<typeof Box>>(null);
  const [isIntersected, setIsIntersected] = React.useState(false);
  const isDraggingRef = React.useRef(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsIntersected(entry.isIntersecting), {
      root: context.slideListRef.current,
      threshold: 1.0,
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [context.slideListRef]);

  return (
    <Comp
      {...slideProps}
      ref={ref}
      data-slide-intersected={isIntersected}
      onDragStart={(event) => {
        event.preventDefault();
        isDraggingRef.current = true;
      }}
      onClick={(event) => {
        if (isDraggingRef.current) {
          event.preventDefault();
        }
      }}
    />
  );
};

const CarouselNext = (props) => {
  const { as: Comp = 'button', ...nextProps } = props;
  const context = useCarouselContext('CarouselNext');
  const slideList = (context.slideListRef.current || {}) as HTMLElement;
  const { scrollWidth, scrollLeft, clientWidth } = slideList;
  const remainder = scrollWidth - scrollLeft - clientWidth;
  const disabled = remainder <= 0;
  return (
    <Comp {...nextProps} tabIndex={-1} onClick={() => context.onNextClick()} disabled={disabled} />
  );
};

const CarouselPrevious = (props) => {
  const { as: Comp = 'button', ...prevProps } = props;
  const context = useCarouselContext('CarouselPrevious');
  const slideList = (context.slideListRef.current || {}) as HTMLElement;
  const disabled = slideList?.scrollLeft <= 0;
  return (
    <Comp {...prevProps} tabIndex={-1} onClick={() => context.onPrevClick()} disabled={disabled} />
  );
};

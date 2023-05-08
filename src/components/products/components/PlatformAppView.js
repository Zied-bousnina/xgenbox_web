import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react';

// import { MdLocalShipping } from 'react-icons/md';

export default function PlatformAppView() {
  return (
    <Container maxW={'7xl'}
    style={{
      marginBottom:50
    }}
     >
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
       
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              La plateforme de gestion de flotte pour les collecteurs de déchets
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              350.00 TND
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                La solution de gestion de flotte ultime pour toute taille de flotte. Capable de tirer parti des données et des analyses puissantes de votre opération actuelle de gestion des déchets et de transformer vos itinéraires programmés manuellement en itinéraires entièrement optimisés à l’aide d’algorithmes d’apprentissage automatique.

Cela signifie que vos opérations ne seront pas seulement optimisées instantanément, elles continueront à devenir plus efficaces au fil du temps !
              </Text>
              {/* <Text fontSize={'lg'}>
              It can also be equipped with various optional features such as sprayers and multiple sensors.
              </Text> */}
            </VStack>
            
           
          </Stack>

         

          
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
              'https://xgenbox.com/wp-content/uploads/2023/04/65699-copie.png'
            }
            fit={'cover'}
            align={'center'}
            w={'80%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
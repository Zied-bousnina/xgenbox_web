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

export default function SecondComponent() {
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
                color={useColorModeValue('gray.900', 'gray.400')}
                // fontSize={'xl'}
                fontWeight={'100'}>
               XGENBOX positions itself as an innovative company in the field of green technology, offering environmentally friendly waste management solutions for the smart and sustainable cities of the future. Its current range of products includes an integrated IoT-based solution, which significantly improves waste collection efficiency while promoting a greener environment and cleaner communities.
              </Text>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                // fontSize={''}
                fontWeight={'100'}>
              The company aims to help cities and waste collection organizations reduce their operational costs by eliminating unnecessary collections, providing dynamic collection routes and schedules for full optimization of collection operations. By reducing the costs and labor associated with these services, XGENBOX ensures transparency and increases operational efficiency in the waste collection chain.
              </Text>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                // fontSize={''}
                fontWeight={'100'}>
             Furthermore, XGENBOX’s eco-friendly waste management solutions improve public cleanliness by reducing the impact of overflowing trash bins.
              </Text>
              {/* <Text fontSize={'lg'}>
              It can also be equipped with various optional features such as sprayers and multiple sensors.
              </Text> */}
            </VStack>
            
           
          </Stack>

         

          
        </Stack>
        <Flex
          
        >
        <div className="d-flex justify-content-center align-items-center  img-fluid  circle rounded rounded-circle" style={{backgroundColor: "white", width: "500px", height: "500px"}}>
          <img
            alt="..."
            className="rounded-circle img-fluid  "
            src="https://xgenbox.com/wp-content/uploads/2023/04/Free-Office-Wall-Logo-Mockup-PSD-Template-copie-e1680465078878.png"
            // width={800}
            
            style={{zIndex: "1"}}
            onMouseOver={e => e.currentTarget.parentNode.style.backgroundColor = "#3C976E"}
      onMouseOut={e => e.currentTarget.parentNode.style.backgroundColor = "white"}
          />
        </div>
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from '@chakra-ui/react';
import {} from '@chakra-ui/react';
import { Col, Row } from 'reactstrap';



const Feature = ({ heading, text }) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};

export default function Carateristique() {
  return (
<Container 
maxW={'8xl'}
px={{ base: '6', md: '8' }}
py={{ base: '16', sm: '20' }}


>
<TableContainer>
  <Table variant='simple'>
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
    <Thead>
      <Tr
      style={{
        backgroundColor: '#172B4D',
        // color: 'white',
      }}
      >
        <Th
          style={{
            backgroundColor: '#172B4D',
            color: 'white',
          }}
        >SIZE OPTIONS</Th>
        <Th style={{
           
            color: 'white',
          }}>POWER OPTIONS</Th>
        <Th 
        style={{
        
          color: 'white',
        }}
        >CONNECTIVITY AND SENSORS</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Th>140 Liters
          <p>750 x 900 x 1400 mm</p>
          
        </Th>
        <Th>Solar
          <p>Solar panel and built-in battery for ouTdoor use</p>
          
        </Th>
        <Th >Connectivity

          <p>Connectivity to the cloud network by 4G, wifi, Bluetooth</p>
        </Th>
      </Tr>
      <Tr>
        <Td>240 Liters
          <p>900 x 1000 x 1500 mm</p>
          
        </Td>
        <Td>Electric
          <p>Mains powered indoor</p>
          
        </Td>
        <Td >Disinfection
          <p>Automatic spraying, UV sterilization</p>
          
        </Td>
      </Tr>
      <Tr>
        <Td>360 Liters
          <p>1050 x 1050 x 1500 mm</p>
          
        </Td>
        <Td>Hybrid
          <p>
          Solar panel, battery and mains power
          </p>
          
        </Td>
        <Td >Sensors
          <p>
          Position, Level, Smoke, Humidity, Shock
          </p>
          
        </Td>
      </Tr>
    </Tbody>
    
  </Table>
</TableContainer>
  

    
  </Container>
    // <Box as={Container} maxW="7xl" mt={14} p={4}>
    //   <Grid
    //     templateColumns={{
    //       base: 'repeat(1, 1fr)',
    //       sm: 'repeat(2, 1fr)',
    //       md: 'repeat(2, 1fr)',
    //     }}
    //     gap={4}>
    //     <GridItem colSpan={1}>
    //       <VStack alignItems="flex-start" spacing="20px">
    //         <chakra.h2 fontSize="3xl" fontWeight="700">
    //           Medium length title
    //         </chakra.h2>
    //         <Button colorScheme="green" size="md">
    //           Call To Action
    //         </Button>
    //       </VStack>
    //     </GridItem>
    //     <GridItem>
    //       <Flex>
    //         <chakra.p>
    //           Provide your customers a story they would enjoy keeping in mind
    //           the objectives of your website. Pay special attention to the tone
    //           of voice.
    //         </chakra.p>
    //       </Flex>
    //     </GridItem>
    //   </Grid>
    //   <Divider mt={12} mb={12} />
    //   <Grid
    //     templateColumns={{
    //       base: 'repeat(1, 1fr)',
    //       sm: 'repeat(2, 1fr)',
    //       md: 'repeat(4, 1fr)',
    //     }}
    //     gap={{ base: '8', sm: '12', md: '16' }}>
    //     <Feature
    //       heading={'First Feature'}
    //       text={'Short text describing one of you features/service'}
    //     />
    //     <Feature
    //       heading={'Second Feature'}
    //       text={'Short text describing one of you features/service'}
    //     />
    //     <Feature
    //       heading={'Third Feature'}
    //       text={'Short text describing one of you features/service'}
    //     />
    //     <Feature
    //       heading={'Fourth Feature'}
    //       text={'Short text describing one of you features/service'}
    //     />
        
    //   </Grid>
    // </Box>
  );
}
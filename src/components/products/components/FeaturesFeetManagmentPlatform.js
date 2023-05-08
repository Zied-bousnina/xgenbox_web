import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartArea, faCogs, faLock, faMapLocation, faMapLocationDot, faMapMarker, faSignal, faSun, faTruckMoving } from '@fortawesome/free-solid-svg-icons';
// import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';


const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600} color={"white"} >{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function FeaturesFeetManagmentPlatform() {
  return (
    <Box p={4}  alignContent={"center"} justifyContent={"center"}  marginTop={20}
     >
  <SimpleGrid columns={{ base: 2, md: 4 }}   spacing={10} justifyItems={"center"} alignItems={"center"}>
    <Feature  icon={<FontAwesomeIcon icon={faCogs} style={{color: '#3C976E', width:40, height:40}} />} title={'Intégration de matériel et d’actifs'} />
    <Feature icon={<FontAwesomeIcon icon={faMapLocation} style={{color: '#3C976E', width:40, height:40}} />} title={'Optimisation automatisée des itinéraires'} />
    <Feature icon={<FontAwesomeIcon icon={faTruckMoving} style={{color: '#3C976E', width:40, height:40}} />} title={'Fonctions de gestion de flotte avancées'} />
    <Feature icon={<FontAwesomeIcon icon={faChartArea} style={{color: '#3C976E', width:40, height:40}} />} title={'Rapports de consultation et d’analyse'} />
  </SimpleGrid>
</Box>

  );
}
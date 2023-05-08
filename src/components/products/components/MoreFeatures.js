import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faLock, faMapLocationDot, faMapMarker, faPrint, faSignal, faSmoking, faSun, faTools, faWifi } from '@fortawesome/free-solid-svg-icons';
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

export default function MoreFeatures() {
  return (
    <Box p={4}  alignContent={"center"} justifyContent={"center"}  marginTop={20}
     >
  <SimpleGrid columns={{ base: 2, md: 5 }}   spacing={10} justifyItems={"center"} alignItems={"center"}>
    <Feature  icon={<FontAwesomeIcon icon={faPrint} style={{color: '#3C976E', width:40, height:40}} />} title={'Graphic wraps'} />
    <Feature icon={<FontAwesomeIcon icon={faImage} style={{color: '#3C976E', width:40, height:40}} />} title={'Advertisement signage'} />
    <Feature icon={<FontAwesomeIcon icon={faWifi} style={{color: '#3C976E', width:40, height:40}} />} title={'WI-FI router'} />
    <Feature icon={<FontAwesomeIcon icon={faTools} style={{color: '#3C976E', width:40, height:40}} />} title={'mounting bracket'} />
    <Feature icon={<FontAwesomeIcon icon={faSmoking} style={{color: '#3C976E', width:40, height:40}} />} title={'Ashtray'} />
  </SimpleGrid>
</Box>

  );
}
import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faMapLocationDot, faMapMarker, faSignal, faSun } from '@fortawesome/free-solid-svg-icons';
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

export default function Features() {
  return (
    <Box p={4}  alignContent={"center"} justifyContent={"center"}  marginTop={20}
     >
  <SimpleGrid columns={{ base: 2, md: 4 }}   spacing={10} justifyItems={"center"} alignItems={"center"}>
    <Feature  icon={<FontAwesomeIcon icon={faSun} style={{color: '#3C976E', width:40, height:40}} />} title={'Powered by solar energy'} />
    <Feature icon={<FontAwesomeIcon icon={faSignal} style={{color: '#3C976E', width:40, height:40}} />} title={'Wireless data transmission'} />
    <Feature icon={<FontAwesomeIcon icon={faLock} style={{color: '#3C976E', width:40, height:40}} />} title={'Safety sensors'} />
    <Feature icon={<FontAwesomeIcon icon={faMapLocationDot} style={{color: '#3C976E', width:40, height:40}} />} title={'GPS location tracking'} />
  </SimpleGrid>
</Box>

  );
}
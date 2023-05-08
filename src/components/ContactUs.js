import React from 'react';
import { Stack, Text, Button } from '@chakra-ui/react';
// import { FcLock } from 'react-icons/fc';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContactUs() {
  return (
    <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontSize={40} fontWeight="semibold">Stop wasting money on inefficient waste collection</Text>
        {/* <FontAwesomeIcon icon={faLock} /> */}
      </Stack>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between">
        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
        Contact us today to find out how our solution will reduce your waste collection costs
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Button variant="outline" colorScheme="green">
            <FontAwesomeIcon icon={faEnvelope} style={{marginRight:20}} />
            Contact US
          </Button>
          {/* <Button colorScheme="green">OK</Button> */}
        </Stack>
      </Stack>
    </Stack>
  );
}
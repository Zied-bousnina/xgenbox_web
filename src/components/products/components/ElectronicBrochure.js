import React from 'react';
import { Stack, Text, Button } from '@chakra-ui/react';


export default function ElectronicBrochure() {
  return (
    <Stack p="4"  m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        {/* <Text fontWeight="semibold">Your Privacy</Text> */}
        {/* <FcLock /> */}
      </Stack>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between">
        <Text fontSize={40} fonts fontWeight="semibold" textAlign={'left'} maxW={'4xl'}>
        Electronic Brochure
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Button variant="outline" colorScheme="green">
            DOWNLOAD (PDF)
          </Button>
          {/* <Button colorScheme="green">OK</Button> */}
        </Stack>
      </Stack>
    </Stack>
  );
}
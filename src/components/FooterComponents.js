import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Button,
  VStack,
} from '@chakra-ui/react';
import { faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { color } from 'framer-motion';
import { ReactNode } from 'react';
import { Col, Row } from 'reactstrap';
import ContactUs from './ContactUs';
import Chat from './Chat';
// import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
// import { BiMailSend } from 'react-icons/bi';

const Logo = (props) => {
  return (
    <img
                          alt="..."
                          src={"https://xgenbox.com/wp-content/uploads/2023/03/logo-copie.png"}
                        />
  );
};

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function FooterComponent() {
  return (
    <>
     <ContactUs/>
     <Chat/>
    <Box
      // bg={useColorModeValue('gray.50', 'gray.900')}
      bg={"#172B4D"}
      // color={useColorModeValue('gray.700', 'gray.200')}>
      color={"white"}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>
              © {new Date().getFullYear()} <span style={{color:"#48BB78", fontWeight:"bold" }}  >XGENBOX</span> All rights reserved
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'/admin'}>
              <FontAwesomeIcon icon={faTwitter} />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
              <FontAwesomeIcon icon={faYoutube} />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
              <FontAwesomeIcon icon={faInstagram} />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>TUNISIE OFFICE</ListHeader>
            <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<FontAwesomeIcon icon={faLocationDot} />}>
                        Z4, Saint Gobain, Jbel Jloud
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<FontAwesomeIcon icon={faPhone} />}>
                        +216 20 200 698
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<FontAwesomeIcon icon={faEnvelope} />}>
                        direction@xgenbox.com
                      </Button>
                    </VStack>
                  </Box>
             
              
              <Row>
            </Row>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Legal</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Satus</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
                />
              <IconButton
                bg={useColorModeValue('green.400', 'green.800')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'green.600',
                }}
                aria-label="Subscribe"
                icon={<FontAwesomeIcon icon={faPaperPlane} />}
                />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
                </>
  );
}
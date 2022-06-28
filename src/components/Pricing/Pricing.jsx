import { Flex, chakra, Icon, Box, VStack, HStack } from '@chakra-ui/react';
import { GrFormCheckmark } from 'react-icons/gr';

export const Pricing = () => {
   const Feature = props => {
      return (
         <Flex alignSelf="start" w="full">
            <Icon
               boxSize={5}
               mt={1}
               mr={2}
               _light={{
                  color: 'green.500',
               }}
               viewBox="0 0 20 20"
               fill="currentColor"
               as={GrFormCheckmark}
            />
            <chakra.p
               fontSize="lg"
               color="gray.600"
               _dark={{
                  color: 'gray.400',
               }}
               {...props}
            />
         </Flex>
      );
   };

   return (
      <Flex
         bg="gray.800"
         _dark={{
            bg: 'blue.500',
         }}
         p={10}
         w="full"
         justifyContent="center"
         alignItems="center"
      >
         <Box w="full" pt={8}>
            <Flex
               direction={{
                  base: 'column',
                  md: 'row',
               }}
               justifyContent="center"
               mb={{
                  base: 6,
                  sm: 0,
               }}
            >
               <Flex
                  flex={{
                     sm: 1,
                     lg: 'initial',
                  }}
                  w={{
                     lg: 2.3 / 7,
                  }}
                  rounded="lg"
                  borderTopRightRadius={0}
                  borderBottomLeftRadius="lg"
                  bg="white"
                  _dark={{
                     bg: 'blue.400',
                  }}
                  my={6}
                  direction="column"
               >
                  <VStack
                     spacing={1}
                     justifyContent="center"
                     p={8}
                     textAlign="center"
                     w="full"
                     shadow="xl"
                  >
                     <chakra.span fontSize="3xl" fontWeight="bold">
                        Hobby
                     </chakra.span>
                     <HStack spacing={3}>
                        <chakra.span
                           fontWeight="bold"
                           fontSize="6xl"
                           textShadow="2px 0 currentcolor"
                        >
                           $79
                        </chakra.span>
                        <chakra.span
                           alignSelf="center"
                           fontSize="3xl"
                           _light={{
                              color: 'gray.400',
                           }}
                        >
                           /month
                        </chakra.span>
                     </HStack>
                  </VStack>
                  <VStack
                     fontSize="sm"
                     spacing={8}
                     h="full"
                     bg="gray.100"
                     _dark={{
                        bg: 'gray.800',
                     }}
                     borderBottomLeftRadius="lg"
                     p={12}
                  >
                     <VStack
                        spacing={4}
                        w="full"
                        direction="column"
                        alignItems="start"
                     >
                        <Feature>Suppression Management</Feature>
                        <Feature>Email Tracking and Analytics </Feature>
                        <Feature>99.99% Guaranteed Uptime SLA</Feature>
                     </VStack>
                  </VStack>
               </Flex>
               <Flex
                  flex={{
                     base: 1,
                     lg: 'initial',
                  }}
                  w={{
                     lg: 2.4 / 7,
                  }}
                  rounded="lg"
                  bg="white"
                  _dark={{
                     bg: 'blue.400',
                  }}
                  mt={{
                     base: 4,
                     sm: -4,
                  }}
                  shadow="xl"
                  zIndex={30}
                  direction="column"
               >
                  <VStack
                     spacing={1}
                     justifyContent="center"
                     p={8}
                     textAlign="center"
                     w="full"
                     shadow="xl"
                  >
                     <chakra.span fontSize="3xl" fontWeight="bold">
                        Growth
                     </chakra.span>
                     <HStack spacing={3}>
                        <chakra.span
                           fontWeight="bold"
                           fontSize="6xl"
                           textShadow="2px 0 currentcolor"
                        >
                           $149
                        </chakra.span>
                        <chakra.span
                           alignSelf="center"
                           fontSize="3xl"
                           _light={{
                              color: 'gray.400',
                           }}
                        >
                           /month
                        </chakra.span>
                     </HStack>
                  </VStack>
                  <VStack
                     fontSize="sm"
                     h="full"
                     roundedBottom="lg"
                     spacing={8}
                     bg="gray.100"
                     _dark={{
                        bg: 'gray.900',
                     }}
                     p={12}
                  >
                     <VStack
                        spacing={4}
                        w="full"
                        direction="column"
                        alignItems="start"
                     >
                        <Feature>Suppression Management</Feature>
                        <Feature>Email Tracking and Analytics </Feature>
                        <Feature>99.99% Guaranteed Uptime SLA</Feature>
                        <Feature>1,000 Email Address Validations</Feature>
                        <Feature>Limited 24/7 Ticket Support</Feature>
                     </VStack>
                  </VStack>
               </Flex>
               <Flex
                  flex={{
                     sm: 1,
                     lg: 'initial',
                  }}
                  w={{
                     lg: 2.3 / 7,
                  }}
                  roundedTop="lg"
                  borderBottomRightRadius="lg"
                  borderTopLeftRadius={0}
                  bg="white"
                  _dark={{
                     bg: 'blue.400',
                  }}
                  my={6}
                  direction="column"
               >
                  <VStack
                     spacing={1}
                     justifyContent="center"
                     p={8}
                     textAlign="center"
                     w="full"
                     shadow="xl"
                  >
                     <chakra.span fontSize="3xl" fontWeight="bold">
                        Scale
                     </chakra.span>
                     <HStack spacing={3}>
                        <chakra.span
                           fontWeight="bold"
                           fontSize="6xl"
                           textShadow="2px 0 currentcolor"
                        >
                           $349
                        </chakra.span>
                        <chakra.span
                           alignSelf="center"
                           fontSize="3xl"
                           _light={{
                              color: 'gray.400',
                           }}
                        >
                           /month
                        </chakra.span>
                     </HStack>
                  </VStack>
                  <VStack
                     fontSize="sm"
                     spacing={8}
                     h="full"
                     bg="gray.100"
                     _dark={{
                        bg: 'gray.800',
                     }}
                     borderBottomRightRadius="lg"
                     p={12}
                  >
                     <VStack
                        spacing={4}
                        w="full"
                        direction="column"
                        alignItems="start"
                     >
                        <Feature>Suppression Management</Feature>
                        <Feature>Email Tracking and Analytics </Feature>
                        <Feature>99.99% Guaranteed Uptime SLA</Feature>
                     </VStack>
                  </VStack>
               </Flex>
            </Flex>
         </Box>
      </Flex>
   );
};

import React from "react";
import { HStack,VStack, Center,Container,Image, NativeBaseProvider,Heading,Text } from "native-base";

function Example() {
  return (
    <VStack>
    <HStack space={2}  justifyContent="center">
      <Center h="172" w="185" bg="primary.300" rounded="md" shadow={3} >
      
       <Image  source={require('./pogo.png')} alt="Alternate Text" size="2xl" />
       
     
      </Center>
            <Center h="172" w="185" bg="primary.500" rounded="md" shadow={3} />
    </HStack>
    <HStack space={2} m="2"  justifyContent="center">
      <Center h="172" w="185" bg="primary.300" rounded="md" shadow={3} >
      
       <Image  source={require('./pogo.png')} alt="Alternate Text" size="2xl" />
       
     
      </Center>
            <Center h="172" w="185" bg="primary.500" rounded="lg" shadow={3} />
    </HStack>
    <HStack space={2} m="2"  justifyContent="center">
      <Center h="172" w="185" bg="primary.300" rounded="md" shadow={3} >
      
       <Image  source={require('./pogo.png')} alt="Alternate Text" size="2xl" />
       
     
      </Center>
            <Center h="172" w="185" bg="primary.500" rounded="md" shadow={3} />
    </HStack>
    <HStack space={2} m="2"  justifyContent="center">
      <Center h="172" w="185" bg="primary.300" rounded="md" shadow={3} >
      
       <Image  source={require('./pogo.png')} alt="Alternate Text" size="2xl" />
       
     
      </Center>
            <Center h="172" w="185" bg="primary.500" rounded="md" shadow={3} />
    </HStack>
    </VStack>
    
    );
    
}

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };
    
import React from 'react';
import {
  Box,
  HStack,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

const InfoTable = ({ colorProfile, ...rest }) => {
  return (
    <Box>
      <Box align="center">
        <HStack align="center" justify="center">
          <Table
            variant="striped"
            colorScheme={colorProfile}
            fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
          >
            <TableCaption>Linda Anne Blanchfield, CSA, NNA</TableCaption>
            <Thead>
              <Tr>
                <Th>Method</Th>
                <Th>Info</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Located in:</Td>
                <Td>Tacoma, WA</Td>
              </Tr>
              <Tr>
                <Td>Willing to Travel:</Td>
                <Td>Yes</Td>
              </Tr>
              <Tr>
                <Td>Notary Service:</Td>
                <Td>24 Hours</Td>
              </Tr>
              <Tr>
                <Td>Business mobile:</Td>
                <Td>253-651-9520</Td>
              </Tr>
              <Tr>
                <Td>Fax:</Td>
                <Td>253-267-1073</Td>
              </Tr>
              <Tr>
                <Td>Email:</Td>
                <Td>lindabnotary@gmail.com</Td>
              </Tr>
              <Tr>
                <Td>Text messages OK?</Td>
                <Td>Yes</Td>
              </Tr>
              <Tr>
                <Td>Can Print Documents?</Td>
                <Td>Yes</Td>
              </Tr>
              <Tr>
                <Td>Additional languages:</Td>
                <Td>German</Td>
              </Tr>
            </Tbody>
          </Table>
        </HStack>
      </Box>
    </Box>
  );
};

export default InfoTable;

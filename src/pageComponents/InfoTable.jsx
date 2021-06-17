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
// import { infoTable } from 'data/tables.json';

const InfoTable = ({ colorScheme, ...rest }) => {
  return (
    <Box>
      <Box align="center">
        <HStack align="center" justify="center">
          <Table
            variant="striped"
            colorScheme={colorScheme}
            fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
          >
            <TableCaption>Linda Anne Blanchfield, CSA, NNA</TableCaption>
            <Thead>
              <Tr>
                <Th>Question</Th>
                <Th>Answer</Th>
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
                <Td>Verified credentials:</Td>
                <Td>ID, Commission, E&O Insurance, Background Check Report</Td>
              </Tr>
              <Tr>
                <Td>Signings Completed:</Td>
                <Td>Over 4000</Td>
              </Tr>
              <Tr>
                <Td>Real estate signings:</Td>
                <Td>Yes</Td>
              </Tr>
              <Tr>
                <Td>Home inspections:</Td>
                <Td>Yes</Td>
              </Tr>
              <Tr>
                <Td>Jail Signings:</Td>
                <Td>No</Td>
              </Tr>
              <Tr>
                <Td>Has Laser Printer:</Td>
                <Td>Yes, at home</Td>
              </Tr>
              <Tr>
                <Td>Is Dual Tray Printer:</Td>
                <Td>Yes</Td>
              </Tr>
              <Tr>
                <Td>Can Print Documents:</Td>
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

import React from 'react';
// node.js library that concatenates classes (strings)

// reactstrap components

// layout for this page
import {
  Table,
  Container,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Heading,
  Flex,
} from '@chakra-ui/react';
import { Progress } from '@chakra-ui/react';


const ProgressDashboard = () => {



  return (
    <>
      {/* Page content */}

      <Container >

        <Flex>

          <Table variant="simple">
            <TableCaption placement="top" fontSize="large"> Course Progress.</TableCaption>
            <Thead>
              <Th>
                No
              </Th>
              <Th>
                Course Name
              </Th>
              <Th>
                Course Instructor
              </Th>
              <Th>
                Progress
              </Th>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  1
                </Td>
                <Td>
                  Python3
                </Td>
                <Td>
                  Ben
                </Td>
                <Td>
                  <Progress hasStripe value={64} />
                </Td>
              </Tr>
              <Tr>
                <Td>
                  2
                </Td>
                <Td>
                  Database
                </Td>
                <Td>
                  Ron
                </Td>
                <Td>
                  <Progress hasStripe value={64} />
                </Td>
              </Tr>


            </Tbody>
          </Table>
        </Flex>


      </Container>
    </>
  );
};


export default ProgressDashboard;

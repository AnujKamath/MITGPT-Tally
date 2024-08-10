import React, { useState, useRef } from "react";
import { Box, Grid, GridItem, Button } from "@chakra-ui/react";
import CodeEditor from "./CodeEditor";

function QuestionOpen({ question, onGoBack }) {
  const [leftWidth, setLeftWidth] = useState(50); // percentage width of the left container
  const isResizing = useRef(false);

  const handleMouseDown = () => {
    isResizing.current = true;
  };

  const handleMouseMove = (e) => {
    if (!isResizing.current) return;
    const newLeftWidth = (e.clientX / window.innerWidth) * 100;
    if (newLeftWidth > 20 && newLeftWidth < 80) {
      setLeftWidth(newLeftWidth);
    }
  };

  const handleMouseUp = () => {
    isResizing.current = false;
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      <Grid templateRows="auto auto 1fr" templateColumns="1fr" gap={4}>
        
        {/* Navbar */}
        <GridItem>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Button mx={2} colorScheme="yellow" onClick={onGoBack}>
              Go Back
            </Button>

            <Box bgColor="black" textAlign="center" fontSize="30px" flex="1">
              {question.name}
            </Box>
            <GridItem>
          <Box textAlign="center" py={2}>
            <Button mx={2} colorScheme="blue">Run</Button>
            <Button mx={2} colorScheme="green">Submit</Button>
          </Box>
        </GridItem>
          </Box>
        </GridItem>

        {/* Run and Submit buttons */}
        {/* <GridItem>
          <Box textAlign="center" py={2}>
            <Button mx={2} colorScheme="blue">Run</Button>
            <Button mx={2} colorScheme="green">Submit</Button>
          </Box>
        </GridItem> */}
        
        {/* Containers */}
        <GridItem>
          <Grid templateColumns={`${leftWidth}% 10px auto`} gap={0} height="100%">
            
            {/* Container 1 (Problem Statement) */}
            <Box bg="gray.700" p={4} borderRadius="md" overflow="auto">
              <p style={{ fontSize: '30px', fontWeight: 'bold', color: 'white' }}>
                {question.name}
              </p>
              <p style={{ fontSize: '18px', marginTop: '10px' }}>
                {question.question}
              </p>
              <Box mt={4} bg="gray.600" p={3} borderRadius="md">
                <p style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Sample Test Cases:</p>
                {question.test_cases.slice(0, 2).map((testCase, index) => (
                  <Box key={index} mb={3}>
                    <p>Input: <code>{testCase.input}</code></p>
                    <p>Expected Output: <code>{testCase.expected.toString()}</code></p>
                  </Box>
                ))}
              </Box>
            </Box>
            
            {/* Draggable Divider */}
            <Box
              bg="gray.500"
              cursor="ew-resize"
              onMouseDown={handleMouseDown}
              width="10px"
              zIndex="10"
            />

            {/* Container 2 (Code Editor) */}
            <Box bg="gray.800" p={4} borderRadius="md" overflow="auto">
              <CodeEditor />
            </Box>
            
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default QuestionOpen;

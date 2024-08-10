import { useState } from "react";
import { Box, Button, Text, useToast } from "@chakra-ui/react";
import { executeCode } from "../api";

const Output = ({ editorRef, language, testCases }) => {
  const toast = useToast();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const runTestCases = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;

    setIsLoading(true);
    const newResults = [];

    try {
      for (let i = 0; i < testCases.length; i++) {
        const testCase = testCases[i];
        const result = await executeCode(language, sourceCode, testCase.input);

        const output = result.run.stdout.trim();
        const expected = testCase.expected.toString().trim();

        newResults.push({
          input: testCase.input,
          output: output,
          expected: expected,
          passed: output === expected,
        });
      }

      setResults(newResults);
    } catch (error) {
      console.log(error);
      toast({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box w="100%">
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Text mb={2} fontSize="lg">
          Output
        </Text>
        <Button
          variant="outline"
          colorScheme="green"
          mb={4}
          isLoading={isLoading}
          onClick={runTestCases}
        >
          Run Test Cases
        </Button>
      </div>
      <Box
        height="25vh"
        p={2}
        border="1px solid"
        borderRadius={4}
        borderColor="#333"
        overflow="auto"
      >
        {results.length > 0 ? (
          results.map((result, i) => (
            <Box key={i} mb={3}>
              <Text>
                <strong>Test Case {i + 1}:</strong>
              </Text>
              <Text>Input: <code>{result.input}</code></Text>
              <Text>Output: <code>{result.output}</code></Text>
              <Text>Expected: <code>{result.expected}</code></Text>
              <Text color={result.passed ? "green.500" : "red.500"}>
                {result.passed ? "Passed" : "Failed"}
              </Text>
            </Box>
          ))
        ) : (
          <Text>Click "Run Test Cases" to see the results here</Text>
        )}
      </Box>
    </Box>
  );
};

export default Output;

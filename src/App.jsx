import React, { useState } from "react";
import { Box, Grid, GridItem, Button, Flex } from "@chakra-ui/react";
import QuestionOpen from "./components/QuestionOpen";
import questionsData from '../public/questions.json'; // Import your JSON file

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const handleQuestionClick = (question) => {
    setCurrentQuestion(question);
  };

  const handleGoBack = () => {
    setCurrentQuestion(null);
  };

  return (
    <>
      <Box bg="gray.800" color="white" p={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Button variant="ghost" size="sm" onClick={handleGoBack}>
            Go Back
          </Button>
          <Box textAlign="center" fontSize="xl" flex="1">
            Navbar
          </Box>
          <Box>
            <div>User</div>
          </Box>
        </Flex>
      </Box>

      <Box p={6}>
        {!currentQuestion ? (
          <Grid templateColumns="repeat(1, 1fr)" gap={4}>
            {questionsData.questions.map((question) => (
              <GridItem key={question.id}>
                <Button
                  width="100%"
                  variant="outline"
                  onClick={() => handleQuestionClick(question)}
                >
                  {question.name} {/* Use the `name` field for the title */}
                </Button>
              </GridItem>
            ))}
          </Grid>
        ) : (
          <QuestionOpen question={currentQuestion} onGoBack={handleGoBack} />
        )}
      </Box>
    </>
  );
}

export default App;
    // {
    //   "id": 3,
    //   "name": "Banana Eating Rate",
    //   "question": "You are given an integer array piles where piles[i] is the number of bananas in the ith pile. You are also given an integer h, which represents the number of hours you have to eat all the bananas. You may decide your bananas-per-hour eating rate of k. Each hour, you may choose a pile of bananas and eat k bananas from that pile. If the pile has less than k bananas, you may finish eating the pile but you cannot eat from another pile in the same hour. Return the minimum integer k such that you can eat all the bananas within h hours.",
    //   "test_cases": [
    //     {
    //       "input": "piles: [3, 6, 7, 11], h: 8" ,
    //       "expected": 4
    //     },
    //     {
    //       "input": "piles: [30, 11, 23, 4, 20],h: 5" ,
    //       "expected": 30
    //     },
    //     {
    //       "input": "piles: [30, 11, 23, 4, 20],h: 6" ,
    //       "expected": 23
    //     }
    //   ]
    // },
    // {
    //   "id": 4,
    //   "name": "Climbing Stairs",
    //   "question": "You are given an integer n representing the number of steps to reach the top of a staircase. You can climb with either 1 or 2 steps at a time. Return the number of distinct ways to climb to the top of the staircase.",
    //   "test_cases": [
    //     {
    //       "input": 2,
    //       "expected": 2
    //     },
    //     {
    //       "input": 3,
    //       "expected": 3
    //     },
    //     {
    //       "input": 5,
    //       "expected": 8
    //     }
    //   ]
    // },
    // {
    //   "id": 5,
    //   "name": "Maximum Subarray Sum",
    //   "question": "Given an array of integers nums, find the subarray with the largest sum and return the sum. A subarray is a contiguous non-empty sequence of elements within an array.",
    //   "test_cases": [
    //     {
    //       "input": [-2, 1, -3, 4, -1, 2, 1, -5, 4],
    //       "expected": 6
    //     },
    //     {
    //       "input": [1],
    //       "expected": 1
    //     },
    //     {
    //       "input": [5, 4, -1, 7, 8],
    //       "expected": 23
    //     }
    //   ]
    // },
    // {
    //   "id": 6,
    //   "name": "Minimum Window Substring",
    //   "question": "Given two strings s and t, return the shortest substring of s such that every character in t, including duplicates, is present in the substring. If such a substring does not exist, return an empty string \"\". You may assume that the correct output is always unique.",
    //   "test_cases": [
    //     {
    //       "input": {
    //         "s": "ADOBECODEBANC",
    //         "t": "ABC"
    //       },
    //       "expected": "BANC"
    //     },
    //     {
    //       "input": {
    //         "s": "a",
    //         "t": "a"
    //       },
    //       "expected": "a"
    //     },
    //     {
    //       "input": {
    //         "s": "a",
    //         "t": "aa"
    //       },
    //       "expected": ""
    //     }
    //   ]
    // },
    // {
    //   "id": 7,
    //   "name": "Two Sum",
    //   "question": "Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j. You may assume that every input has exactly one pair of indices i and j that satisfy the condition. Return the answer with the smaller index first.",
    //   "test_cases": [
    //     {
    //       "input": {
    //         "nums": [2, 7, 11, 15],
    //         "target": 9
    //       },
    //       "expected": [0, 1]
    //     },
    //     {
    //       "input": {
    //         "nums": [3, 2, 4],
    //         "target": 6
    //       },
    //       "expected": [1, 2]
    //     },
    //     {
    //       "input": {
    //         "nums": [3, 3],
    //         "target": 6
    //       },
    //       "expected": [0, 1]
    //     }
    //   ]
    // },
    // {
    //   "id": 8,
    //   "name": "Reverse Linked List",
    //   "question": "Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.",
    //   "test_cases": [
    //     {
    //       "input": [1, 2, 3, 4, 5],
    //       "expected": [5, 4, 3, 2, 1]
    //     },
    //     {
    //       "input": [1, 2],
    //       "expected": [2, 1]
    //     },
    //     {
    //       "input": [1],
    //       "expected": [1]
    //     }
    //   ]
    // },
    // {
    //   "id": 9,
    //   "name": "Number of 1 Bits",
    //   "question": "You are given an unsigned integer n. Return the number of 1 bits in its binary representation. You may assume n is a non-negative integer which fits within 32-bits.",
    //   "test_cases": [
    //     {
    //       "input": 11,
    //       "expected": 3
    //     },
    //     {
    //       "input": 128,
    //       "expected": 1
    //     },
    //     {
    //       "input": 4294967293,
    //       "expected": 31
    //     }
    //   ]
    // },
    // {
    //   "id": 10,
    //   "name": "Plus One",
    //   "question": "You are given an integer array digits, where each digits[i] is the ith digit of a large integer. It is ordered from most significant to least significant digit, and it will not contain any leading zero. Return the digits of the given integer after incrementing it by one.",
    //   "test_cases": [
    //     {
    //       "input": [1, 2, 3],
    //       "expected": [1, 2, 4]
    //     },
    //     {
    //       "input": [4, 3, 2, 1],
    //       "expected": [4, 3, 2, 2]
    //     },
    //     {
    //       "input": [9],
    //       "expected": [1, 0]
    //     }
    //   ]
    // }
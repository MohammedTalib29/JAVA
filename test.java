

import java.util.Scanner;


public class Calculator {
    public static void main(String[] args) {
        // Create a Scanner object to take input from the user
        Scanner scanner = new Scanner(System.in);

        // Prompt the user for the first number
        System.out.print("Enter the first number: ");
        double num1 = scanner.nextDouble();

        // Prompt the user for the second number
        System.out.print("Enter the second number: ");
        double num2 = scanner.nextDouble();

        // Prompt the user for the operator
        System.out.print("Enter an operator (+, -, *, /): ");
        char operator = scanner.next().charAt(0);  // Read a single character for the operator

        // Variable to store the result
        double result = 0;
        boolean validOperator = true;

        // Perform the operation based on the operator using if-else
        if (operator == '+') {
            result = num1 + num2;
        } else if (operator == '-') {
            result = num1 - num2;
        } else if (operator == '*') {
            result = num1 * num2;
        } else if (operator == '/') {
            if (num2 != 0) {
                result = num1 / num2;
            } else {
                System.out.println("Error! Division by zero.");
                validOperator = false;
            }
        } else {
            System.out.println("Invalid operator! Please use +, -, *, or /.");
            validOperator = false;
        }

        // If a valid operator was entered, display the result
        if (validOperator) {
            System.out.println("The result is: " + result);
        }

        // Close the scanner
        scanner.close();
    }
}


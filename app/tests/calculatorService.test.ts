import { PaymentFrequency } from "../types/calculatorTypes";
import { calculateCompoundInterest } from "../util/calculatorService";

describe("calculateCompoundInterest frequency tests", () => {
  test("Calculates compound interest for monthly payments", () => {
    const values = {
      depositAmount: 10000,
      interestRate: 0.25,
      investmentTermInYears: 3,
      investmentTermInMonths: 0,
      paymentFrequency: PaymentFrequency.MONTHLY,
    };
    const result = calculateCompoundInterest(values);
    expect(result.toFixed(0)).toBe("10075");
  });

  test("Calculates compound interest for quarterly payments", () => {
    const values = {
      depositAmount: 1000,
      interestRate: 0.1,
      investmentTermInYears: 5,
      investmentTermInMonths: 0,
      paymentFrequency: PaymentFrequency.QUARTERLY,
    };
    const result = calculateCompoundInterest(values);
    expect(result.toFixed(0)).toBe("1005");
  });

  test("Calculates compound interest for annual payments", () => {
    const values = {
      depositAmount: 255000,
      interestRate: 4.5,
      investmentTermInYears: 4,
      investmentTermInMonths: 5,
      paymentFrequency: PaymentFrequency.ANNUALLY,
    };
    const result = calculateCompoundInterest(values);
    expect(result.toFixed(0)).toBe("309721");
  });

  test("Calculates compound interest with a payment frequency at maturity", () => {
    const values = {
      depositAmount: 1500000,
      interestRate: 3.11,
      investmentTermInYears: 5,
      investmentTermInMonths: 0,
      paymentFrequency: PaymentFrequency.AT_MATURITY,
    };
    const result = calculateCompoundInterest(values);
    expect(result.toFixed(0)).toBe("1748216");
  });

  describe("calculateCompoundInterest edge case tests", () => {
    test("Returns the principal amount for zero interest rate", () => {
      const values = {
        depositAmount: 10000,
        interestRate: 0,
        investmentTermInYears: 5,
        investmentTermInMonths: 0,
        paymentFrequency: PaymentFrequency.MONTHLY,
      };
      const result = calculateCompoundInterest(values);
      expect(result).toBe(10000);
    });

    test("Throws an error for negative deposit amount", () => {
      const values = {
        depositAmount: -1000,
        interestRate: 5,
        investmentTermInYears: 1,
        investmentTermInMonths: 0,
        paymentFrequency: PaymentFrequency.MONTHLY,
      };
      expect(() => calculateCompoundInterest(values)).toThrow(
        "Deposit amount must be greater than zero."
      );
    });

    test("Throws an error for negative interest rate", () => {
      const values = {
        depositAmount: 1000,
        interestRate: -5,
        investmentTermInYears: 1,
        investmentTermInMonths: 0,
        paymentFrequency: PaymentFrequency.MONTHLY,
      };
      expect(() => calculateCompoundInterest(values)).toThrow(
        "Interest rate cannot be negative."
      );
    });

    test("Throws an error for negative investment term", () => {
      const values = {
        depositAmount: 1000,
        interestRate: 5,
        investmentTermInYears: -1,
        investmentTermInMonths: 0,
        paymentFrequency: PaymentFrequency.MONTHLY,
      };
      expect(() => calculateCompoundInterest(values)).toThrow(
        "Investment term cannot be negative."
      );
    });

    test("Throws an error for invalid payment frequency", () => {
      const values = {
        depositAmount: 10000,
        interestRate: 5,
        investmentTermInYears: 3,
        investmentTermInMonths: 0,
        paymentFrequency: "INVALID" as any, // Force invalid payment frequency
      };
      expect(() => calculateCompoundInterest(values)).toThrow(
        "Invalid payment frequency"
      );
    });
  });
});

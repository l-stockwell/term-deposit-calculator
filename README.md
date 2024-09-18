## Introduction

This simple term deposit calculator is a web application developed using Next.js, React and Mantine.

![image](https://github.com/user-attachments/assets/295d7c00-c247-4c52-b0c4-7d255265a4f7)

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Installation


1. Clone the project:

   ```shell
   git clone https://github.com/l-stockwell/term-deposit-calculator.git
   ```
   
1. Install the dependencies:

   ```shell
   yarn install
   ```
2. Start the application:


   ```shell
   yarn start
   ```

   This command will start the development server, and the app will open in your default web browser.

### Testing

1. Run the unit test suite:


   ```shell
   yarn test
   ```
   
## Features

- Simple user-friendly interface
- Clear buttons for easy input correction
- Real-time calculation display
- Adapts to different screen sizes 

## Design decisions

- The Mantine library was used to quickly mock up the frontend, with the added benefit of handling much of the user input validation. It also eliminated the need for custom CSS or hardcoding mobile responsiveness
- The app structure is intentionally loosely based on what a larger web application could look like, with files seperated into folders ie. util/types/components. Probably overkill for a small app like this, but it's always nice to consider extensibility

## Trade-offs / assumptions

- It wouldn've been great to offer the user more assistance on what each term means and offer more detailed analytics, but this wasn't implemented due to time restraints
- It also assumes that each period is of even length, ie. months is an annual figure divided by 12. However, since interest is calulated daily, this might not be completely accurate
- The result is rounded to the nearest whole number for simplicity

## Possible improvements

- Combine years/months into a single input
- Extra deposit input for every week/fortnight/month/year
- Calculate and display interest earned in total and per pay period i.e. monthly
- More intuitive front-end, i.e. informative tooltips describing each step
- Implement charts/tables showing deposit growth over time
- Save previous calculations

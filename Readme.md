
# Crypto Trades API

This project is a Node.js and MongoDB-based API that accepts a CSV file containing cryptocurrency trade data, parses it, and stores the trade information in a MongoDB database.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)

## Project Overview

The API allows users to upload a CSV file with trade data, including information such as:
- Date and time of the trade (`UTC_Time`)
- The operation type (`BUY` or `SELL`)
- The market in which the trade occurred (`base coin` and `quote coin`)
- The amount of cryptocurrency bought or sold
- The price at which the trade occurred

The data is parsed from the CSV file and stored in a MongoDB database for future retrieval or processing.

## Features

- Upload CSV files containing cryptocurrency trades.
- Parse and validate CSV data.
- Store parsed trade data in MongoDB.
- Simple, extendable code structure.

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB, Mongoose
- **File Upload**: Multer
- **CSV Parsing**: csv-parser

## Installation

Follow these steps to set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v14+)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally or hosted)

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Vakar18/Crypto-trade
   cd crypto-trades-api

2. **Install dependencies:**

   ```bash
   npm install

3. **Set up MongoDB:**

- Ensure MongoDB is running locally or configure a remote MongoDB instance.
- Create a .env file in the root directory and add your MongoDB connection string

4. **Run the server:**

  ```bash
  npm run dev

#

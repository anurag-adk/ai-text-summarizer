# AI Text Summarizer

## 🎉 Welcome to the AI Text Summarizer App 🎉

An application that leverages Natural Language Processing (NLP) to generate concise summaries from long texts. Built using Node.js and the Hugging Face Inference API, it employs the "bart-large-cnn" model for efficient text summarization. This project is part of the Postman Student Program.

## Features

- Generate concise summaries of long articles or text inputs
- Utilizes the Hugging Face Inference API to access pre-trained AI models
- Supports easy integration for further customization and improvements

## Prerequisites

- A Hugging Face Access Token, which you can get for free by signing up at [Hugging Face](https://huggingface.co/). The token will be used to access the summarization model

## Installation

1. **Clone the git repository**

   ```bash
   git clone https://github.com/anurag-adk/ai-text-summarizer.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd ai-text-summarizer
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Set up the `.env` file as follows**

   ```bash
    PORT=your-port-number
    ACCESS_TOKEN=your-hugging-face-access-token
   ```

5. **Start the server**
   ```bash
    npm start
   ```

### Using Hugging Face

The app uses Hugging Face's Inference API to access Facebook's "bart-large-cnn" model for text summarization. Hugging Face is a community-driven platform that hosts numerous open-source models and datasets. It is like the "GitHub of AI." With a free access token, you can experiment with a variety of models for different tasks, including text classification and image generation.

### Contact

For queries or feedback, feel free to reach out to me at [iamanuragadhikari@gmail.com](mailto:iamanuragadhikari@gmail.com)

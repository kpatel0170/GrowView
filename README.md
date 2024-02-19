# GrowView - Blog Website

A full-stack blog website built with React, Redux Toolkit, Appwrite, Tailwind CSS, and TinyMCE React.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Overview

GrowView is a feature-rich blog website developed using cutting-edge technologies. It enables users to create, edit, and manage blog posts seamlessly. The integration of React, Redux Toolkit, Appwrite, Tailwind CSS, and TinyMCE React ensures a robust and user-friendly experience.

## Features

- User authentication and authorization
- Create, edit, and delete blog posts
- Rich text editing using TinyMCE
- Responsive design with Tailwind CSS
- Seamless integration with Appwrite backend

## Prerequisites

Before you begin, ensure you have the following configured:

- [Node.js and npm](https://nodejs.org/)
- [Appwrite Cloud](https://appwrite.io/)

**Appwrite Configuration:**

1. Set up a new project on Appwrite.
2. Obtain the following IDs from your Appwrite project:
   - Project ID
   - Database ID
   - Collection ID
   - Bucket ID

**Environment Variables (.env):**

```env
REACT_APP_APPWRITE_URL=https://cloud.appwrite.io/v1
REACT_APP_APPWRITE_PROJECT_ID=
REACT_APP_APPWRITE_DATABASE_ID=
REACT_APP_APPWRITE_COLLECTION_ID=
REACT_APP_APPWRITE_BUCKET_ID=
```

## Installation

1. Clone the repository:
  ```bash
  git clone https://github.com/kpatel0170/GrowView.git
  ```
2. Change to the project directory:
  ```bash
  cd GrowView
  ```
3. Install dependencies:
  ```bash
  npm install
  ```

## Technologies Used
- React
- Redux Toolkit
- Appwrite
- Tailwind CSS
- TinyMCE React

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or create a pull request.

Feel free to customize it further based on your preferences!

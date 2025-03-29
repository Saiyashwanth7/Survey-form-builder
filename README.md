# Survey Form Builder

## Overview
Survey Form Builder is a no-code survey creation and analytics tool that allows users to create, customize, and distribute survey forms effortlessly. The application provides real-time response collection and data visualization through graphs and insights, enabling users to make data-driven decisions.

## Features
- Create and customize surveys using pre-built templates or manual design.
- Distribute surveys easily to gather responses.
- Real-time response collection and analytics.
- Visualize data through graphs and insights.

## Tech Stack
- **Backend**: Python, Django
- **Frontend**: HTML, CSS, JavaScript, React.js

## Project Structure
```
survey-form-builder
├── backend
│   ├── manage.py
│   ├── survey_builder
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── surveys
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── tests.py
│   │   └── views.py
│   └── requirements.txt
├── frontend
│   ├── public
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src
│   │   ├── components
│   │   │   ├── FormBuilder.js
│   │   │   ├── SurveyList.js
│   │   │   └── Analytics.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles
│   │       └── main.css
│   ├── package.json
│   └── webpack.config.js
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/survey-form-builder.git
   ```
2. Navigate to the backend directory and install the required packages:
   ```
   cd survey-form-builder/backend
   pip install -r requirements.txt
   ```
3. Run the Django server:
   ```
   python manage.py runserver
   ```

4. Navigate to the frontend directory and install the required npm packages:
   ```
   cd ../frontend
   npm install
   ```
5. Start the React application:
   ```
   npm start
   ```

## Usage
- Access the application through your web browser at `http://localhost:3000`.
- Use the Form Builder component to create and customize surveys.
- View the Survey List to manage your created surveys.
- Analyze responses using the Analytics component.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/')
def home():
    print("Home")
    return 'Welcome to the homepage'


@app.route('/api/endpoint', methods=['POST'])
def handle_data():
    data = request.get_json()
    print(data)
    return 'Data received'


if __name__ == '__main__':
    app.run()

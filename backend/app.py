from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

tasks = []

# Sample GET request to access tasks
@app.route('/api/tasks', methods=['GET'])   # This function will be used 
                                            # when the user makes a GET request to /api/tasks
def get_tasks():
    """Return a json that stores the tasks list."""
    return jsonify(tasks)

# Write a POST request to add a task
# TODO: add decorator to route correctly
def add_task():
    """Fetch input task and add to tasks list if the task is not empty."""
    # TODO: fill in this function
    pass

# Write a DELETE request to remove a task
# TODO: add decorator to route correctly
def delete_task(index):
    """Delete task at index from tasks list."""
    # TODO: fill in this function
    pass

if __name__ == '__main__':
    app.run(debug=True)

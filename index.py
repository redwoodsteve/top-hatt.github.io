from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/solve', methods=['POST'])
def solve():
    problem = request.form['problem']
    # Now, go wild solving this problem using some magical code.
    # Return the result to the user.
    return render_template('result.html', result=result)

if __name__ == '__main__':
    app.run(debug=True)

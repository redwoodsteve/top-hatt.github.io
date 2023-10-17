from flask import Flask, render_template, request
import openai

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
    api_key = request.form['api_key']
    openai.api_key = api_key
    # Now, you have access to the AI! Do something magical here.
    # Return the AI-generated result to the user.
    return render_template('result.html', result=result)

if __name__ == '__main__':
    app.run(debug=True)

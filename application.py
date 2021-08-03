from flask import Flask, render_template, request
from flask.helpers import url_for

application = app = Flask(__name__, template_folder="templates/", static_url_path='/')
app.config['UPLOAD_FOLDER'] = "uploads"

app.secret_key = 'some_random_key'



@app.route("/", methods=['get'])
def home():
        return render_template("index.html")

if __name__ == '__main__':
    app.run(debug=True)
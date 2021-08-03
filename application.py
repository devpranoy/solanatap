from flask import Flask, render_template, request, flash
from flask.helpers import url_for
import os
import subprocess
application = app = Flask(__name__, template_folder="templates/", static_url_path='/')
app.config['UPLOAD_FOLDER'] = "uploads"

app.secret_key = 'some_random_key'



@app.route("/", methods=['GET','POST'])
def home():
    if request.method == 'POST':
        address = request.form['address']
        if len(address)!=44:
            flash('Please Enter a valid Solana Address','danger')
            return render_template("index.html")
        render_template('loading.html')
        processd = subprocess.run(['solana', 'airdrop', '1'  ,address, '--url', 'https://api.devnet.solana.com'], 
                         stdout=subprocess.PIPE, 
                         universal_newlines=True)
        processt = subprocess.run(['solana', 'airdrop', '1'  ,address, '--url', 'https://api.testnet.solana.com'], 
                         stdout=subprocess.PIPE, 
                         universal_newlines=True)
        
        print(processd, processt)

        flash('SOL has been sent successfully','success')


    return render_template("index.html")

if __name__ == '__main__':
    app.run(threaded=True)
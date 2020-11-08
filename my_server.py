from flask import  Flask, render_template


with open('./config/.env') as f:
    lines = f.read()

for line in lines.splitlines():
    if 'IP' in line:
        IP = line.split('=')[1].strip()
    elif 'PORT' in line:
        PORT = int(line.split('=')[1].strip())

app = Flask(__name__)

@app.route('/')
def home():
    return 'Welcome Home'

if __name__ == "__main__":
    app.run('127.0.0.1',3300,debug=True)    
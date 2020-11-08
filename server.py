from flask import Flask, jsonify, json, request, render_template
import re

with open('./config/.env') as f:
    lines = f.read()

for line in lines.splitlines():
    if 'IP' in line:
        IP = line.split('=')[1].strip()
    elif "PORT" in line:
        PORT = int(line.split('=')[1].strip())

app = Flask(__name__)

@app.route('/home', methods=['GET', 'POST', 'PUT'])
def home():
    
    if request.method == 'POST': #x-www-form-urlencoded
        pattern = r"FirstName=(\w*)&LastName=(\w*)"
        fn, ln = re.findall(pattern, str(request.stream.read()))[0]
        print(f"You sent a POST request, {fn} {ln}")
        return f"You sent a POST request, {fn} {ln}"
    elif request.method == 'PUT': #raw & JSON
        parsed_dict = json.loads(request.stream.read().decode("ascii"))
        fn, ln = parsed_dict["FirstName"], parsed_dict["LastName"]
        print(f"You sent a PUT request, {fn} {ln}")
        print(request)
        return f"You sent a PUT request, {fn} {ln}"

    else:
        first_name = request.args.get("FirstName") #GET ?params
        last_name = request.args.get("LastName")
        print(f"You sent a GET request, {first_name} {last_name}")
        return f"You sent a GET request, {first_name} {last_name}"

@app.route('/json')
def get_json():
    data = json.load(open('./data/message.json'))
    return jsonify(data)

@app.route('/')
def hello(name=None):
    return render_template('index.html')

if __name__ == "__main__":
    app.run(IP,PORT,debug=True)
                            
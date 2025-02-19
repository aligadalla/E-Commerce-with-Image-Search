import sys
import json

def image_search(image_path):
    # AI model logic here
    return {"status": "success", "image": image_path}

if __name__ == "__main__":
    # Read the input from Node.js
    data = sys.stdin.read()
    image_path = json.loads(data).get("image_path")
    
    # Get the result from the function
    result = image_search(image_path)
    
    # Send the output back to Node.js
    print(json.dumps(result))

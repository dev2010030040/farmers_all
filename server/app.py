from flask import Flask, render_template, request, jsonify, request, redirect
from werkzeug.utils import secure_filename
import asyncio
import nest_asyncio
import os
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time
from PIL import Image
import os, io
import base64

from external import cultivated_or_not
from external import stages_of_paddy

app = Flask(__name__)


def scrape(lg, lt):
    nest_asyncio.apply()
    # Specify the path to your WebDriver (e.g., Chrome WebDriver)
    webdriver_path = './msedgedriver.exe'

    # Initialize a headless browser
    options = webdriver.EdgeOptions()
    # options.add_argument('--headless')
    browser = webdriver.Edge()
    browser.maximize_window()

    url = f'https://www.google.com/maps/@{lg},{lt},500/data=!3m1!1e3!5m1!1e8?entry=ttu'
    browser.get(url)
    time.sleep(10)

    # Simulate "Control + P" (printing)
    # Find an element on the page, for example, the <body> element
    body_element = browser.find_element(By.TAG_NAME, 'body')

    # Simulate "Control + P" (printing)
    body_element.send_keys(Keys.CONTROL, 'p')

    # Simulate scrolling down (you can adjust the number of scrolls as needed)
    for _ in range(2):
        body_element.send_keys(Keys.ARROW_DOWN)

    # Capture a screenshot
    ss_dir = os.path.join(os.path.dirname(__file__), 'inputs')
    os.makedirs(ss_dir, exist_ok=True)
    screenshot_path = os.path.join(ss_dir, 'location.png')
    browser.save_screenshot(screenshot_path)
    time.sleep(5)
    # Close the browser
    browser.quit()

    img = Image.open(ss_dir + "/location.png")

    w, h = img.size

    left = 0
    upper = h // 4
    right = h - 10
    lower = h

    cropped_img = img.crop((left, upper, right, lower))

    cropped_img.save(ss_dir + '/location.png')

    return True


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/click_listener', methods=['POST'])
def click_listener():
    data = request.json
    # asyncio.get_event_loop().run_until_complete(scrape(data['lng'], data['lat']))
    scrape(data['lng'], data['lat'])
    print('Received click event:', data)

    test = cultivated_or_not.cultivated_or_not() 
    res = test.predict()
    return jsonify({'message': res+' Click event received'})

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'image' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['image']
    if file:
        try:
            # Convert the uploaded file data to an image
            image_data = file.read()
            image = Image.open(io.BytesIO(image_data)).convert("RGB")

            # Perform image processing here, for example:
            # result = process_image(image)
            
            return jsonify({'message': 'Image uploaded and processed successfully'})
        except Exception as e:
            return jsonify({'error': f'Image processing failed: {str(e)}'})
    else:
        return jsonify({'error': 'No selected file'})
    
@app.route('/cultivation-analysis', methods=['GET','POST'])
def cultivation_analysis():
    print(request.method)
    if request.method == "POST":
        if 'image' not in request.files:
            return redirect('/cultivation-analysis')
        
        file1 = request.files['image']
        
        try:
            # Read image data from file1
            image_data = file1.read()
            
            # Call detect function with image data
            test = cultivated_or_not.cultivated_or_not() 
            res = test.predict_img_data(image_data)
            print(res)
            if res:
                img_base64 = base64.b64encode(image_data).decode('utf-8')
                return render_template('cultivation_analysis.html', results=res, image=img_base64)
        except Exception as e:
            print('Error:', e)
            return redirect('/cultivation-analysis')
    return render_template('cultivation_analysis.html')

@app.route('/stages-analysis', methods=['GET','POST'])
def stages_analysis():
    print(request.method)
    if request.method == "POST":
        if 'image' not in request.files:
            return redirect('/stages-analysis')
        
        file1 = request.files['image']
        
        try:
            # Read image data from file1
            image_data = file1.read()
            
            # Call detect function with image data
            test = stages_of_paddy.stages_of_paddy(image_data) 
            res = test.predict()
            print(res)
            if res:
                img_base64 = base64.b64encode(image_data).decode('utf-8')
                return render_template('stages_analysis.html', results=res, image=img_base64)
        except Exception as e:
            print('Error:', e)
            return redirect('/stages-analysis')
    return render_template('stages_analysis.html')

if __name__ == '__main__':
    app.run(debug=True)

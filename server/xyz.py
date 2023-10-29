import os
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from PIL import Image
import time
lg = '17.4828752'
lt = '78.3270485'

# Specify the path to your WebDriver (e.g., Chrome WebDriver)
webdriver_path = './msedgedriver.exe'

# Initialize a headless browser
options = webdriver.EdgeOptions()
options.add_argument('--headless')
browser = webdriver.Edge(options=options)
browser.maximize_window()
# browser = webdriver.Chrome(executable_path=webdriver_path)

url = f'https://www.google.com/maps/@{lg},{lt},344m/data=!3m1!1e3!5m1!1e8?entry=ttu'
browser.get(url)
time.sleep(5)

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

# Use BeautifulSoup to parse the HTML content
# with open(screenshot_path, 'rb') as img_file:
#     img = Image.open(img_file)

# w, h = img.size

# left = 0
# upper = h // 4
# right = h - 10
# lower = h

# cropped_img = img.crop((left, upper, right, lower))

# # Save the cropped image
# cropped_img.save(screenshot_path)

# You can now parse the HTML content using BeautifulSoup if needed

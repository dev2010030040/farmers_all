from PIL import ImageGrab

# Capture a screenshot of the entire screen
screenshot = ImageGrab.grab()

# Save the screenshot to a file
screenshot.save("screenshot.png")

# You can also display the screenshot if you have a graphical environment
screenshot.show()
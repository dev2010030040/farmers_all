
from keras.models import load_model  # TensorFlow is required for Keras to work
from PIL import Image, ImageOps  # Install pillow instead of PIL
import numpy as np
import io

class stages_of_paddy : 
    def __init__(self, img_data) -> None:
        self.img_data = img_data

    def predict(self): 
        np.set_printoptions(suppress=True)

        model = load_model("models/states_of_paddy.h5", compile=False)

        class_names = ["plough","tillering","rippening","harvested"] 

        data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)

        image = Image.open(io.BytesIO(self.img_data)).convert("RGB")

        size = (224, 224)
        image = ImageOps.fit(image, size, Image.Resampling.LANCZOS)

        image_array = np.asarray(image)

        normalized_image_array = (image_array.astype(np.float32) / 127.5) - 1

        data[0] = normalized_image_array
        prediction = model.predict(data)
        print(prediction)
        index = np.argmax(prediction)
        class_name = class_names[index]
        confidence_score = prediction[0][index]

        print("Class:", class_name, end=" & ")
        print("Confidence Score:", confidence_score)

        return class_name
    
# test = stages_of_paddy(img_data) 
# print(test.predict())

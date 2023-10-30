
from keras.models import load_model  # TensorFlow is required for Keras to work
from PIL import Image, ImageOps  # Install pillow instead of PIL
import numpy as np


class stages_of_paddy : 
    def __init__(self) -> None:
        pass

    def predict(self): 
        np.set_printoptions(suppress=True)

        model = load_model("substandard_or_not.h5", compile=False)

        class_names = ["bad","good"]

        data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)

        image = Image.open("/Volumes/500/Work/megathon23/datasets/stages of paddy/rippening/5ozBeyond24T.jpg").convert("RGB")

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
    
test = stages_of_paddy() 
print(test.predict())

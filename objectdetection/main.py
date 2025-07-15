import os, shutil
from ultralytics import YOLO 
import cv2 

MODEL_PATH = "yolov8n.pt"
INPUT_FOLDER= "input_image"
OUTPUT_FOLDER = "output"

def detect_objects():
    model = YOLO(MODEL_PATH)
    
    os.makedirs(OUTPUT_FOLDER)
    if os.path.exists(OUTPUT_FOLDER):
        shutil.rmtree(OUTPUT_FOLDER)
        os.makedirs(OUTPUT_FOLDER)
        
    for image_name in os.listdir(INPUT_FOLDER):
        image_path = os.path.join(INPUT_FOLDER, image_name)
        output_path = os.path.join(OUTPUT_FOLDER, image_name)
           
        if not image_path.lower().endswith(('.png', '.jpg', '.jpeg')): 
            continue
        
        result =   model.predict(image_path, conf=0.5, save=False) 
        for result in result:
            anotated_image = result.plot(result)
            cv2.imwrite(output_path, anotated_image)
            print (f"Image {image_name}")
           
            
if __name__ == "__main__":
    detect_objects()
    
    
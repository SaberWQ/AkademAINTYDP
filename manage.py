import Project

def main(): 
    try:
        Project.load_env()  # Додайте цей виклик
        Project.project.run(debug= True, host = "0.0.0.0", port= 8001)
    except Exception as error:
        print(error)
        
if __name__ == '__main__':
    main() 